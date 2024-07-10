// import {OpenAIApi , Configuration} from "openai-edge"


import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY!);

export async function getEmbeddings(text : string) {
  // For embeddings, use the embedding-001 model
  const model = genAI.getGenerativeModel({ model: "embedding-001"});
  text = text.replace(/\n/g , ' ')
  const result = await model.embedContent(text);
  
  return result.embedding;

}





// const config = new Configuration({
//     apiKey :  process.env.OPENAI_API_KEY,
// })

// const openAi = new OpenAIApi(config)

// export const getEmbeddings = async(text : string) => {
     
//     try {
//         const res = await openAi.createEmbedding({
//             model : 'text-embedding-ada-002',
//             input : text.replace(/\n/g , ' ')
//         })
        

//         const result = await res.json()
//         console.log(result);
        
//         return result.data[0].embedding as number[]
        
//     } catch (error) {
//         console.log(error);
//         throw new Error("error creating embeddings")
        
//     }
// } 