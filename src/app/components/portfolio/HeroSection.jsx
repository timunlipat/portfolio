import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
    return (
        <div className='w-screen h-[calc(100vh-6rem)] flex flex-col items-center justify-center'>
            <motion.h1
                className='text-7xl md:text-8xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-transparent bg-clip-text'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Showcase
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='mt-6 flex items-center gap-2 text-gray-600'
            >
                <ArrowRight className='w-5 h-5 animate-bounce' />
                <span className='text-lg'>Scroll to explore</span>
            </motion.div>
        </div>
    );
};

export default HeroSection;
