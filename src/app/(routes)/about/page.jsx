'use client';
import { motion, useInView, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Brain from '../../components/ui/Brain';
import { introData, skillsData, experienceData } from '../../data/about';

const ExperienceItem = ({ data, index }) => {
    const isEven = index % 2 === 0;
    const { title, description, date, company } = data;

    const Details = () => (
        <>
            <div className='bg-white p-2 sm:p-3 font-semibold rounded-lg w-fit'>
                {title}
            </div>
            <div className='py-1 text-sm italic'>{description}</div>
            <div className='py-1 text-red-400 text-xs sm:sm font-semibold whitespace-nowrap overflow-hidden text-overflow-ellipsis'>
                {date}
            </div>
            <div className='p-1 sm:p-2 rounded bg-white text-xs sm:text-sm font-semibold w-fit'>
                {company}
            </div>
        </>
    );

    return (
        <div className='flex justify-between h-48'>
            <div className='w-2/5'>{isEven && <Details />}</div>
            <div>
                <div className='w-1 h-full bg-gray-600 rounded relative'>
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2' />
                </div>
            </div>
            <div className='w-2/5'>{!isEven && <Details />}</div>
        </div>
    );
};

const ScrollIcon = () => (
    <div className='w-6 h-6 mx-auto mt-8 animate-bounce text-gray-500'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
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
);

const About = () => {
    const containerRef = useRef();
    const { scrollYProgress } = useScroll({ container: containerRef });
    const skillRef = useRef();
    const isSkillRefInView = useInView(skillRef, { margin: '-100px' });
    const experienceRef = useRef();
    const isExperienceRefInView = useInView(experienceRef, {
        margin: '-100px',
    });

    return (
        <motion.div
            className='h-full'
            initial={{ y: '-200vh' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1 }}
        >
            <div
                className='h-full overflow-scroll no-scrollbar lg:flex'
                ref={containerRef}
            >
                <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2'>
                    {/* Biography Section */}
                    <div className='flex flex-col gap-12 justify-center'>
                        <h1 className='font-bold text-2xl'>Introduction</h1>
                        <p className='text-lg'>{introData.description}</p>
                        <ScrollIcon />
                    </div>

                    {/* Skills Section */}
                    <div
                        className='flex flex-col gap-12 justify-center'
                        ref={skillRef}
                    >
                        <motion.h1
                            initial={{ x: '-300px' }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                            transition={{ delay: 0.2 }}
                            className='font-bold text-2xl'
                        >
                            SKILLS
                        </motion.h1>
                        <motion.div
                            initial={{ x: '-300px' }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                            className='flex gap-4 flex-wrap'
                        >
                            {skillsData.map(skill => (
                                <div
                                    key={skill}
                                    className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'
                                >
                                    {skill}
                                </div>
                            ))}
                        </motion.div>
                        <ScrollIcon />
                    </div>

                    {/* Experience Section */}
                    <div
                        className='flex flex-col gap-12 justify-center pb-48'
                        ref={experienceRef}
                    >
                        <motion.h1
                            initial={{ x: '-300px' }}
                            animate={isExperienceRefInView ? { x: 0 } : {}}
                            transition={{ delay: 0.2 }}
                            className='font-bold text-2xl'
                        >
                            EXPERIENCE
                        </motion.h1>
                        <motion.div
                            initial={{ x: '-300px' }}
                            animate={isExperienceRefInView ? { x: 0 } : {}}
                        >
                            {experienceData.map((experience, index) => (
                                <ExperienceItem
                                    key={index}
                                    data={experience}
                                    index={index}
                                />
                            ))}
                        </motion.div>
                    </div>
                </div>
                <div className='hidden lg:block w-1/3 xl:1/2 sticky top-0 z-30'>
                    <Brain scrollYProgress={scrollYProgress} />
                </div>
            </div>
        </motion.div>
    );
};

export default About;
