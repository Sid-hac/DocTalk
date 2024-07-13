

// bg-[url('/bg2.svg')]

import { BadgeCheck } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link";

type Props = {
    isAuth: boolean;
    firstChatId: number | undefined;
}

const Features = ({ isAuth, firstChatId }: Props) => {
    return (

        <section className="mb-10 py-10  w-full h-fit bg-gradient-to-b from-slate-200 to-slate-50 z-10 px-3 md:px-20" >
            <div className="flex justify-center items-center mt-20 " >
                <h1 className=" text-2xl md:text-4xl lg:text-6xl font-bold" >Talk to PDFs  <span className="text text-blue-700" >with AI</span> </h1>
            </div>

            <div className="flex flex-col gap-8 md:gap-12 lg:gap-20 bg-[url('/bg2.svg')]" >
                <div className="flex flex-col justify-start items-center mt-10" >
                    <div className="flex max-sm:flex-col justify-center items-center gap-10" >
                        <Image src="/chat.webp" alt="feature" width={1000} height={900} quality={100} className="object-cover rounded-lg" />
                        <div className="flex flex-col gap-3 sm:gap-4 lg:gap-8" >
                            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl  " >Ask Questions</h1>
                            <p className="text-lg" >Have conversation with PDFs to get answers in natural language, along with citations and the source PDF.</p>
                            <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-4 " >
                                <div className="flex gap-2" >
                                    <BadgeCheck className="w-5 h-5 text-green-500" />
                                    <p>Engage with several PDFs simultaneously</p>
                                </div>
                                <div className="flex gap-2 " >
                                    <BadgeCheck className="w-5 h-5 text-green-500" />
                                    <p>Ask question in any language</p>
                                </div>
                                <div className="flex gap-2" >
                                    <BadgeCheck className="w-5 h-5 text-green-500" />
                                    <p>Get accurate, relevant answers</p>
                                </div>
                            </div>
                            <div className="flex justify-start items-center" >
                                {isAuth ? (
                                    <Link href="/sign-in " >
                                        <Button className="gradient-button flex gap-2 items-center justify-center bg-gradient-to-r from-cyan-500 via-green-500 to-cyan-500 px-7 md:py-4 py-3 text-white mx-auto rounded-full font-bold text-lg md:text-xl hover:scale-105" >
                                            Start Now
                                        </Button>
                                    </Link>
                                ) : (
                                    <Link href={`/chat/${firstChatId}`} >
                                        <Button className="gradient-button flex gap-2 items-center justify-center bg-gradient-to-r from-cyan-500 via-green-500 to-cyan-500 px-7 md:py-4 py-3 text-white mx-auto rounded-full font-bold text-lg md:text-xl hover:scale-105 " >
                                            Start Now
                                        </Button>
                                    </Link>
                                )}

                            </div>


                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-start items-center mt-10" >
                    <div className="flex max-sm:flex-col justify-center items-center gap-10" >

                        <div className="flex flex-col gap-3 sm:gap-4 lg:gap-8" >
                        <Image src="/generate.webp" alt="feature" width={1200} height={900} quality={100} className=" flex object-cover rounded-lg sm:hidden" />
                            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl  " >Generate Content</h1>
                            <p className="text-lg" >Unlock your content creation potential effortlessly. Streamline the process of generating articles, crafting essays, and generating summaries.</p>
                            <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-4 " >
                                <div className="flex gap-2" >
                                    <BadgeCheck className="w-5 h-5 text-green-500" />
                                    <p>Generate reports and essays quickly</p>
                                </div>
                                <div className="flex gap-2 " >
                                    <BadgeCheck className="w-5 h-5 text-green-500" />
                                    <p>Brainstorm ideas effortlessly</p>
                                </div>
                                <div className="flex gap-2" >
                                    <BadgeCheck className="w-5 h-5 text-green-500" />
                                    <p>Combine insights from multiple PDFs</p>
                                </div>
                            </div>

                            <div className="flex justify-start items-center" >
                                {isAuth ? (
                                    <Link href="/sign-in " >
                                        <Button className="gradient-button flex gap-2 items-center justify-center bg-gradient-to-r from-cyan-500 via-green-500 to-cyan-500 px-7 md:py-4 py-3 text-white mx-auto rounded-full font-bold text-lg md:text-xl hover:scale-105" >
                                            Start Now
                                        </Button>
                                    </Link>
                                ) : (
                                    <Link href={`/chat/${firstChatId}`} >
                                        <Button className="gradient-button flex gap-2 items-center justify-center bg-gradient-to-r from-cyan-500 via-green-500 to-cyan-500 px-7 md:py-4 py-3 text-white mx-auto rounded-full font-bold text-lg md:text-xl hover:scale-105 " >
                                            Start Now
                                        </Button>
                                    </Link>
                                )}

                            </div>

                        </div>
                        <Image src="/generate.webp" alt="feature" width={1200} height={900} quality={100} className="object-cover rounded-lg sm:flex hidden " />
                    </div>
                </div>
                <div className="flex flex-col justify-start items-center mt-10" >
                    <div className="flex max-sm:flex-col justify-center items-center gap-10" >
                        <Image src="/share.webp" alt="feature" width={1000} height={900} quality={100} className="object-cover rounded-lg" />
                        <div className="flex flex-col gap-3 sm:gap-4 lg:gap-8" >
                            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl  " >Ask Questions</h1>
                            <p className="text-lg" >Have conversation with PDFs to get answers in natural language, along with citations and the source PDF.</p>
                            <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-4 " >
                                <div className="flex gap-2" >
                                    <BadgeCheck className="w-5 h-5 text-green-500" />
                                    <p>Engage with several PDFs simultaneously</p>
                                </div>
                                <div className="flex gap-2 " >
                                    <BadgeCheck className="w-5 h-5 text-green-500" />
                                    <p>Ask question in any language</p>
                                </div>
                                <div className="flex gap-2" >
                                    <BadgeCheck className="w-5 h-5 text-green-500" />
                                    <p>Get accurate, relevant answers</p>
                                </div>
                            </div>
                            <div className="flex justify-start items-center" >
                                {isAuth ? (
                                    <Link href="/sign-in " >
                                        <Button className="gradient-button flex gap-2 items-center justify-center bg-gradient-to-r from-cyan-500 via-green-500 to-cyan-500 px-7 md:py-4 py-3 text-white mx-auto rounded-full font-bold text-lg md:text-xl hover:scale-105" >
                                            Start Now
                                        </Button>
                                    </Link>
                                ) : (
                                    <Link href={`/chat/${firstChatId}`} >
                                        <Button className="gradient-button flex gap-2 items-center justify-center bg-gradient-to-r from-cyan-500 via-green-500 to-cyan-500 px-7 md:py-4 py-3 text-white mx-auto rounded-full font-bold text-lg md:text-xl hover:scale-105 " >
                                            Start Now
                                        </Button>
                                    </Link>
                                )}

                            </div>


                        </div>
                    </div>
                </div>


            </div>


        </section>
    )
}

export default Features