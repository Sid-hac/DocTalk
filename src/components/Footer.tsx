import { Facebook, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"



type Props = {}

const Footer = (props: Props) => {
    return (
        <section className="w-full h-fit bg-gray-900 z-10 p-5 " >
            <div className=" flex flex-col sm:flex-row justify-between max-sm:gap-5" >
                <div className="flex flex-col gap-2  sm:gap-4 md:gap-4 lg:gap-6   " >
                    <div className="text-white text-4xl font-bold" >
                        <Link href="/">
                            DocTalk.<span className="text-lg font-mono blue_gradient " >io</span>
                        </Link>
                    </div>
                    <div>
                        <Image src="/google.webp" alt="google" width={150} height={150} quality={100} />
                    </div>

                </div>

                <div className=" flex justify-around items-center gap-8 sm:gap-10 md:gap-12 lg:gap-14" >
                    <div className="flex flex-col justify-center items-center gap-4 sm:gap-5 lg:gap-8" >
                        <h2 className="text-white text-sm sm:text-lg font-bold" >BLOG</h2>
                        <div className="flex flex-col justify-center items-center gap-2" >
                            <Link href="/" >
                                <p className="text-sm text-muted-foreground hover:underline text-center" >Simplifying PDF Summarization <br />
                                    with AI Technology</p>
                            </Link>

                        </div>


                    </div>
                    <div className="flex flex-col justify-center items-center  gap-4 sm:gap-5 lg:gap-8" >

                        <h2 className="text-white text-sm sm:text-lg font-bold" >RESOURCES</h2>
                        <div className="flex flex-col justify-center items-center gap-2" >
                            <Link href="/" >
                                <p className="text-sm text-muted-foreground hover:underline" >Refund Request</p>
                            </Link>
                            <Link href="/" >
                                <p className="text-sm text-muted-foreground hover:underline" >Become Affiliate</p>
                            </Link>

                        </div>


                    </div>
                    <div className="flex flex-col justify-center items-center  gap-4 sm:gap-5 lg:gap-8" >
                        <h2 className="text-white text-sm sm:text-lg font-bold" >LEGAL</h2>
                        <div className="flex flex-col justify-center items-center gap-2" >
                            <Link href="/" >
                                <p className="text-sm text-muted-foreground hover:underline" >Privacy Policy</p>
                            </Link>
                            <Link href="/" >
                                <p className="text-sm text-muted-foreground hover:underline" >Terms & Conditions</p>
                            </Link>

                        </div>


                    </div>

                </div>

            </div>
            <hr className="mt-10 mb-10" />
            <div className="flex flex-col sm:flex-row justify-between max-sm:gap-5" >
                <div>
                    <p className="text-sm text-muted-foreground" >&copy; 2024 DocTalk.<span className="text-xs font-mono blue_gradient" >io</span>™ All Rights Reserved</p>
                </div>
                <div className="flex justify-center items-center gap-3" >
                    <p className="text-sm text-muted-foreground" >Contact us</p>
                    <div className="flex justify-center items-center gap-2" >
                        <Link href="/" >
                            <Facebook className="w-5 h-5 fill-slate-500  " />
                        </Link>
                        <Link href="/" >
                            <Twitter className="w-5 h-5 fill-slate-500   " />
                        </Link>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Footer