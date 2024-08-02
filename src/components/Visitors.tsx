"use client"

import { motion } from "framer-motion"



const Visitors = () => {

    const FadeInAnimationVarient = {
        initial: {
            opacity: 0,
            y: 100
        },

        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    }
    const staggeredFadeInAnimationVarient = {
        initial: {
            opacity: 0,
            y: 100
        },

        animate: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: custom * 0.05,
                ease: "easeInOut",
                type: "spring",
                stiffness : 260
            }
        })
    }



    return (
        <motion.section className="p-10 bg-gradient-to-b from-indigo-500 to-purple-500 h-fit  w-full z-10"
            variants={FadeInAnimationVarient}
            initial="initial"
            whileInView="animate"
        >
            <div className="flex flex-col justify-center items-center p-8 space-y-8 " >
                <h1 className=" text-xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white " >We help <span className="underline" >ambitious professionals</span>  succeed</h1>
                <p className="text-lg text-white font-semibold " >Our results speak for themselves.</p>
            </div>
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 w-full rounded-2xl " >
                <motion.div className="text-lg flex flex-col gap-2 justify-center items-center bg-slate-50 p-5 rounded-2xl "
                    variants={staggeredFadeInAnimationVarient}
                    initial="initial"
                    whileInView="animate"
                    custom={0}
                >
                    <span className="text-2xl font-semibold" >100,000+</span>
                    <span className="text-sm font-semibold" >Professionals</span>
                </motion.div>
                <motion.div className="text-lg flex flex-col gap-2 justify-center items-center bg-slate-50 p-5 rounded-2xl "
                    variants={staggeredFadeInAnimationVarient}
                    initial="initial"
                    whileInView="animate"
                    custom={1}
                >
                    <span className="text-2xl font-semibold" >500,000+</span>
                    <span className="text-sm font-semibold" >Hours Saved</span>
                </motion.div>
                <motion.div className="text-lg flex flex-col gap-2 justify-center items-center bg-slate-50 p-5 rounded-2xl "
                    variants={staggeredFadeInAnimationVarient}
                    initial="initial"
                    whileInView="animate"
                    custom={2}
                >
                    <span className="text-2xl font-semibold" >1M+</span>
                    <span className="text-sm font-semibold" >Questions Asked</span>
                </motion.div>
                <motion.div className="text-lg flex flex-col gap-2  justify-center items-center bg-slate-50 p-5 rounded-2xl "
                    variants={staggeredFadeInAnimationVarient}
                    initial="initial"
                    whileInView="animate"
                    custom={3}
                >
                    <span className="text-2xl font-semibold" >150%+</span>
                    <span className="text-sm font-semibold" >Return On Investment</span>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Visitors