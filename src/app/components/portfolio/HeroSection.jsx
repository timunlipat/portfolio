import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
    return (
        <div className='w-screen h-[calc(100vh-6rem)] flex flex-col items-center justify-center'>
            <h1 className='text-7xl md:text-8xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-transparent bg-clip-text animate-fade-in-up'>
                Showcase
            </h1>
            <div className='mt-6 flex items-center gap-2 text-gray-600 animate-fade-in-up-delayed'>
                <span className='text-lg'>Scroll to explore</span>
                <ArrowDown className='w-5 h-5 animate-bounce' />
            </div>
        </div>
    );
};

export default HeroSection;
