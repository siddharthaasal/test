export default function TestBlogPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans">
            {/* Header */}
            <div className="border-b px-6 py-4 text-sm text-gray-500">
                <a href="/case-studies" className="hover:underline">← Back to Case Studies</a>
            </div>

            <div className="flex max-w-7xl mx-auto px-4 md:px-8 py-10">
                {/* Sidebar Navigation */}
                <aside className="hidden md:block w-64 pr-10 sticky top-20 self-start">
                    <nav className="space-y-4 text-sm">
                        <a href="#introduction" className="block hover:text-blue-600">Introduction</a>
                        <a href="#dependence" className="block hover:text-blue-600">Growing Dependence</a>
                        <a href="#climate" className="block hover:text-blue-600">Climate Disruptions</a>
                        <a href="#data" className="block hover:text-blue-600">Data Verification</a>
                        <a href="#cybersecurity" className="block hover:text-blue-600">Cybersecurity Threats</a>
                        <a href="#regulations" className="block hover:text-blue-600">Regulatory Challenges</a>
                        <a href="#solution" className="block hover:text-blue-600">How PRIVUE Can Help</a>
                        <a href="#conclusion" className="block hover:text-blue-600">Conclusion</a>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 space-y-10 text-base leading-relaxed">
                    <h1 className="text-3xl font-bold mb-4">
                        The Rising Complexity of Third-Party Risk Assessment
                    </h1>

                    <section id="introduction">
                        <h2 className="text-xl font-semibold mb-2">Introduction</h2>
                        <p>In today's rapidly evolving business environment...</p>
                        {/* full paragraph here */}
                    </section>

                    <section id="dependence">
                        <h2 className="text-xl font-semibold mb-2">The Growing Dependence on Third Parties</h2>
                        <p>Organizations across industries...</p>
                    </section>

                    <section id="climate">
                        <h2 className="text-xl font-semibold mb-2">Climate-Related Disruptions</h2>
                        <p>One of the emerging challenges...</p>
                    </section>

                    <section id="data">
                        <h2 className="text-xl font-semibold mb-2">Data Verification Challenges</h2>
                        <p>Another critical issue...</p>
                    </section>

                    <section id="cybersecurity">
                        <h2 className="text-xl font-semibold mb-2">The Growing Cybersecurity Threat</h2>
                        <p>The frequency and severity...</p>
                    </section>

                    <section id="regulations">
                        <h2 className="text-xl font-semibold mb-2">Regulatory and Compliance Challenges</h2>
                        <p>Regulatory bodies worldwide...</p>
                    </section>

                    <section id="solution">
                        <h2 className="text-xl font-semibold mb-2">How PRIVUE Can Help</h2>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Climate Risk Insights</li>
                            <li>Continuous Risk Monitoring</li>
                            <li>Financial and Credit Risk Assessment</li>
                            <li>Comprehensive ESG Evaluations</li>
                        </ul>
                    </section>

                    <section id="conclusion">
                        <h2 className="text-xl font-semibold mb-2">Conclusion</h2>
                        <p>As third-party relationships become more integral...</p>
                    </section>
                </main>
            </div>
        </div>
    );
}
