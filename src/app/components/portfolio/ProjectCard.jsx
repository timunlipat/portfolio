import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import ImageCarousel from './imageCarousel';
import TechBadge from './TechBadge';

const ProjectCard = ({ item, index }) => {
    const handleCodeClick = () => {
        if (item.github) window.open(item.github, '_blank');
    };

    const handleDemoClick = () => {
        if (item.link) window.open(item.link, '_blank');
    };

    return (
        <div
            className={`min-h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color} py-8 sm:py-16`}
        >
            <motion.div
                className='flex flex-col gap-4 sm:gap-8 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <div className='flex flex-col gap-0 sm:gap-4'>
                    <motion.span
                        className='text-xs sm:text-sm font-medium text-gray-800/70'
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Project {index + 1}
                    </motion.span>
                    <motion.h2
                        className='text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 text-transparent bg-clip-text leading-tight tracking-tight py-1'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {item.title}
                    </motion.h2>
                </div>

                <div className='grid md:grid-cols-2 gap-4 sm:gap-8 items-stretch'>
                    <motion.div
                        className='flex flex-col gap-2 sm:gap-4'
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className='relative overflow-hidden min-h-[280px] sm:min-h-[350px] rounded-xl sm:rounded-2xl'>
                            <ImageCarousel images={item.images} />
                        </div>
                        <div className='flex flex-nowrap gap-1.5 sm:gap-2 mt-2 sm:mt-4'>
                            <div className='flex flex-wrap gap-1.5 sm:gap-2 max-w-md'>
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
                        className='flex flex-col gap-4 sm:gap-6'
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <div className='flex flex-col justify-between h-full'>
                            <p className='text-sm sm:text-base md:text-lg text-gray-800/90 leading-snug sm:leading-relaxed'>
                                {item.desc}
                            </p>

                            <div className='flex sflex-row gap-3 sm:gap-4 mt-8 justify-start md:justify-end'>
                                {item.id === 1 ? (
                                    <div className='w-full sm:w-auto flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-4 rounded-lg font-medium text-white bg-[#0052CC] text-sm sm:text-base'>
                                        <Image
                                            src='/bitbucket.svg'
                                            alt='Bitbucket'
                                            width={20}
                                            height={20}
                                            className='text-white w-4 h-4 sm:w-5 sm:h-5'
                                        />
                                        Private Repo
                                    </div>
                                ) : (
                                    item.github && (
                                        <motion.button
                                            onClick={handleCodeClick}
                                            className='w-full sm:w-auto flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-4 rounded-lg font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors shadow-lg text-sm sm:text-base'
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Github className='w-4 h-4 sm:w-5 sm:h-5' />
                                            View Code
                                        </motion.button>
                                    )
                                )}
                                {item.link && (
                                    <motion.button
                                        onClick={handleDemoClick}
                                        className='w-full sm:w-auto flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-4 rounded-lg bg-white text-gray-900 font-medium hover:bg-gray-50 transition-colors shadow-lg text-sm sm:text-base'
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <ExternalLink className='w-4 h-4 sm:w-5 sm:h-5' />
                                        Live Demo
                                    </motion.button>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectCard;
