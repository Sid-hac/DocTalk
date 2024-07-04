// /api/create-chat

import { loadS3IntoPinecone } from "@/lib/pinecone";
import { NextResponse } from "next/server"

export const POST = async(req : Request , res : Response) => {

    try {

        const body = await req.json()
        const {file_key , file_name}  = body
        console.log(file_key , file_name);
        await loadS3IntoPinecone(file_key)
        return NextResponse.json({message :"Success"})

    } catch (error) {
        return NextResponse.json({ error: 'intenal servar error' }, { status: 500 })
    }
}