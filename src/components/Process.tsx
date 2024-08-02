"use client"

import Image from "next/image"
import { useRef } from "react"

import { useScroll, useTransform, motion } from "framer-motion"



const Process = () => {

    const processRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: processRef,
        offset: ["start end", "end start"]
    })

    const translateY = useTransform(scrollYProgress, [0, 1], [-150, 150])


    const FadeInAnimationVarient = {
        initial: {
            opacity: 0,
            y: 100
        },

        animate: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: custom * 0.10
            }
        })
    }


    return (
        <motion.section ref={processRef} className=" relative w-full h-fit pt-20" >
            <div className="flex max-sm:flex-col justify-center items-center gap-6 z-10 " >
                <motion.div className="h-fit max-w-64 p-3 rounded-lg  bg-slate-200  hover:ring-1 ring-sky-900 hover:hue-rotate-30 hover:scale-105 "
                    variants={FadeInAnimationVarient}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true,
                    }}
                    custom={0}

                >
                    <div className="flex flex-col justify-center items-center space-y-3" >
                        <Image src="/upload.png" alt="demo" width={300} height={200} quality={100} className="object-cover rounded-lg" />

                        <div className="bg-black text-white ring-1 rounded-full w-10 h-10 flex justify-center items-center font-bold font-serif text-lg" >
                            1
                        </div>
                        <div className="w-50" >
                            <p className="text-sm text-center font-semibold text-black" >Upload 100s of PDF documents in bulk</p>
                        </div>
                    </div>

                </motion.div>
                <motion.div className="h-fit max-w-64 p-3 rounded-lg  bg-slate-200  hover:ring-1 ring-sky-900 hover:hue-rotate-30 hover:scale-105 "
                    variants={FadeInAnimationVarient}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true,
                    }}
                    custom={1}
                >
                    <div className="flex flex-col justify-center items-center space-y-3" >
                        <Image src="/documents.png" alt="demo" width={300} height={200} quality={100} className="object-cover rounded-lg" />

                        <div className="bg-black text-white ring-1 rounded-full w-10 h-10 flex justify-center items-center font-bold font-serif text-lg" >
                            2
                        </div>
                        <div className="w-50" >
                            <p className="text-sm text-center font-semibold text-black" >GPT-4 Turbo will process your documents</p>
                        </div>
                    </div>

                </motion.div>
                <motion.div className="h-fit max-w-64 p-3 rounded-lg  bg-slate-200  hover:ring-1 ring-sky-900 hover:hue-rotate-30 hover:scale-105 "

                    variants={FadeInAnimationVarient}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true,
                    }}
                    custom={2}
                >
                    <div className="flex flex-col justify-center items-center space-y-3" >

                        <Image src="/upload.png" alt="demo" width={300} height={200} className=" rounded-lg" />


                        <div className="bg-black text-white ring-1 rounded-full w-10 h-10 flex justify-center items-center font-bold font-serif text-lg" >
                            3
                        </div>
                        <div className="w-50 flex" >
                            <p className="text-sm text-center font-semibold text-black" >Ask questions and engage in conversation with your pdf</p>
                        </div>
                    </div>

                </motion.div>


            </div>

            <motion.div className="absolute top-0 lg:left-10 md:left-6 flex max-sm:hidden"
                style={{
                    rotate: 30,
                    translateY: translateY
                }}
            >
                <Image src="/cylinder.png" alt="cylinder" width={200} height={200} quality={100} />
            </motion.div>

            <motion.div className="absolute bottom-0 lg:right-10 md:right-6 flex max-sm:hidden"
                style={{
                    rotate: 30,
                    translateY: translateY
                }}
            >
                <Image src="/noodle.png" alt="noodle" width={200} height={200} quality={100} />
            </motion.div>


        </motion.section >
    )
}

export default Process