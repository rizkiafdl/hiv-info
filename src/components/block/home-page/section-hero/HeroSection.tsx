import { Button } from '@/components/ui/button';
import React from 'react';

export const HeroSection = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center space-y-6 bg-black/70 text-white px-4">
            {/* Main Text Content */}
            <div className="w-[70%] text-center">
                <h1 className="text-7xl font-bold">WORLD AIDS DAY</h1>
                <h2 className="text-2xl mt-2">1 December</h2>
                <p className="mt-4 text-lg">
                    Join the fight against HIV/AIDS. Learn about prevention, treatment, and the steps we can all take to stop the spread of HIV.
                </p>
            </div>

            {/* Call-to-Action Button */}
            <div>
                <Button className="px-6 py-2 text-lg font-medium bg-red-600 hover:bg-red-700">
                    Get Tested Today
                </Button>
            </div>

            {/* Logos */}
            <div className="flex flex-row space-x-8 mt-8">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black">Logo 1</div>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black">Logo 2</div>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black">Logo 3</div>
            </div>
        </div>
    );
};
