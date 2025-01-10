'use client';

import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const TransitionProvider = ({ children }) => {
    const pathName = usePathname();
    const [showText, setShowText] = useState(true);

    useEffect(() => {
        setShowText(true);
    }, [pathName]);

    return (
        <AnimatePresence mode='wait'>
            <div key={pathName} className='w-screen h-screen bg-gradient-to-b from-blue-50 to-red-100'>
                <motion.div
                    className='h-screen w-screen fixed bg-black rounded-b-[100px] z-40'
                    animate={{ height: '0vh' }}
                    exit={{ height: '140vh' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                />
                <AnimatePresence>
                    {showText && (
                        <motion.div
                            className='fixed m-auto top-0 bottom-0 left-0 right-0 z-50 w-fit h-fit flex items-center justify-center pointer-events-none'
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            onAnimationComplete={() => setShowText(false)}
                        >
                            <span className='text-6xl md:text-7xl lg:text-9xl font-extrabold tracking-tight capitalize bg-gradient-to-r from-purple-300 via-red-300 to-orange-300 bg-clip-text text-transparent drop-shadow-2xl px-8'>
                                {pathName.substring(1) || 'Home'}
                            </span>
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.div
                    className='h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-40'
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
