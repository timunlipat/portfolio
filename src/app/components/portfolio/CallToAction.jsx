import { motion } from 'framer-motion';
import Link from 'next/link';

const CallToAction = () => {
    const circleVariants = {
        animate: {
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
            },
        },
    };

    const textVariants = {
        animate: {
            rotate: 360,
            transition: {
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
            },
        },
    };

    return (
        <div className='w-screen h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex flex-col gap-16 items-center justify-center text-center'>
            <h1 className='text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 pb-10'>
                Ready to Build Something Amazing?
            </h1>

            <div className='relative'>
                <div className='absolute inset-0 z-0'>
                    {[...Array(7)].map((_, i) => (
                        <motion.div
                            key={i}
                            className='absolute inset-0'
                            variants={circleVariants}
                            animate='animate'
                            style={{
                                border: '2px solid rgba(139, 92, 246, 0.2)',
                                borderRadius: '50%',
                                animationDelay: `${i * 0.5}s`,
                            }}
                        />
                    ))}
                </div>

                <motion.svg
                    viewBox='0 0 300 300'
                    className='w-64 h-64 md:w-[500px] md:h-[500px]'
                    variants={textVariants}
                    animate='animate'
                >
                    <defs>
                        <path id='circlePath' d='M 150, 150 m -70, 0 a 70,70 0 0,1 140,0 a 70,70 0 0,1 -140,0' />
                        <linearGradient id='textGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
                            <stop offset='0%' stopColor='#818cf8' />
                            <stop offset='100%' stopColor='#8b5cf6' />
                        </linearGradient>
                    </defs>
                    <text fill='url(#textGradient)'>
                        <textPath xlinkHref='#circlePath' className='text-xl font-medium tracking-wider'>
                            ✦ Full-Stack Developer ✦ UI/UX Designer ✦
                        </textPath>
                    </text>
                </motion.svg>

                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <Link href='/contact'>
                        <motion.div
                            className='w-20 h-20 md:w-32 md:h-32 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center group relative z-10 shadow-lg'
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <span className='text-white font-medium text-lg md:text-xl'>Contact me</span>
                            <motion.div
                                className='absolute inset-0 bg-white rounded-full'
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 0.1 }}
                                transition={{ duration: 0.2 }}
                            />
                        </motion.div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;
