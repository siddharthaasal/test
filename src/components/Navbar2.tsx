import { useState, useEffect } from "react";
import privueLogo from "@/assets/privue-logo.png";
import { Button } from "@/components/ui/button";

export default function Navbar2() {
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
        <header className="fixed top-0 inset-x-0 z-50 font-open-sans">
            <div
                className={`absolute inset-0 transition-all duration-300 ${isScrolled
                    ? "bg-privue-100/80 backdrop-blur-md border-b border-privue-200/40 shadow-sm"
                    : "bg-transparent"
                    }`}
            />

            <nav
                className="relative mx-auto flex w-full max-w-[90rem] items-center justify-between px-4 sm:px-6 lg:px-8 py-3"
                aria-label="Global"
            >
                {/* Logo */}
                <div className="flex flex-1">
                    <a href="/" className="flex items-center gap-2">
                        <img
                            src={privueLogo}
                            alt="Privue Logo"
                            className="h-12 w-auto"
                            loading="eager"
                        />
                        <span className="text-lg font-bold text-privue-900">
                            PRIVUE
                        </span>
                    </a>
                </div>

                {/* Mobile toggle */}
                <div className="flex lg:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="inline-flex items-center justify-center p-2 rounded-md text-privue-700 hover:bg-privue-100 focus:outline-none"
                    >
                        <span className="sr-only">Toggle menu</span>
                        {isMenuOpen ? (
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Desktop links */}
                <div className="hidden lg:flex lg:items-center lg:gap-x-2 justify-center items-center">
                    <Button variant="link">
                        <a href="/docs" target="_blank" className="font-semibold text-lg">
                            Guide
                        </a>
                    </Button>
                    <Button variant="link" className="font-semibold text-lg">
                        <a href="/modules" target="_blank">
                            Modules
                        </a>
                    </Button>
                    <Button variant="link" className="font-semibold text-lg">
                        <a href="/solutions" target="_blank">
                            Solutions
                        </a>
                    </Button>
                    <Button variant="link" className="font-semibold text-lg">
                        <a href="/api" target="_blank">
                            API
                        </a>
                    </Button>
                </div>

                {/* CTA Buttons */}
                <div className="hidden lg:flex gap-2 flex-1 justify-end">
                    <Button variant="outline"> <a href="/login">Log in</a></Button>
                    <Button> <a href="/signup">Get Started</a></Button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden px-4 pt-2 pb-6">
                    <ul className="space-y-2 text-sm">
                        <li><a href="/docs" className="block nav-link">Guide</a></li>
                        <li><a href="/modules" className="block nav-link">Modules</a></li>
                        <li><a href="/solutions" className="block nav-link">Solutions</a></li>
                        <li><a href="/api" className="block nav-link">API</a></li>
                        <li>
                            <a href="/login" className="block btn-outline text-center">Log in</a>
                        </li>
                        <li>
                            <a href="/signup" className="block btn-primary text-center">Get Started</a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
