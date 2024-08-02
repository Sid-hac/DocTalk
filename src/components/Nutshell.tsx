"use client"

import { FileStack, Globe, GraduationCap, MessageSquareQuote, Microscope, NotepadText } from "lucide-react"
import { motion } from "framer-motion"

const Nutshell = () => {


    const FadeInAnimationVarient = {
        initial: {
            opacity: 0,
            y: 100
        },

        animate: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: custom * 0.10,
            }
        })
    }


    return (
        <section className="flex flex-col justify-center items-center sm:m-20 space-y-5 z-10">

            <div className="flex flex-col justify-center items-center gap-2" >
                <h1 className="text-4xl font-bold max-sm:text-2xl" > <span className="text-4xl max-sm:text-2xl font-bold blue_gradient " >DocTalk</span> in a Nutshell</h1>
                <p className="font-serif max-w-[90%] sm:max-w-[50%] text-center " >Your PDF AI - like ChatGPT but for PDFs. Summarize and answer questions for free.</p>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 sm:gap-4 ">
                <motion.div className="flex flex-col justify-center items-center  gap-5 p-4 rounded-lg  max-sm:m-4   bg-slate-200  hover:ring-1 ring-sky-900 hover:hue-rotate-30 hover:scale-105"
                    variants={FadeInAnimationVarient}
                    initial="initial"
                    whileInView="animate"
                    custom={0}
                >
                    <h2 className="flex justify-center items-center gap-2 text-xl font-bold" > <GraduationCap className="w-6 h-6" /> For students</h2>
                    <p>Study for exams, get help with homework, and answer multiple choice questions effortlessly.</p>
                </motion.div>
                <motion.div className="flex flex-col justify-center items-center  gap-5 p-4 rounded-lg  max-sm:m-4  bg-slate-200  hover:ring-1 ring-sky-900 hover:hue-rotate-30 hover:scale-105 "
                    variants={FadeInAnimationVarient}
                    initial="initial"
                    whileInView="animate"
                    custom={1}
                >
                    <h2 className="flex justify-center items-center gap-2 text-xl font-bold" > <Microscope className="w-6 h-6" /> For Researchers</h2>
                    <p>Dive into scientific papers, academic articles, and books to get the information you need for your research.</p>
                </motion.div>
                <motion.div className="flex flex-col justify-center items-center gap-5 p-4 rounded-lg  max-sm:m-4  bg-slate-200  hover:ring-1 ring-sky-900 hover:hue-rotate-30 hover:scale-105 "
                    variants={FadeInAnimationVarient}
                    initial="initial"
                    whileInView="animate"
                    custom={2}
                >
                    <h2 className="flex justify-center items-center gap-2 text-xl font-bold" > <NotepadText className="w-6 h-6" /> For Professionals</h2>
                    <p>Navigate legal contracts, financial reports, manuals, and training material. Ask questions to any PDF for fast insights.</p>
                </motion.div>
                <motion.div className="flex flex-col justify-center items-center gap-5 p-4 rounded-lg  max-sm:m-4   bg-slate-200  hover:ring-1 ring-sky-900 hover:hue-rotate-30 hover:scale-105"
                    variants={FadeInAnimationVarient}
                    initial="initial"
                    whileInView="animate"
                    custom={3}
                >
                    <h2 className="flex justify-center items-center gap-2 text-xl font-bold" > <FileStack className="w-6 h-6" />Multi-File Chats</h2>
                    <p>Create folders to organize your files and chat with multiple PDFs in one single conversation.</p>
                </motion.div>
                <motion.div className="flex flex-col justify-center items-center gap-5 p-4 rounded-lg  max-sm:m-4  bg-slate-200  hover:ring-1 ring-sky-900 hover:hue-rotate-30 hover:scale-105 "
                    variants={FadeInAnimationVarient}
                    initial="initial"
                    whileInView="animate"
                    custom={4}
                >
                    <h2 className="flex justify-center items-center gap-2 text-xl font-bold" > <MessageSquareQuote className="w-6 h-6" />Cited Sources</h2>
                    <p>Answers contain references to their source in the original PDF document. No more flipping pages.</p>
                </motion.div>
                <motion.div className="flex flex-col justify-center items-center  gap-5 p-4 rounded-lg  max-sm:m-4   bg-slate-200  hover:ring-1 ring-sky-900 hover:hue-rotate-30 hover:scale-105"
                    variants={FadeInAnimationVarient}
                    initial="initial"
                    whileInView="animate"
                    custom={5}
                >
                    <h2 className="flex justify-center items-center gap-2 text-xl font-bold" > <Globe className="w-6 h-6" /> Any Language</h2>
                    <p>Works worldwide! ChatPDF accepts PDFs in any language and can chat in any language.</p>
                </motion.div>
            </div>
        </section>
    )
}

export default Nutshell