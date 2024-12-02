import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, ExternalLink } from 'lucide-react';

const PrivateRepoPopup = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className='fixed inset-0 bg-black/40 backdrop-blur-sm z-50'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />
                    <motion.div
                        className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 z-50'
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: 'spring', duration: 0.5 }}
                    >
                        <button
                            onClick={onClose}
                            className='absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors'
                        >
                            <X className='w-5 h-5 text-gray-500' />
                        </button>

                        <div className='flex flex-col items-center text-center gap-4'>
                            <div className='w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center'>
                                <Lock className='w-8 h-8 text-blue-500' />
                            </div>

                            <h3 className='text-2xl font-bold text-gray-900'>
                                Private Repository
                            </h3>

                            <p className='text-gray-600 leading-relaxed'>
                                This repository contains proprietary code and is
                                private. Please check out the live site to see
                                the platform in action!
                            </p>

                            <div className='flex gap-3 mt-4'>
                                <motion.button
                                    className='px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors'
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={onClose}
                                >
                                    Close
                                </motion.button>
                                <motion.a
                                    href='https://merchants.eventlah.com'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center gap-2'
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <ExternalLink className='w-4 h-4' />
                                    Visit Live Site
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default PrivateRepoPopup;
