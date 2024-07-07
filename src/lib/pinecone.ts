import { Pinecone, PineconeRecord } from '@pinecone-database/pinecone';
import { downloadFromS3 } from './s3-server';
import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf'
import { Document, RecursiveCharacterTextSplitter } from "@pinecone-database/doc-splitter"
import { getEmbeddings } from './embedings';
import md5 from 'md5';
import { Vector } from '@pinecone-database/pinecone/dist/pinecone-generated-ts-fetch';
import { convertToAscii } from './utils';



type PDFPage = {
    pageContent: string,
    metadata: {
        loc: { pageNumber: number }
    }

}


export const loadS3IntoPinecone = async (fileKey: string) => {
    //   obtain the pdf
    console.log('downloading file from s3');
    const file_name = await downloadFromS3(fileKey)
    console.log(file_name);

    if (!file_name) {
        throw new Error('could not download file from s3');
    }

    const loader = new PDFLoader(file_name)
    const pages = (await loader.load()) as PDFPage[]

    // split and segment the pdf
    const docs = await Promise.all(pages.map(prepareDocument))

    console.log(docs);


    // vectorise and embed indivisual docunemts
    const vectors = await Promise.all(docs.flat().map(embedDocument))
    console.log(vectors);


    // upload to pinecone

    const pinecone = new Pinecone({
        apiKey: process.env.PINECONE_API_KEY!,
    });

    const index = pinecone.Index("doctalk-pdf")

    try {
        // const namespace = index.namespace(convertToAscii(fileKey));
        const validVectors = vectors.filter((vector): vector is PineconeRecord => vector !== undefined);

        console.log("inserting vectors into db");
        const ns = pinecone.index("doctalk-pdf").namespace(convertToAscii(fileKey))
        await ns.upsert(validVectors)

    } catch (error) {
        console.log(error);
        throw error;
    }

    return docs[0]

}

const embedDocument = async (doc: Document) => {

    try {
        const embeddings = await getEmbeddings(doc.pageContent)
        const hash = md5(doc.pageContent)

        return {
            id: hash,
            values: embeddings.values,
            metadata: {
                pageNumber: doc.metadata.pageNumber,
                text: doc.metadata.text,
            }
        } as PineconeRecord
    } catch (error) {
        console.log(error);

    }
}

export const truncateStringByBytes = (str: string, bytes: number) => {

    const enc = new TextEncoder()
    return new TextDecoder('utf-8').decode(enc.encode(str).slice(0, bytes))
}


const prepareDocument = async (page: PDFPage) => {

    let { pageContent, metadata } = page
    pageContent = pageContent.replace(/\n/g, ' ')

    // split the docs
    const splitter = new RecursiveCharacterTextSplitter()
    const docs = await splitter.splitDocuments([
        new Document({
            pageContent,
            metadata: {
                pageNumber: metadata.loc.pageNumber,
                text: truncateStringByBytes(pageContent, 36000)
            },
        })
    ])

    return docs

}



