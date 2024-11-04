'use client';
import { motion } from 'framer-motion';

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
                        <h1>BIOGRAPHY</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
                        </p>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </span>
                        <div className=''></div>
                    </div>
                    {/* Skills Container */}
                    <div className=''>SKILLS</div>
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
