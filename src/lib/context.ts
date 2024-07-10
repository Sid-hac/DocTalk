import { Pinecone } from "@pinecone-database/pinecone";
import { convertToAscii } from "./utils";
import { getEmbeddings } from "./embedings";


const getMatchesFromEmbeddings = async (embeddings: number[], fileKey: string) => {

    const pinecone = new Pinecone({
        apiKey: process.env.PINECONE_API_KEY!,
    });

    const index = await pinecone.Index("doctalk-pdf")

    try {

        const queryResponse = await index.namespace(convertToAscii(fileKey)).query({
            vector: embeddings,
            topK: 5,
            includeValues: true,
        });

        return queryResponse.matches || [];


    } catch (error) {
        console.log(error);

    }

}


const getContext = async (query: string, filekey: string) => {

    const queryEmbeddings = await getEmbeddings(query)
    const matches = await getMatchesFromEmbeddings(queryEmbeddings.values, filekey)

    const qualifyingDocs = matches?.filter((match) => match.score && match.score > 0.7)

    type Metadata = {
        text: string,
        pageNumber: number,
    }

    let docs = qualifyingDocs?.map((match) => (match.metadata as Metadata).text)

    // 5 vectors
    return docs?.join('\n').substring(0,3000) || "No relevant documents found"


}

export { getContext, getMatchesFromEmbeddings }