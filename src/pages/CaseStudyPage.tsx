import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { caseStudies } from "../data/caseStudies";
import Navbar2 from "../components/Navbar2";
import twitterLogo from "../../public/logos/twitter-x.svg";
import linkedinLogo from "../../public/logos/linkedin.svg";
import { IoIosArrowBack } from "react-icons/io";


export default function CaseStudyPage() {
    const { slug } = useParams();
    const study = caseStudies.find(cs => cs.slug === slug);
    const sectionRefs = useRef<(HTMLElement | null)[]>([]);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const scrollToSection = (idx: number) => {
        const el = sectionRefs.current[idx];
        if (el) {
            // Calculate the position considering the navbar height
            const top = el.offsetTop - 140; // 140px offset for navbar
            window.scrollTo({
                top,
                behavior: "smooth"
            });
            // Update active index immediately
            setActiveIndex(idx);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY + 150;

            let currentIdx = 0;
            for (let i = 0; i < sectionRefs.current.length; i++) {
                const el = sectionRefs.current[i];
                if (el) {
                    const offsetTop = el.offsetTop;
                    const offsetBottom = offsetTop + el.offsetHeight;

                    if (scrollY >= offsetTop && scrollY < offsetBottom) {
                        currentIdx = i;
                        break;
                    }
                }
            }

            setActiveIndex(currentIdx);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        // Wait until layout is complete to run initial scroll check
        requestAnimationFrame(() => {
            setTimeout(() => handleScroll(), 50);
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [slug]);


    const setRef = (el: HTMLElement | null, idx: number) => {
        sectionRefs.current[idx] = el;
    };

    if (!study) return <div className="p-8">Case study not found.</div>;

    return (
        <div className="flex bg-[#f2f2f2] min-h-screen text-gray-900 gap-4 font-open-sans">
            <Navbar2 />
            <div className="flex bg-[#f2f2f2] min-h-screen text-gray-900 font-open-sans pt-20 space-x-4">
                {/* Sidebar */}
                <aside className="w-64 ml-14 p-6 sticky top-12 h-screen hidden md:block">
                    <h2 className="text-xl mt-12 font-semibold text-privue-800 mb-4">
                        On this Page
                    </h2>
                    <ul className="space-y-2">
                        {study.sections.map((sec, idx) => (
                            <li key={idx}>
                                <button
                                    onClick={() => scrollToSection(idx)}
                                    className={`text-base font-medium text-left cursor-pointer focus:outline-none hover:underline ${activeIndex === idx
                                        ? "text-privue-600 font-semibold"
                                        : "text-gray-800 hover:text-privue-600"
                                        }`}
                                >
                                    {sec.heading}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Explore Solution Section */}
                    {study.solutionLink && (
                        <div className="border-t pt-4 mt-4">
                            <h3 className="text-lg font-semibold text-privue-800 mb-3">
                                Explore Our Solution
                            </h3>
                            <a
                                href={study.solutionLink}
                                className="text-left cursor-pointer text-gray-800 hover:text-privue-600 hover:underline focus:outline-none"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {study.solutionName || "View Module"}
                            </a>
                        </div>
                    )}

                    {/* Share Section */}
                    <div className="border-t pt-4 mt-4">
                        <h3 className="text-lg font-semibold text-privue-800 mb-3">
                            Share this {study.type || " Case Study"}
                        </h3>
                        <div className="flex space-x-4">
                            <a
                                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={linkedinLogo} alt="LinkedIn" className="w-5 h-5 opacity-70" />
                            </a>
                            <a
                                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={twitterLogo} alt="X" className="w-5 h-5 opacity-75" />
                            </a>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 px-6 py-12 max-w-4xl mx-auto">
                    <div className="mb-6">
                        <a
                            href="/case-studies"
                            className="flex items-center gap-1 text-privue-600 hover:underline text-sm font-semibold"
                        >
                            <IoIosArrowBack /> Back to Case Studies
                        </a>
                    </div>
                    <h2 className="text-3xl text-privue-800 font-semibold mb-8">{study.title}</h2>
                    <div className="space-y-12">
                        {study.sections.map((sec, idx) => (
                            <section
                                key={idx}
                                ref={el => setRef(el, idx)}
                                className="scroll-mt-32"
                                id={`section-${idx}`}
                            >
                                <h3 className="text-2xl text-privue-700 font-semibold mb-3">
                                    {sec.heading}
                                </h3>
                                <p
                                    className="text-base text-gray-700 leading-relaxed text-pretty"
                                    dangerouslySetInnerHTML={{ __html: sec.content }}
                                />
                            </section>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}