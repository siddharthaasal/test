const sections = [
    { id: 'intro', label: 'Introduction' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'implementation', label: 'Implementation' },
    { id: 'implementation', label: 'Implementation' },
    { id: 'implementation', label: 'Implementation' },
    { id: 'implementation', label: 'Implementation' },
    { id: 'implementation', label: 'Implementation' },
    { id: 'implementation', label: 'Implementation' },
    { id: 'implementation', label: 'Implementation' },
    { id: 'implementation', label: 'Implementation' },
    { id: 'implementation', label: 'Implementation' },
];


export default function Sidebar() {
    return (
        <div className="flex flex-col items-start justify-center p-4 font-open-sans text-left">
            <nav className="sticky top-24 h-max w-64 space-y-2 border-r pr-4 text-sm text-privue-700">
                <ul>
                    {sections.map((sec) => (
                        <li key={sec.id}>
                            <a
                                href={`#${sec.id}`}
                                className="block py-2 px-3 rounded hover:bg-privue-100"
                            >
                                {sec.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}


