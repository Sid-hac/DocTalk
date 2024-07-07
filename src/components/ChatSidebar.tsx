"use client"

import { DrizzleChat } from "@/lib/db/schema"


type Props = {
  chats : DrizzleChat[],
  chatId : number
}

const ChatSidebar = ({chats , chatId }: Props) => {
  return (
    <div>
      

    </div>
  )
}

export default ChatSidebar