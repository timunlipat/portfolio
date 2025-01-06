'use client';
import { motion } from 'framer-motion';

export const Header = () => (
    <motion.div
        className='text-center pt-0 pb-16'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
    >
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className='mx-auto'
        >
            <h1 className='text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 pb-3 mb-4 leading-tight'>
                Ready to Build the Future Together
            </h1>
            <p className='text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed'>
                Seeking impactful opportunities and meaningful collaborations.
            </p>
        </motion.div>
    </motion.div>
);
