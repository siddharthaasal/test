type CardProps = {
    imageURL: string;
}

import { CardContainer } from "@/components/ui/3d-card";

export default function Card({ imageURL }: CardProps) {
    return (
        <>
            <CardContainer className="relative inter-var w-full">
                <div className="relative w-full sm:w-[32rem] rounded-2xl border border-gray-200 bg-bg-gradient-to-r from-privue-300 via-privue-100 to-privue-200  shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="w-full h-full bg-[radial-gradient(circle_at_60%_40%,rgba(0,0,0,0.05),transparent_60%)]" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col gap-4">
                        <img src={imageURL} alt="img" />
                    </div>
                </div>
            </CardContainer>
        </>
    );
}
