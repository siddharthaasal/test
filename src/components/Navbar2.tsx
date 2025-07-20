import { useState, useEffect } from "react";
import privueLogo from "@/assets/privue-logo.png";
import { Button } from "@/components/ui/button";

type linkType = {
    name: string;
    href: string;
    variant: "link" | "outline" | "default" | "ghost";
};

export default function Navbar2() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const desktopLinks: linkType[] = [
        { name: "Guide", href: "/docs", variant: "link" },
        { name: "Modules", href: "/modules", variant: "link" },
        { name: "Solutions", href: "/solutions", variant: "link" },
        { name: "API", href: "/api", variant: "link" }
    ];
    const mobileLinks: linkType[] = [
        { name: "Guide", href: "/docs", variant: "link" },
        { name: "Modules", href: "/modules", variant: "link" },
        { name: "Solutions", href: "/solutions", variant: "link" },
        { name: "API", href: "/api", variant: "link" },
        { name: "Login", href: "/login", variant: "outline" },
        { name: "Get Started", href: "/signup", variant: "default" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    //  lock background scroll when the mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    }, [isMenuOpen]);


    return (
        <header className="fixed top-0 inset-x-0 z-50 font-open-sans">
            <div className="relative w-full">
                {/* Blur layer */}
                <div className={`absolute inset-0 pointer-events-none backdrop-blur-xl bg-white/20 transition-all duration-300 ${isScrolled ? "border-b border-white/30 shadow-md" : "shadow-sm"
                    }`} />

                {/* Actual navbar content */}
                <nav className="relative mx-auto flex max-w-[90rem] items-center justify-between px-4 sm:px-6 lg:px-8 py-3"
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
                            className="inline-flex items-center justify-center p-2 rounded-md text-privue-700 hover:bg-privue-100 focus:outline-none"                    >
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

                    {/* mobile menu */}
                    {isMenuOpen && (
                        <div className="absolute flex flex-col space-y-3 top-full left-0 w-full bg-white/90 backdrop-blur-xl shadow-lg border-t border-privue-200 py-4 px-6 z-40">
                            {mobileLinks.map((link, idx) => (
                                <Button asChild key={idx} variant={link.variant} className="font-semibold text-md">
                                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                                        {link.name}
                                    </a>
                                </Button>
                            ))}
                        </div>
                    )}

                    {/* Desktop links */}
                    <div className="hidden lg:flex lg:items-center lg:gap-x-2 justify-center items-center">
                        {desktopLinks.map((link, idx) => (<Button asChild key={idx} variant={link.variant} className="font-semibold text-lg">
                            <a href={link.href} target="_blank" rel="noopener noreferrer">
                                {link.name}
                            </a>
                        </Button>)
                        )}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex gap-2 flex-1 justify-end">
                        <Button variant="outline"> <a href="/login">Log in</a></Button>
                        <Button> <a href="/signup">Get Started</a></Button>
                    </div>

                </nav>
            </div>
        </header>
    );
}
