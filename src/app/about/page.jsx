'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
    return (
        <motion.div
            className='h-full'
            initial={{ y: '-200vh' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1 }}
        >
            {/* Container */}
            <div className=''>
                {/* Text Container */}
                <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64'>
                    {/* Biography Container */}
                    <div className='flex flex-col gap-12 justify-center'>
                        {/* Biography Title */}
                        <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
                        {/* Biography Description */}
                        <p className='text-lg'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
                        </p>
                        {/* Biography Quote */}
                        <span className='italic'>
                            Time waits for no man. Unless that man is me.
                        </span>
                        {/* Biography Sign SVG*/}
                        <div className='self-end'>
                            <Image
                                src='/signature-chuck.png'
                                alt=''
                                height={75}
                                width={185}
                            />
                        </div>
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
                    <div className='flex flex-col gap-12 justify-center'>
                        {/* Skill Title */}
                        <h1 className='font-bold text-2xl'>SKILLS</h1>
                        {/* SKILL LIST */}
                        <div className='flex gap-4 flex-wrap'>
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
                                Freamer Motion
                            </div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Webpack
                            </div>
                        </div>
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
                    <div className=''>EXPERIENCE</div>
                </div>
                {/* SVG Container */}
                <div className='hidden'></div>
            </div>
        </motion.div>
    );
};
export default About;
