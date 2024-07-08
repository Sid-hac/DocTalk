"use client"

import { DrizzleChat } from "@/lib/db/schema"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { MessageCircle, PlusCircle } from "lucide-react"
import FileUpload from "./FileUpload"
import { Button } from "./ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"


type Props = {
  chats: DrizzleChat[],
  chatId: number
}

const ChatSidebar = ({ chats, chatId }: Props) => {
  return (
    <div className="w-full h-screen p-4 text-gray-200 bg-gray-900" >
      <Dialog>
        <DialogTrigger className="flex justify-center items-center gap-2 w-full border border-dashed border-blue-500 p-2 rounded-xl text-sm" >
          <PlusCircle className="mr-2 w-4 h-4" /> New Chat
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="flex space-y-3" >
            <DialogTitle> Upload PDF</DialogTitle>
            <DialogDescription  >

              <FileUpload classname="w-full" />

            </DialogDescription>
            <p className="text-center text-muted-foreground text-sm font-semibold " >Only PDFs are available in free plan</p>
            <Link href="/upgrade" >
              <Button className="font-bold w-full" >Upgrade</Button>
            </Link>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <div className="flex flex-col gap-2 mt-2" >
        {chats.map((chat, index) => (
          <Link href={`/chat/${chat.id}`} key={index} >
            <div className={cn("flex gap-2 items-center p-2 rounded-xl" , {
              "bg-blue-600 text-white" : chat.id === chatId,

            })} >
              <MessageCircle className="w-6 h-6"  />
              <p className="text-sm w-full overflow-hidden truncate whitespace-nowrap text-ellipsis" >{chat.pdfName}</p>
            </div>
          </Link>
        ))}

      </div>

      <div className="absolute bottom-4 left-4" >
        <div className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap" >
          <Link href="/" >Home</Link>
          <Link href="/" >Source</Link>
        </div>
      </div>


    </div>
  )
}

export default ChatSidebar