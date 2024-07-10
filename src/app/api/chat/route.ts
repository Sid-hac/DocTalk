// // /api/chat

// import { streamText } from "ai"
// import { GoogleGenerativeAIStream, Message, StreamingTextResponse } from 'ai';

// // Access your API key as an environment variable (see "Set up your API key" above)


// // The Gemini 1.5 models are versatile and work with most use cases
// import { createGoogleGenerativeAI } from '@ai-sdk/google';
// import { NextResponse } from "next/server";

// const google = createGoogleGenerativeAI({
//     // custom settings
//     apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY
// });


// export const POST = async (req: Request) => {

//     try {

//         const { messages } = await req.json();
//         const result = await streamText({
//             model: google("models/gemini-1.5-flash-latest"),
//             messages,
//         });

//         const text = result.toTextStreamResponse()
//         // for await (const textPart of textStream) {
//         //     console.log(textPart);
//         //   }
//         // console.log(text);
//     //     return new NextResponse(text, {
//     //        status: 200,
//     //        headers: { 'Content-Type': 'application/json' }
//     //    });

//        return new StreamingTextResponse(text);

//     } catch (error) {
//         console.log(error);

//     }

// }





// import { GoogleGenerativeAI } from '@google/generative-ai';
// import { GoogleGenerativeAIStream, Message, StreamingTextResponse } from 'ai';

// const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY!);

// // convert messages from the Vercel AI SDK Format to the format
// // that is expected by the Google GenAI SDK
// const buildGoogleGenAIPrompt = (messages: Message[]) => ({
//   contents: messages
//     .filter(message => message.role === 'user' || message.role === 'assistant')
//     .map(message => ({
//       role: message.role === 'user' ? 'user' : 'model',
//       parts: [{ text: message.content }],
//     })),
// });

// export async function POST(req: Request) {
//   // Extract the `prompt` from the body of the request
//   const { messages } = await req.json();

//   const geminiStream = await genAI
//     .getGenerativeModel({ model: 'gemini-1.5-flash' })
//     .generateContentStream(buildGoogleGenAIPrompt(messages));

//   // Convert the response into a friendly text-stream
//   const stream = GoogleGenerativeAIStream(geminiStream);

//   // Respond with the stream
//   return new StreamingTextResponse(stream);
// }




// /api/chat

import { streamText, StreamingTextResponse, StreamData, Message } from 'ai';
import { google } from '@ai-sdk/google';
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { chats } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { getContext } from '@/lib/context';
import { FileKey } from 'lucide-react';

const model = google('models/gemini-1.5-flash-latest', {
  topK: 64, // Example of model-specific setting
  // Add other model-specific settings here if needed
});

export const POST = async (req: Request) => {
  try {
    const { messages, chatId } = await req.json();

    const _chats = await db.select().from(chats).where(eq(chats.id, chatId));

    if (_chats.length != 1) {
      return  NextResponse.json({ error: 'Chat not found' }, {
        status: 404,
      });
    }
    const filekey = _chats[0].fileKey;
    const lastMessage = messages[messages.length - 1]

    const context = await getContext(lastMessage.content , filekey)

    const prompt = {
      role: "system",
      content: `AI assistant is a brand new, powerful, human-like artificial intelligence.
      The traits of AI include expert knowledge, helpfulness, cleverness, and articulateness.
      AI is a well-behaved and well-mannered individual.
      AI is always friendly, kind, and inspiring, and he is eager to provide vivid and thoughtful responses to the user.
      AI has the sum of all knowledge in their brain, and is able to accurately answer nearly any question about any topic in conversation.
      AI assistant is a big fan of Pinecone and Vercel.
      START CONTEXT BLOCK
      ${context}
      END OF CONTEXT BLOCK
      AI assistant will take into account any CONTEXT BLOCK that is provided in a conversation.
      If the context does not provide the answer to question, the AI assistant will say, "I'm sorry, but I don't know the answer to that question".
      AI assistant will not apologize for previous responses, but instead will indicated new information was gained.
      AI assistant will not invent anything that is not drawn directly from the context.
      `,
    };


    // Generate a streaming response using Google's Generative AI
    const result = await streamText({
      model,
      messages: {
        prompt,
        ...messages.filter((message : Message ) => message.role === 'user')
      }
    });

    // Create a StreamData instance
    const data = new StreamData();
    data.append('initialized call');

    // Return a StreamingTextResponse that combines the result stream with the data stream
    return new StreamingTextResponse(
      result.toAIStream({
        onFinal() {
          data.append('call completed');
          data.close();
        },
      }),
      {
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
        },
      },
      data
    );
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
