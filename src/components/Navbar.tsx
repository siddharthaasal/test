import { useState, useEffect } from "react";
import privueLogo from "../assets/privue-logo.png";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed inset-x-0 top-0 z-10 px-2 sm:px-4">

            <div
                className={`absolute inset-0 transition-all duration-300 ${isScrolled
                    ? "bg-privue-100 backdrop-blur-md shadow-[0px_1px_3px_rgba(0,0,0,0.05)]"
                    : "bg-transparent"
                    }`}
            ></div>


            {/* Content Wrapper */}
            <div className="relative mx-auto w-full sm:w-5/6 md:w-4/6">
                <div className="flex items-center justify-between py-3.5 px-2 sm:px-4 md:px-0">
                    {/* Logo */}
                    <a href="/" className="flex items-center space-x-2">
                        <img
                            src={privueLogo}
                            alt="Privue Logo"
                            width={120}
                            height={50}
                            className="h-10 w-auto"
                        />
                        <span className="text-base sm:text-lg font-semibold text-privue-800 tracking-tight">
                            Privue
                        </span>
                    </a>

                    {/* Mobile Menu Icon */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="sm:hidden p-2.5 -mr-0.5 z-50 cursor-pointer"
                        aria-label="Toggle menu"
                    >
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path
                                    stroke="#0F0C0C"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    stroke="#0F0C0C"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>

                    {/* Desktop Nav */}
                    <div className="hidden sm:block">
                        <nav>
                            <ul className="flex items-center gap-x-6 text-sm font-medium">
                                <li><a href="/docs" target="_blank" className="hover:text-privue-900">Guide</a></li>
                                <li><a href="/modules" className="hover:text-privue-900">Modules</a></li>
                                <li><a href="/solutions" className="hover:text-privue-900">Solutions</a></li>
                                <li><a href="/api" className="hover:text-privue-900">API</a></li>
                                <li>
                                    <a
                                        href="/signup"
                                        className="px-3.5 py-2 text-white text-sm font-medium rounded-lg bg-privue-900 hover:bg-privue-800 active:bg-privue-700 transition-colors"
                                    >
                                        Get Started
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                {/* Mobile Nav */}
                {isMenuOpen && (
                    <div className="sm:hidden mt-3 px-4 pb-6">
                        <ul className="space-y-4 text-sm">
                            <li><a href="/docs" className="block hover:text-privue-900">Guide</a></li>
                            <li><a href="/modules" className="block hover:text-privue-900">Modules</a></li>
                            <li><a href="/solutions" className="block hover:text-privue-900">Solutions</a></li>
                            <li><a href="/api" className="block hover:text-privue-900">API</a></li>
                            <li>
                                <a
                                    href="/signup"
                                    className="block text-center px-3.5 py-2 text-white font-medium rounded-lg bg-privue-900 hover:bg-privue-800 active:bg-privue-700 transition-colors"
                                >
                                    Get Started
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>

    );
}
