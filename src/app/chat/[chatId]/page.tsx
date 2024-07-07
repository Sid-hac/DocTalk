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
    <div className="flex max-h-screen overflow-scroll" >
        <div className="flex w-full max-h-screen overflow-scroll" >
            <div className="flex-[1] max-w-xs  " >
                {/* <ChatSidebar/> */}
            </div>
            <div className="max-h-screen p-4 overflow-scroll flex-[5]" >
                {/* <PdfViewer/> */}
            </div>
            <div className="flex-[3] border-l-4 border-l-slate-200  " >
                {/* <ChatComponent/> */}
            </div>
        </div>
    </div>
  )
}

export default ChatPage