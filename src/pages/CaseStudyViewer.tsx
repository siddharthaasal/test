import React, { useEffect, useState } from "react";
import mammoth from "mammoth";

export default function CaseStudyViewer() {
    const [htmlContent, setHtmlContent] = useState("");
    const [headings, setHeadings] = useState<string[]>([]);

    useEffect(() => {
        async function loadDocx() {
            const res = await fetch("/case-studies/cs1.docx");
            const arrayBuffer = await res.arrayBuffer();
            const { value } = await mammoth.convertToHtml({ arrayBuffer });

            setHtmlContent(value);

            // Extract headings for sidebar (naive approach)
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = value;
            const h2s = Array.from(tempDiv.querySelectorAll("h2")).map((el) =>
                el.textContent || ""
            );
            setHeadings(h2s);
        }

        loadDocx();
    }, []);

    return (
        <div className="flex min-h-screen bg-white text-gray-900">
            {/* Sidebar */}
            <aside className="w-64 p-6 border-r border-gray-200 sticky top-0 h-screen overflow-y-auto">
                <h3 className="text-xl font-bold mb-4">Sections</h3>
                <ul className="space-y-2 text-sm">
                    {headings.map((heading) => {
                        const id = heading.toLowerCase().replace(/\s+/g, "-");
                        return (
                            <li key={id}>
                                <a href={`#${id}`} className="text-blue-600 hover:underline">
                                    {heading}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </aside>

            {/* Content */}
            <main
                className="flex-1 p-10 prose max-w-4xl"
                dangerouslySetInnerHTML={{
                    __html: htmlContent.replace(
                        /<h2>(.*?)<\/h2>/g,
                        (_, title) =>
                            `<h2 id="${title.toLowerCase().replace(/\s+/g, "-")}">${title}</h2>`
                    ),
                }}
            />
        </div>
    );
}
