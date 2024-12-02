import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, Lock } from 'lucide-react';
import Image from 'next/image';
import ImageCarousel from './imageCarousel';
import TechBadge from './TechBadge';
import { useState } from 'react';

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

const ProjectCard = ({ item, index }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleCodeClick = () => {
        if (item.isPrivate) {
            setIsPopupOpen(true);
        } else if (item.github) {
            window.open(item.github, '_blank');
        }
    };

    const handleDemoClick = () => {
        if (item.link) {
            window.open(item.link, '_blank');
        }
    };

    return (
        <div
            className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
        >
            <motion.div
                className='flex flex-col gap-8 w-full max-w-6xl mx-auto px-6 md:px-8'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <div className='flex flex-col gap-4'>
                    <motion.span
                        className='text-sm font-medium text-gray-800/70'
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Project {index + 1}
                    </motion.span>
                    <motion.h2
                        className='text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 text-transparent bg-clip-text leading-tight tracking-tight'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {item.title}
                    </motion.h2>
                </div>

                <div className='grid md:grid-cols-2 gap-8 items-stretch h-full'>
                    <motion.div
                        className='flex flex-col gap-4 h-full'
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className='relative overflow-hidden flex-grow min-h-[350px] rounded-xl'>
                            <ImageCarousel images={item.images} />
                        </div>
                        <div className='flex flex-nowrap gap-2 mt-4'>
                            <div className='flex flex-wrap gap-2 max-w-md'>
                                {item.tech.map((tech, techIndex) => (
                                    <TechBadge
                                        key={techIndex}
                                        tech={tech}
                                        index={techIndex}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className='flex flex-col gap-6 h-full'
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <div className='flex flex-col justify-between h-full'>
                            <p className='text-lg text-gray-800/90 leading-relaxed'>
                                {item.desc}
                            </p>

                            <div className='flex gap-4 mt-8 justify-start md:justify-end'>
                                {(item.github || item.isPrivate) && (
                                    <motion.button
                                        onClick={handleCodeClick}
                                        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white shadow-lg ${
                                            index === 0
                                                ? 'bg-[#0052CC] hover:bg-[#0047B3]'
                                                : 'bg-gray-900 hover:bg-gray-800'
                                        } transition-colors`}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {index === 0 ? (
                                            <Image
                                                src='/bitbucket.svg'
                                                alt='Bitbucket'
                                                width={20}
                                                height={20}
                                                className='text-white'
                                            />
                                        ) : (
                                            <Github className='w-5 h-5' />
                                        )}
                                        View Code
                                    </motion.button>
                                )}
                                {item.link && (
                                    <motion.button
                                        onClick={handleDemoClick}
                                        className='flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-gray-900 font-medium hover:bg-gray-50 transition-colors shadow-lg'
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <ExternalLink className='w-5 h-5' />
                                        Live Demo
                                    </motion.button>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
            <PrivateRepoPopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
            />
        </div>
    );
};

export default ProjectCard;
