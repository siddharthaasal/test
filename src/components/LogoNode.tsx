// components/LogoNode.tsx
import { memo } from 'react';

const LogoNode = ({ data }: any) => {
    return (
        <div className="w-20 h-20 flex items-center justify-center rounded-full shadow-md bg-white p-2 animate-pulse">
            <img
                src={data.logo}
                alt={data.label}
                className="w-full h-full object-contain"
                title={data.label}
            />
        </div>
    );
};

export default memo(LogoNode);
