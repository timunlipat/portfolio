'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useMemo } from 'react';
import CallToAction from '../../components/portfolio/CallToAction';
import HeroSection from '../../components/portfolio/HeroSection';
import ProjectCard from '../../components/portfolio/ProjectCard';
import { projects } from '../../data/projects';

const PortfolioPage = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        smooth: 0.5, // Reduced smooth scrolling value for better performance
    });

    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%'], {
        clamp: true, // Prevent overscroll calculations
    });

    // Memoize project cards to prevent unnecessary re-renders
    const projectCards = useMemo(
        () => projects.map((item, index) => <ProjectCard key={item.id || index} item={item} index={index} />),
        [] // Empty dependency array since projects are static
    );

    return (
        <motion.div
            className='h-full will-change-transform'
            initial={{ y: '-200vh' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1 }}
        >
            <div className='h-[600vh] relative' ref={ref}>
                {/* Hero Section */}
                <HeroSection />

                {/* Horizontal Scroll Gallery */}
                <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
                    <motion.div style={{ x }} className='flex will-change-transform'>
                        {/* Initial gradient panel */}
                        <div className='h-[120vh] w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300' />

                        {/* Project Cards */}
                        {projectCards}
                    </motion.div>
                </div>
            </div>

            {/* Call to Action Section */}
            <CallToAction />
        </motion.div>
    );
};

export default PortfolioPage;
