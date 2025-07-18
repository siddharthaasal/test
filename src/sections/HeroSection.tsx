import { motion } from "framer-motion";
import DataFlowDiagram from "../components/DataFlowDiagram";

export default function HeroSection() {
    return (
        <section className="relative h-screen overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="h-full w-full bg-radial-[at_50%_0%] from-white from-[4%] via-privue-200 via-[50%] to-privue-100 to-[100%]" />

                {/* Vertical boundary lines */}
                <div className="hidden md:block absolute top-0 h-full w-px bg-gradient-to-b from-[#1E1F25] to-transparent opacity-10 mix-blend-darken z-50 left-1/6" />
                <div className="hidden md:block absolute top-0 h-full w-px bg-gradient-to-b from-[#1E1F25] to-transparent opacity-10 mix-blend-darken z-50 right-1/6" />
            </div>



            {/* <div className="hidden md:block absolute top-0 h-full w-px bg-gradient-to-b from-[#1E1F25] to-transparent opacity-10 mix-blend-darken z-50 right-1/6" /> */}
            {/* </div> */}

            {/* Content */}
            <div className="relative h-full flex flex-col justify-center items-center text-center px-4 -my-20">
                <div className="w-full max-w-4xl">

                    {/* Banner */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                        className="mb-12 mt-8 flex justify-center"
                    >
                        <a
                            href="/docs"
                            target="_blank"
                            // className="flex items-center gap-x-1.5 py-[3px] pr-[7px] pl-[11px] rounded-full border border-black/[0.03] bg-[rgba(30,31,37,0.04)] backdrop-blur-[10px] hover:bg-[rgba(30,31,37,0.08)] text-xs font-medium transition duration-150"
                            className="flex items-center gap-x-1.5 py-[3px] pr-[7px] pl-[11px] rounded-full border border-privue-300 bg-privue-100/50 backdrop-blur-[10px] hover:bg-privue-200/70 text-xs font-medium transition duration-150"
                        >
                            Learn how Privue helps early-stage businesses
                            <svg width="16" height="16" fill="none">
                                <path
                                    stroke="#1E1F25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeOpacity=".5"
                                    strokeWidth="1.25"
                                    d="M8 4.75L11.25 8 8 11.25M11.25 8h-6.5"
                                />
                            </svg>
                        </a>
                    </motion.div>

                    {/* Headline + Subtext */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl lg:text-5xl font-semibold leading-tight tracking-normal font-newsreader bg-gradient-to-r from-gray-900 via-privue-700 to-gray-800 bg-clip-text text-transparent">
                            Empowering businesses{" "}
                            <br className="hidden sm:inline" />
                            through Intelligent Data
                        </h1>

                        <p className="px-10 mt-2 mb-8 text-base lg:text-lg text-gray-600 leading-tight font-medium text-balance font-sans">
                            Discover data-backed signals for smarter decisions.
                            Mitigate risk and unlock high-value relationships.
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.8 }}
                        className="mt-6 flex justify-center items-center gap-x-2"
                    >
                        <a
                            href="/signup"
                            className="px-4 py-2 bg-privue-900 rounded-lg text-sm font-medium text-white shadow-sm hover:bg-privue-800 transition-colors"
                        >
                            Get Started
                        </a>
                        <a
                            href="/pricing"
                            className="flex items-center gap-x-1.5 px-4 py-2 text-sm font-medium hover:bg-privue-950/[0.07] rounded-lg transition-colors"
                        >
                            CTA
                            <svg width="16" height="16" fill="none">
                                <path
                                    stroke="#1E1F25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeOpacity=".5"
                                    strokeWidth="1.25"
                                    d="M8 4.75L11.25 8 8 11.25M11.25 8h-6.5"
                                />
                            </svg>
                        </a>
                    </motion.div>
                </div>

                {/* horizontal line */}
                <div className="relative mt-24 left-0 right-0 w-full h-px bg-[#1E1F25]/[0.06]" />
            </div>

            {/* Flow Diagram */}
            {/* <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2 }}
                className="mt-20 flex justify-center w-full px-4"
            >
                <div className="w-full max-w-5xl">
                    <DataFlowDiagram />
                </div>
            </motion.div> */}
        </section >
    );
}
