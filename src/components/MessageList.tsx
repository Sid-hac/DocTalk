

import { cn } from "@/lib/utils"
import { Message } from "ai/react"
import { bool } from "aws-sdk/clients/signer"
import { Ellipsis, Loader2 } from "lucide-react"
import { useEffect, useState } from "react"


type Props = {
    isLoading: boolean;
    isAiLoading: boolean;
    messages: Message[]
}

const MessageList = ({ messages, isLoading, isAiLoading }: Props) => {


    if (isLoading) {
        return (
            <div className="w-full h-full flex justify-center items-center" >
                <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
            </div>
        )

    }
    if (!messages) return <></>
    return (
        <div className="flex flex-col gap-2 px-4 mb-3" >
            {messages.map((message) => (
                <div key={message.id} className={cn("flex", {
                    "justify-end pl-10": message.role === "user",
                    "justify-start pr-10": message.role === "assistant"
                })} >
                    <div className={cn("rounded-lg px-3 text-sm py-1 shadow-md ring-1 ring-gray-900/10", {
                        "bg-blue-600 text-white": message.role === "user"
                    })} >
                        {message.content}
                    </div>

                </div>
            ))}
        </div>

    )
}

export default MessageList