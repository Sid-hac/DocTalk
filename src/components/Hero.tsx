"use client"

import { UserButton } from "@clerk/nextjs"
import { Button } from "./ui/button"
import { ArrowRight, LogIn } from "lucide-react"
import SubscribeButton from "./SubscribeButton"
import Link from "next/link"
import { Cursor, useTypewriter } from "react-simple-typewriter"


type Props = {
    isPro : boolean,
    firstChat : { id: number; userId: string; pdfName: string; pdfUrl: string; createdAt: Date; fileKey: string; } | undefined ;
    isAuth : boolean
}

const Hero = ({isPro , firstChat , isAuth}: Props) => {

    const [text] = useTypewriter({
        words : ["Connecting..." , "you with" , "your documents" , "seamlessly" ],
        loop : false,
        typeSpeed : 120,
        deleteSpeed : 50
      })

  return (
     
    <section className="flex flex-col justify-center items-center mt-10 space-y-5  " >
          <div className="flex flex-col justify-center items-center space-y-4" >
            <div className="flex justify-center items-center gap-2">
              <h1 className="text-4xl max-sm:text-2xl text-black font-bold " >PDFs that Talk Back!</h1>
              <UserButton afterSignOutUrl="/" />
            </div>
            {!isAuth ? <div className="max-sm:flex-col flex justify-center items-center gap-2" >

              <Button className="h-8 font-semibold " disabled={!firstChat} >
                Go to chats
                <span>
                  <ArrowRight className="w-5 h-5 pl-1" />
                </span>
              </Button>

              <SubscribeButton isPro={isPro} />
            </div> : <Link href="/sign-in" > <Button className="flex justify-center items-center gap-2" > Login to get started <span><LogIn className="w-4 h-4" /></span></Button></Link>}
          </div>
          <div className="text-lg max-w-[90%] sm:max-w-[50%] ">
            {/* <p className="text-center" >Engage with your PDFs like never before. Ask questions, get instant answers, and transform your documents into interactive dialogues. Streamline your workflow with <span className="font-bold text-3xl text-blue-600" >{text}</span>. */}
            <p className="text-center" >Engage with your PDFs like never before. Ask questions, get instant answers, and transform your documents into interactive dialogues. Streamline your workflow with <span className="text-3xl"  style={{ color: '#D3D3D3', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }} >{text}</span>
            <span> <Cursor cursorStyle= "|" /> </span>
            </p>
          </div>
        </section>
  )
}

export default Hero