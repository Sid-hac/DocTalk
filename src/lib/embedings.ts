import {OpenAIApi , Configuration} from "openai-edge"

const config = new Configuration({
    apiKey :  process.env.OPENAI_API_KEY,
})

const openAi = new OpenAIApi(config)

export const getEmbeddings = async(text : string) => {
     
    try {
        const res = await openAi.createEmbedding({
            model : 'text-embedding-ada-002',
            input : text.replace(/\n/g , ' ')
        })

        const result = await res.json()
        return result.data[0].embedding as number[]
        
    } catch (error) {
        console.log(error);
        throw new Error("error creating embeddings")
        
    }
} 