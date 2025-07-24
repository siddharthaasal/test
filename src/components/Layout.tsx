import { MDXProvider } from "@mdx-js/react";
import { type ReactNode } from "react";

const components = {
    h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
        <h1 className="text-4xl font-bold mb-4 text-gray-900" {...props} />
    ),
    h2: (props: React.HTMLProps<HTMLHeadingElement>) => {
        const id = props.children?.toString().toLowerCase().replace(/\s+/g, "-");
        return (
            <h2
                id={id}
                className="text-2xl font-semibold mt-8 mb-2 scroll-mt-20 text-gray-800"
                {...props}
            />
        );
    },
    p: (props: React.HTMLProps<HTMLParagraphElement>) => (
        <p className="mb-4 text-gray-700 leading-relaxed" {...props} />
    ),
};

interface LayoutProps {
    children: ReactNode;
    headings: string[];
}

export function Layout({ children, headings }: LayoutProps) {
    return (
        <MDXProvider components={components}>
            <div className="min-h-screen bg-white text-gray-900 flex">
                {/* Sidebar */}
                <aside className="w-64 p-6 border-r border-gray-200 sticky top-0 h-screen overflow-y-auto">
                    <h3 className="text-xl font-bold mb-4">On this page</h3>
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

                {/* Blog Content */}
                <main className="flex-1 p-10 overflow-x-hidden prose max-w-4xl">
                    {children}
                </main>
            </div>
        </MDXProvider>
    );
}
