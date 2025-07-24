type InfoProps = {
    title: string;
    description: string;
    buttonText?: string;
    buttonLink: string;
    badgeText?: string;
};

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"

export default function Info({ title, description, buttonText, buttonLink, badgeText }: InfoProps) {
    return (
        <>
            <div className="flex flex-col items-start justify-center p-4 font-open-sans text-left font-open-sans">
                <Badge variant="default">
                    {badgeText || "Case Study"}
                </Badge>
                <div
                    className="flex items-center justify-center mb-2"
                >
                </div>
                <h1 className="text-4xl font-medium text-privue-800 mb-4">{title}</h1>
                <p className="text-md mb-6">{description}</p>
                <Button asChild>
                    <a
                        href={buttonLink}
                    >
                        {buttonText || "Read Case Study"}
                    </a>
                </Button>

            </div>
        </>
    )
}
