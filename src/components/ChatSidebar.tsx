"use client"

import { DrizzleChat } from "@/lib/db/schema"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Loader, MessageCircle, PlusCircle } from "lucide-react"
import FileUpload from "./FileUpload"
import { Button } from "./ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useState } from "react"
import axios from "axios"
import { redirect } from "next/navigation"
import SubscribeButton from "./SubscribeButton"


type Props = {
  chats: DrizzleChat[],
  chatId: number,
  isPro: boolean
}

const ChatSidebar = ({ chats, chatId, isPro }: Props) => {

  const [loading, setLoading] = useState(false)

  const handleSubscription = async () => {

    try {
      setLoading(true)

      const response = await axios.get("/api/stripe")
      // redirect(response.data.url)
      window.location.href = response.data.url

    } catch (error) {

    } finally {
      setLoading(false)
    }
  }

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

            <SubscribeButton isPro={isPro} />

          </DialogHeader>
        </DialogContent>
      </Dialog>

      <div className="flex flex-col gap-2 mt-2" >
        {chats.length === 0 && <p className="text-sm text-muted-foreground text-center" > Nothing to show here </p>}
        {chats.map((chat, index) => (
          <Link href={`/chat/${chat.id}`} key={index} >
            <div className={cn("flex gap-2 items-center p-2 rounded-xl bg-gray-800", {
              "bg-blue-600 text-white": chat.id === chatId,

            })} >
              <MessageCircle className="w-6 h-6" />
              <p className="text-sm w-full overflow-hidden truncate whitespace-nowrap text-ellipsis" >{chat.pdfName}</p>
            </div>
          </Link>
        ))}

      </div>

      <div className=" flex justify-center items-end gap-2 absolute bottom-4 left-4" >
        <SubscribeButton isPro={isPro} />
        <div className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap" >
          <Link href="/" >Home</Link>
          <Link href="/" >Source</Link>
        </div>

      </div>


    </div>
  )
}

export default ChatSidebar