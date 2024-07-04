import { Pinecone } from '@pinecone-database/pinecone';
import { downloadFromS3 } from './s3-server';

export const pinecone = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY!,
});


export const loadS3IntoPinecone = (fileKey : string) => {
    //   obtain the pdf
    console.log('downloading file from s3');
    const file_name = downloadFromS3(fileKey)
    
}



