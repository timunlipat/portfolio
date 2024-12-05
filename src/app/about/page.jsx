'use client';
import { motion, useInView, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Brain from '../components/brain';

const About = () => {
    const containerRef = useRef();
    const { scrollYProgress } = useScroll({ container: containerRef });
    const skillRef = useRef();
    const isSkillRefinView = useInView(skillRef, { margin: '-100px' });
    const expereienceRef = useRef();
    const isExpereienceRefInView = useInView(expereienceRef, {
        margin: '-100px',
    });

    return (
        <motion.div
            className='h-full'
            initial={{ y: '-200vh' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1 }}
        >
            {/* Container */}
            <div className='h-full overflow-scroll lg:flex' ref={containerRef}>
                {/* Text Container */}
                <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2'>
                    {/* Biography Container */}
                    <div className='flex flex-col gap-12 justify-center'>
                        {/* Biography Title */}
                        <h1 className='font-bold text-2xl'>Introduction</h1>
                        {/* Biography Description */}
                        <p className='text-lg'>
                            Hi, I’m Zamil, a self-taught Fullstack Web Developer
                            specializing in React. I discovered my passion for
                            coding later in life, but my fascination with
                            technology started long ago. As a kid, I spent
                            countless hours immersed in the world of video
                            games, captivated by the creativity and complexity
                            behind them. That early love for interactive
                            experiences eventually grew into a desire to build
                            my own digital solutions. Now, as a self-taught
                            developer, I’m excited to bring my dedication and
                            problem-solving skills to the professional world. I
                            thrive on challenges—they push me to grow, learn,
                            and continuously improve my craft. Whether it’s
                            tackling complex technical problems or mastering new
                            technologies, I love pushing the boundaries of what
                            I can achieve. I believe that with perseverance and
                            a passion for learning, it’s never too late to start
                            a meaningful career in tech. Explore my Projects
                            page to see what I’ve been working on—from
                            innovative tools to responsive websites.
                        </p>
                        {/* Biography Scroll SVG */}
                        <div className='w-6 h-6 mx-auto mt-8 animate-bounce text-gray-500'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    d='M12 4 L12 16 M7 12 L12 17 L17 12'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    fill='none'
                                />
                            </svg>
                        </div>
                    </div>
                    {/* Skills Container */}
                    <div
                        className='flex flex-col gap-12 justify-center'
                        ref={skillRef}
                    >
                        {/* Skill Title */}
                        <motion.h1
                            initial={{ x: '-300px' }}
                            animate={isSkillRefinView ? { x: 0 } : {}}
                            transition={{ delay: 0.2 }}
                            className='font-bold text-2xl'
                        >
                            SKILLS
                        </motion.h1>
                        {/* SKILL LIST */}
                        <motion.div
                            initial={{ x: '-300px' }}
                            animate={isSkillRefinView ? { x: 0 } : {}}
                            className='flex gap-4 flex-wrap'
                        >
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                JavaScript
                            </div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                TypeScript
                            </div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                React.js
                            </div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Next.js
                            </div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Tailwind CSS
                            </div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                MongoDB
                            </div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                PostgreSQL
                            </div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Node.js
                            </div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Express.js
                            </div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Redux
                            </div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Webpack
                            </div>
                        </motion.div>
                        {/* SKILL Scroll SVG */}
                        <div className='w-6 h-6 mx-auto mt-8 animate-bounce text-gray-500'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    d='M12 4 L12 16 M7 12 L12 17 L17 12'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    fill='none'
                                />
                            </svg>
                        </div>
                    </div>
                    {/* Experience Container */}
                    <div
                        className='flex flex-col gap-12 justify-center pb-48'
                        ref={expereienceRef}
                    >
                        {/* Experience Title */}
                        <motion.h1
                            initial={{ x: '-300px' }}
                            animate={isExpereienceRefInView ? { x: 0 } : {}}
                            transition={{ delay: 0.2 }}
                            className='font-bold text-2xl'
                        >
                            EXPERIENCE
                        </motion.h1>
                        {/* Experience LIST */}
                        <motion.div
                            initial={{ x: '-300px' }}
                            animate={isExpereienceRefInView ? { x: 0 } : {}}
                        >
                            {/* Experience List Item 1*/}
                            <div className='flex justify-between h-48'>
                                {/* Left */}
                                <div className='w-1/3'>
                                    {/* Job Title */}
                                    <div className='bg-white p-3 font-semibold rounded-lg'>
                                        Software Engineer
                                    </div>
                                    {/* Job Description */}
                                    <div className='p-3 text-sm italic'>
                                        My current employment. Way better than
                                        the position before!
                                    </div>
                                    {/* Job Date */}
                                    <div className='p-3 text-red-400 text-sm font-semibold'>
                                        2024 - Present
                                    </div>
                                    {/* Job Company */}
                                    <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
                                        Apple
                                    </div>
                                </div>
                                {/* Center */}
                                <div className=''>
                                    {/* Line */}
                                    <div className='w-1 h-full bg-gray-600 rounded relative'>
                                        {/* Line Circle */}
                                        <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                                    </div>
                                </div>
                                {/* Right */}
                                <div className='w-1/3'></div>
                            </div>

                            {/* Experience List Item 2*/}
                            <div className='flex justify-between h-48'>
                                {/* Left */}
                                <div className='w-1/3'></div>
                                {/* Center */}
                                <div className=''>
                                    {/* Line */}
                                    <div className='w-1 h-full bg-gray-600 rounded relative'>
                                        {/* Line Circle */}
                                        <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                                    </div>
                                </div>
                                {/* Right */}
                                <div className='w-1/3'>
                                    {/* Job Title */}
                                    <div className='bg-white p-3 font-semibold rounded-lg'>
                                        Software Engineer
                                    </div>
                                    {/* Job Description */}
                                    <div className='p-3 text-sm italic'>
                                        My current employment. Way better than
                                        the position before!
                                    </div>
                                    {/* Job Date */}
                                    <div className='p-3 text-red-400 text-sm font-semibold'>
                                        2024 - Present
                                    </div>
                                    {/* Job Company */}
                                    <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
                                        Apple
                                    </div>
                                </div>
                            </div>

                            {/* Experience List Item 3*/}
                            <div className='flex justify-between h-48'>
                                {/* Left */}
                                <div className='w-1/3'>
                                    {/* Job Title */}
                                    <div className='bg-white p-3 font-semibold rounded-lg'>
                                        Software Engineer
                                    </div>
                                    {/* Job Description */}
                                    <div className='p-3 text-sm italic'>
                                        My current employment. Way better than
                                        the position before!
                                    </div>
                                    {/* Job Date */}
                                    <div className='p-3 text-red-400 text-sm font-semibold'>
                                        2024 - Present
                                    </div>
                                    {/* Job Company */}
                                    <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
                                        Apple
                                    </div>
                                </div>
                                {/* Center */}
                                <div className=''>
                                    {/* Line */}
                                    <div className='w-1 h-full bg-gray-600 rounded relative'>
                                        {/* Line Circle */}
                                        <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                                    </div>
                                </div>
                                {/* Right */}
                                <div className='w-1/3'></div>
                            </div>

                            {/* Experience List Item 4*/}
                            <div className='flex justify-between h-48'>
                                {/* Left */}
                                <div className='w-1/3'></div>
                                {/* Center */}
                                <div className=''>
                                    {/* Line */}
                                    <div className='w-1 h-1 bg-gray-600 rounded relative'>
                                        {/* Line Circle */}
                                        <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                                    </div>
                                </div>
                                {/* Right */}
                                <div className='w-1/3'>
                                    {/* Job Title */}
                                    <div className='bg-white p-3 font-semibold rounded-lg'>
                                        Software Engineer
                                    </div>
                                    {/* Job Description */}
                                    <div className='p-3 text-sm italic'>
                                        My current employment. Way better than
                                        the position before!
                                    </div>
                                    {/* Job Date */}
                                    <div className='p-3 text-red-400 text-sm font-semibold'>
                                        2024 - Present
                                    </div>
                                    {/* Job Company */}
                                    <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
                                        Apple
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                {/* SVG Container */}
                <div className='hidden lg:block w-1/3 xl:1/2 sticky top-0 z-30 xl:1/2'>
                    <Brain scrollYProgress={scrollYProgress} />
                </div>
            </div>
        </motion.div>
    );
};
export default About;
