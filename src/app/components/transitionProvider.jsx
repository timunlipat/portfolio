'use client';

import { AnimatePresence } from 'framer-motion';
import Navbar from './navbar';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const TransitionProvider = ({ children }) => {
    const pathName = usePathname();
    return (
        <AnimatePresence mode='wait'>
            <div
                key={pathName}
                className='w-screen h-screen bg-gradient-to-b from-blue-50 to-red-100'
            >
                <motion.div
                    className='h-screen w-screen fixed bg-black rounded-b-[100px] z-40'
                    animate={{ height: '0vh' }}
                    exit={{ height: '140vh' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                />
                <motion.div
                    className='fixed m-auto top-0 bottom-0 left-0 right-0 z-50 w-fit h-fit flex items-center justify-center'
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <span className='text-6xl md:text-7xl lg:text-9xl font-extrabold tracking-tight capitalize bg-gradient-to-r from-purple-300 via-red-300 to-orange-300 bg-clip-text text-transparent drop-shadow-2xl px-8 relative transform hover:scale-105 transition-transform duration-300'>
                        {pathName.substring(1) || 'Home'}
                        <div className='absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-purple-300 via-red-300 to-orange-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></div>
                    </span>
                </motion.div>
                <motion.div
                    className='h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30'
                    initial={{ height: '140vh' }}
                    animate={{ height: '0vh', transition: { delay: 0.5 } }}
                />
                <div className='h-24'>
                    <Navbar />
                </div>
                <div className='h-[calc(100vh-6rem)]'>{children}</div>
            </div>
        </AnimatePresence>
    );
};

export default TransitionProvider;
