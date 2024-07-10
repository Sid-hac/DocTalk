import ChatComponent from "@/components/ChatComponent"
import ChatSidebar from "@/components/ChatSidebar"
import PdfViewer from "@/components/PdfViewer"
import { db } from "@/lib/db"
import { chats } from "@/lib/db/schema"
import { auth } from "@clerk/nextjs/server"
import { eq } from "drizzle-orm"
import { redirect } from "next/navigation"



type Props = {
    params : {
        chatId : string
    }
}

const ChatPage = async({params :{ chatId}}: Props) => {

    const {userId} = auth()
    if (!userId) {
        return redirect("/sign-in")
    }

    const _chats = await db.select().from(chats).where(eq(chats.userId , userId))

    const chat = _chats.find(c => c.id === parseInt(chatId))

  return (
    <div className="flex max-h-screen " >
        <div className="flex w-full max-h-screen marker:" >
            <div className="flex-[3] max-w-xs  overflow-y-scroll" >
                <ChatSidebar chats={_chats} chatId={parseInt(chatId)} />
            </div>
            <div className="max-h-screen overflow-y-scroll flex-[5]" >
                <PdfViewer pdf_url={chat?.pdfUrl!} />
            </div>
            <div className="flex-[4] border-l-4 border-l-slate-200 " >
                <ChatComponent chatId={parseInt(chatId)} />
            </div>
        </div>
    </div>
  )
}

export default ChatPage