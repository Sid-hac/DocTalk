

import Features from "@/components/Features";
import FileUpload from "@/components/FileUpload";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nutshell from "@/components/Nutshell";
import PreFooter from "@/components/PreFooter";
import Process from "@/components/Process";
import SubscribeButton from "@/components/SubscribeButton";
import { Button } from "@/components/ui/button";
import Visitors from "@/components/Visitors";
import { db } from "@/lib/db";
import { chats } from "@/lib/db/schema";
import { checkSubscription } from "@/lib/subscription";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { ArrowRight, FileStack, Globe, GraduationCap, LogIn, MessageSquareQuote, Microscope, NotepadText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {useTypewriter , Cursor} from "react-simple-typewriter"



export default async function Home() {


  const { userId } = auth();
  const isAuth = !userId
  const isPro = await checkSubscription()

  let firstChat;
  if (userId) {
    firstChat = await db.select().from(chats).where(eq(chats.userId, userId))
    firstChat = firstChat[0]
  }

  return (
    <div className=" relative flex flex-col justify-center items-start min-w-screen min-h-screen space-y-10 bg-blue-50"  >
      <div className="w-full h-fit bg-gradient-to-r from-indigo-500 to-fuchsia-500 z-10" >


        <Hero isPro = {isPro} firstChat={firstChat} isAuth={isAuth} />

        <section className="flex flex-col justify-center items-center w-full z-10 space-y-10 mt-10" >
          {!isAuth && <FileUpload classname="w-[50%]" />}

          <div className="mt-10 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl sm:m-4" >
            <Image src="/highlight.png " width={900} height={600} quality={100} alt="demo" className="rounded-md bg-white p-2 shadow-2xl ring-1 ring-gray-900/10" />
          </div>
        </section>
      </div>

      <Process />
      <Features isAuth={isAuth} firstChatId={firstChat?.id} />
      <Visitors />

      <Nutshell />
      <PreFooter isAuth={isAuth} firstChatId={firstChat?.id} />

      <Footer />

      <div className="absolute z-[0] w-[20%] h-[20%]  right-20 top-0  white__gradient" />
      <div className="absolute z-[0] w-[20%] h-[20%]  left-0 bottom-0 white__gradient" />
      <div className="absolute z-[0] w-[20%] h-[20%] right-0 top-0 pink__gradient" />
      {/* <div className="absolute z-[0] w-[10%] h-[16%] left-0 bottom-36  pink__gradient" />
      <div className="absolute z-[0] w-[20%] h-[20%] right-0 bottom-0 blue__gradient" /> */}
    </div>
  );
}
