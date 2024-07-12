"use client"

import { Send } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useChat } from "ai/react"
import MessageList from "./MessageList"
import { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { Message } from "ai"

type Props = {
    chatId: number
}

const ChatComponent = ({ chatId }: Props) => {

    const { data , isPending } = useQuery({
        queryKey: ['chat', chatId],
        queryFn: async () => {
            const response = await axios.post<Message[]>(`/api/get-messages`, { chatId })
            return response.data
        }
    })

    const { input, handleInputChange, handleSubmit, messages , isLoading } = useChat({
        api: "/api/chat",
        body: {
            chatId,
        },
        initialMessages: data || []
    })

    useEffect(() => {

        const messageContainer = document.getElementById("message-container")

        if (messageContainer) {
            messageContainer.scrollTo({
                top: messageContainer.scrollHeight,
                behavior: "smooth",
            })
        }

    }, [messages])

    return (
        <div className=" relative flex flex-col w-full h-screen  " id="message-container" >
            <div className="" >
                <h2 className="text-2xl font-semibold m-2" >Chat</h2>
            </div>

            {/* messages */}
            <div className="flex-1 overflow-y-scroll" >
                <MessageList messages={messages} isLoading={isPending} isAiLoading={isLoading}/>

            </div>
            {/* input */}
            <form action="" className="flex w-full mb-2" onSubmit={handleSubmit} >
                <div className=" flex w-full p-1" >
                    <Input value={input} onChange={handleInputChange} placeholder="Ask any Question...." className="w-full rounded-e-none focus:border focus:border-blue-400" />
                    {/* <input type="text" value={input} onChange={handleInputChange} placeholder="Ask any Question...." className="w-full rounded-e-none border focus:border-blue-400 focus:outline-none focus:outline-offset-0 focus:border p-2 rounded-s-lg" /> */}
                    <Button className="rounded-s-none bg-blue-600 hover:bg-blue-700" >
                        <Send className="w-4 h-4 text-white " />
                    </Button>
                </div>
            </form>


        </div>
    )
}

export default ChatComponent