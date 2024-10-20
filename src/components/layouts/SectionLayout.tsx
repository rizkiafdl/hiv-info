import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function SectionLayout({ children }: LayoutProps) {
    return (
        <div className="relative min-h-screen   w-full bg-black/20">
            <div className='flex-row mx-auto 
            items-center py-16 px-20 gap-16  sm:text-left'>
                {children}
            </div>
            <div className="bg-stone-900 w-full absolute top-0 left-0 h-1"></div>
        </div>
    );
}
