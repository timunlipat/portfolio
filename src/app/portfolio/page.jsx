'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import CallToAction from '../components/portfolio/CallToAction';
import HeroSection from '../components/portfolio/HeroSection';
import ProjectCard from '../components/portfolio/ProjectCard';
import { projects } from '../data/projects';

const PortfolioPage = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref });
    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);

    return (
        <motion.div
            className='h-full'
            initial={{ y: '-200vh' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1 }}
        >
            <div className='h-[600vh] relative' ref={ref}>
                {/* Hero Section */}
                <HeroSection />

                {/* Horizontal Scroll Gallery */}
                <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
                    <motion.div style={{ x }} className='flex'>
                        {/* Initial gradient panel */}
                        <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300' />

                        {/* Project Cards */}
                        {projects.map((item, index) => (
                            <ProjectCard
                                key={item.id}
                                item={item}
                                index={index}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Call to Action Section */}
            <CallToAction />
        </motion.div>
    );
};

export default PortfolioPage;
