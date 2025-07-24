import Navbar2 from '../components/Navbar2';
import Card from '../components/CaseStudy/Card';
import Info from '../components/CaseStudy/Info';


type InfoProps = {
    slug?: string;
    title: string;
    description: string;
    buttonText?: string;
    buttonLink: string;
    badgeText?: string;
    imageURL: string;
};


const caseStudies: InfoProps[] = [
    {
        slug: "third-party-risk-assessment",
        title: "The Rising Complexity of Third-Party Risk Assessment",
        description: "In today's rapidly evolving business environment, third-party risk management (TPRM) has become a critical area of focus for organizations worldwide. As businesses expand their reliance on external vendors, suppliers, and service providers, the complexity of assessing third-party risks has increased exponentially.",
        buttonText: "Read Blog",
        buttonLink: `/case-studies/third-party-risk-assessment`,
        badgeText: "Blog",
        imageURL: "https://plus.unsplash.com/premium_photo-1700830452509-6e206a0d44d6?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Credit Risk Assessment",
        description: "PRIVUE's alternative data platform transforms credit risk assessment by integrating non-traditional data signals with conventional financial metrics. By leveraging behavioural indicators, digital footprints, and compliance patterns, financial institutions gain unprecedented visibility into borrower risk profiles—enabling more accurate, inclusive, and profitable credit decisions.",
        buttonText: "Read Case Study",
        buttonLink: "#",
        badgeText: "Case Study",
        imageURL: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg"
    },
    {
        title: "Strengthening Insolvency Investigations",
        description: "PRIVUE's advanced search intelligence platform transforms insolvency investigations by connecting previously siloed data sources, revealing hidden asset relationships, and providing real-time visibility into ownership structures—enabling insolvency professionals to dramatically improve recovery outcomes while reducing investigative timelines.",
        buttonText: "Read Case Study",
        buttonLink: "#",
        badgeText: "Case Study",
        imageURL: "https://images.pexels.com/photos/7948002/pexels-photo-7948002.jpeg"

    },
    {
        title: "Redefining Commercial Lines Underwriting",
        description: "PRIVUE's advanced analytics platform fundamentally transforms commercial underwriting by integrating diverse data streams, leveraging artificial intelligence, and providing unprecedented visibility into compliance behaviours, operational disciplines, and leadership ethics—enabling precision-targeted policy pricing and coverage decisions.",
        buttonText: "Read Case Study",
        buttonLink: "#",
        badgeText: "Case Study",
        imageURL: "https://images.pexels.com/photos/17483874/pexels-photo-17483874.png"
    },
    {
        title: "Optimising Distributor Credit Risk Management",
        description: "PRIVUE's advanced analytics platform offers a comprehensive solution that transforms how enterprises manage distributor credit risk, enabling precise credit decisions that protect cash flow while fostering sustainable business relationships.",
        buttonText: "Read Case Study",
        buttonLink: "#",
        badgeText: "Case Study",
        imageURL: "https://images.pexels.com/photos/221047/pexels-photo-221047.jpeg"
    },
    {
        title: "Mitigating Risk in Global Supplier Selection",
        description: "PRIVUE's comprehensive supplier intelligence platform transforms how enterprises evaluate, select, and monitor global suppliers—providing unprecedented visibility into compliance profiles, performance metrics, and risk factors across the supplier ecosystem.",
        buttonText: "Read Case Study",
        buttonLink: "#",
        badgeText: "Case Study",
        imageURL: "https://images.pexels.com/photos/24244234/pexels-photo-24244234.jpeg"
    },
    {
        title: "Enhancing Supply Chain Resilience",
        description: "PRIVUE's perpetual vendor risk monitoring platform transforms supply chain resilience by integrating thousands of data sources, continuously assessing vendor stability, and providing actionable intelligence that enables procurement and operations teams to identify emerging risks, implement proactive interventions, and maintain operational continuity even during widespread disruptions.",
        buttonText: "Read Case Study",
        buttonLink: "#",
        badgeText: "Case Study",
        imageURL: "https://plus.unsplash.com/premium_photo-1744944778150-12afe488303e"
    }
];

export default function CaseStudies() {
    return (
        <>
            <div className="min-h-screen bg-[#f2f2f2] font-open-sans antialiased">
                <Navbar2 />

                {/* Elegant Hero Section */}
                {/* <header className="relative flex flex-col justify-center items-center text-center px-6">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
                            Our Success Stories
                        </h1>
                        <p className="text-xl md:text-2xl opacity-90">
                            How industry leaders are solving complex risk challenges with PRIVUE.
                        </p>
                    </div>
                </header> */}

                {/* Case Studies Grid */}
                <main className="container mx-auto px-4 py-16">
                    {caseStudies.map((study, index) => (
                        <section
                            key={index}
                            className={`min-h-screen flex flex-col items-center justify-center transition-all duration-500 
                                ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} md:gap-12 px-6`
                            }
                        >
                            {/* Text Section */}
                            <div className="flex-1 w-full md:w-1/2 max-w-xl">
                                <Info
                                    title={study.title}
                                    description={study.description}
                                    buttonText={study.buttonText}
                                    buttonLink={study.buttonLink}
                                    badgeText={study.badgeText}
                                />
                            </div>

                            {/* Image Section */}
                            <div className="flex-1 w-full md:w-1/2 max-w-xl">
                                <Card imageURL={study.imageURL} />
                            </div>
                        </section>
                    ))}
                </main>

                {/* Optional Testimonial Section (if you want to add it later) */}
                {/* <Testimonial /> */}
            </div>
        </>

    );
}


