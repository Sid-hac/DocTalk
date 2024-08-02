"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion"


type Props = {
  isAuth: boolean;
  firstChatId: number | undefined;
}

const PreFooter = ({ isAuth, firstChatId }: Props) => {


  const FadeInAnimationVarient = {
    initial: {
      rotate: 0,
    },

    animate: {
      rotate: 30,
      transition: {
        duration : 1,
      }
    }
  }

  return (

    <section className=" flex flex-col justify-center items-center w-full h-fit bg-slate-100 border-t border-gray-300 bg-[url('/bg3.svg')] z-10 space-y-10" >
      <div className="flex flex-col gap-6 justify-center items-center mt-10" >
        <h1 className="text-6xl font-bold text-center tracking-tight" >Unlock Your Potential <br /> With{" "}
          <motion.span className="text-6xl font-bold text-blue-700"
           variants={FadeInAnimationVarient}
           initial= "initial"
           whileInView="animate"
          >
            DocTalk
          </motion.span>
        </h1>
        <p className="text-lg font-semibold" >Don&apos;t miss out on using AI for your work!</p>
      </div>
      <div className="flex justify-center items-center gap-2" >
        <Image src="/image-94.png" alt="users" width={100} height={100} quality={100} />
        <div>
          <Image src="/star.svg" alt="stars" width={100} height={100} quality={100} />
          <p className="text-sm " >Loved by 40,000 users</p>
        </div>

      </div>
      <div className="w-fit" >
        {isAuth ? (
          <Link href="/sign-in " >
            <Button className="gradient-button flex gap-2 items-center justify-center bg-gradient-to-r from-cyan-500 via-green-500 to-cyan-500 px-7 md:py-4 py-3 text-white mx-auto rounded-full font-bold text-lg md:text-xl hover:scale-105 h-14 " >
              Upload your First pdf
              <ArrowRight className="w-6 h-6" />
            </Button>
          </Link>
        ) : (
          <Link href={`/chat/${firstChatId}`} >
            <Button className="gradient-button flex gap-2 items-center justify-center bg-gradient-to-r from-cyan-500 via-green-500 to-cyan-500 px-7 md:py-4 py-3 text-white mx-auto rounded-full font-bold text-lg md:text-xl hover:scale-105 h-14" >
              Upload your First pdf
              <ArrowRight className="w-6 h-6" />
            </Button>
          </Link>
        )}
      </div>
    </section>
  )
}

export default PreFooter