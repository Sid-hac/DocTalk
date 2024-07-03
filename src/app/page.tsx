

import FileUpload from "@/components/FileUpload";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { ArrowRight, FileStack, Globe, GraduationCap, LogIn, MessageSquareQuote, Microscope, NotepadText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";



export default async function Home() {

  const { userId } = await auth();
  const isAuth = !userId

  return (
    <div className=" relative flex flex-col justify-center items-start min-w-screen min-h-screen space-y-5 bg-blue-100  "  >

      <section className="flex flex-col justify-center items-center mt-10 space-y-5 z-10" >
        <div className="flex flex-col justify-center items-center space-y-4" >
          <div className="flex justify-center items-center gap-2">
            <h1 className="text-4xl max-sm:text-2xl text-black font-bold " >PDFs that Talk Back!</h1>
            <UserButton afterSignOutUrl="/" />
          </div>
          {!isAuth ? <div className="max-sm:flex-col flex justify-center items-center gap-2" >
            <Button className="h-8 font-semibold " >Go to chats <span>
              <ArrowRight className="w-5 h-5 pl-1" /></span> </Button>
            <Button className="h-8 font-semibold " variant="secondary" >manage Subscriptions</Button>
          </div> : <Link href="/sign-in" > <Button className="flex justify-center items-center gap-2" > Login to get started <span><LogIn className="w-4 h-4" /></span></Button></Link>}
        </div>
        <div className="text-lg max-w-[90%] sm:max-w-[50%] ">
          <p className="text-center" >Engage with your PDFs like never before. Ask questions, get instant answers, and transform your documents into interactive dialogues. Streamline your workflow with <span className="font-bold text-xl blue_gradient" >DocTalk</span>.
          </p>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center w-full z-10 " >
        {!isAuth && <FileUpload/>}

        <div className=" w-[70%] flex justify-center items-center mt-10" >
          <Image src="/demo.png " width={800} height={600} alt="demo" />
        </div>
      </section>

      <section className="flex flex-col justify-center items-center sm:m-20 space-y-5 z-10">

        <div className="flex flex-col justify-center items-center gap-2" >
          <h1 className="text-4xl font-bold max-sm:text-2xl" > <span className="text-4xl max-sm:text-2xl font-bold blue_gradient " >DocTalk</span> in a Nutshell</h1>
          <p className="font-serif max-w-[90%] sm:max-w-[50%] text-center " >Your PDF AI - like ChatGPT but for PDFs. Summarize and answer questions for free.</p>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 " >
          <div className="flex flex-col justify-center items-center bg-white gap-5 p-4 rounded-lg  max-sm:m-4  " >
            <h2 className="flex justify-center items-center gap-2 text-xl font-bold" > <GraduationCap className="w-6 h-6" /> For students</h2>
            <p>Study for exams, get help with homework, and answer multiple choice questions effortlessly.</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white gap-5 p-4 rounded-lg  max-sm:m-4  " >
            <h2 className="flex justify-center items-center gap-2 text-xl font-bold" > <Microscope className="w-6 h-6" /> For Researchers</h2>
            <p>Dive into scientific papers, academic articles, and books to get the information you need for your research.</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white gap-5 p-4 rounded-lg  max-sm:m-4  " >
            <h2 className="flex justify-center items-center gap-2 text-xl font-bold" > <NotepadText className="w-6 h-6" /> For Professionals</h2>
            <p>Navigate legal contracts, financial reports, manuals, and training material. Ask questions to any PDF for fast insights.</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white gap-5 p-4 rounded-lg  max-sm:m-4  " >
            <h2 className="flex justify-center items-center gap-2 text-xl font-bold" > <FileStack className="w-6 h-6" />Multi-File Chats</h2>
            <p>Create folders to organize your files and chat with multiple PDFs in one single conversation.</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white gap-5 p-4 rounded-lg  max-sm:m-4  " >
            <h2 className="flex justify-center items-center gap-2 text-xl font-bold" > <MessageSquareQuote className="w-6 h-6" />Cited Sources</h2>
            <p>Answers contain references to their source in the original PDF document. No more flipping pages.</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white gap-5 p-4 rounded-lg  max-sm:m-4  " >
            <h2 className="flex justify-center items-center gap-2 text-xl font-bold" > <Globe className="w-6 h-6" /> Any Language</h2>
            <p>Works worldwide! ChatPDF accepts PDFs in any language and can chat in any language.</p>
          </div>
        </div>
        <div className="text-center" >
          &copy; Copyright 2024
        </div>
      </section>



      <div className="absolute z-[0] w-[20%] h-[20%]  right-20 top-0  white__gradient" />
      <div className="absolute z-[0] w-[20%] h-[20%]  left-0 bottom-0 white__gradient" />
      <div className="absolute z-[0] w-[20%] h-[20%] right-0 top-0 pink__gradient" />
      <div className="absolute z-[0] w-[30%] h-[40%] right-0 bottom-0 blue__gradient" />
    </div>
  );
}
