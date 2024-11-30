'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import ImageCarousel from '../components/imageCarousel';

const items = [
    {
        id: 1,
        color: 'from-red-300 to-blue-300',
        title: 'React Commerce',
        tech: [
            'React',
            'Node.js',
            'MongoDB',
            'Stripe',
            'Next.js',
            'Tailwind CSS',
            'TypeScript',
            'Redux',
            'Express.js',
            'Jest',
            'Cypress',
            'GraphQL',
            'Prisma',
            'Vercel',
        ],
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis.',
        images: [
            'https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
            'https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
            'https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
            'https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        ],
        link: '',
        github: '',
    },
    {
        id: 2,
        color: 'from-blue-300 to-violet-300',
        title: 'React Blog',
        tech: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma'],
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis.',
        images: [
            'https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
            'https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
            'https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
        ],
        link: '',
        github: '',
    },
    {
        id: 3,
        color: 'from-violet-300 to-purple-300',
        title: 'Vanilla Book App',
        tech: ['JavaScript', 'Firebase', 'CSS3'],
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis.',
        images: [
            'https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
            'https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
            'https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
        ],
        link: '',
        github: '',
    },
    {
        id: 4,
        color: 'from-purple-300 to-red-300',
        title: 'Music App',
        tech: ['React', 'Redux', 'Web Audio API'],
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis.',
        images: [
            'https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
            'https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
            'https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
        ],
        link: '',
        github: '',
    },
];
const PortfolioPage = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref });
    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);

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

    const techBadgeVariants = {
        initial: { opacity: 0, y: 20 },
        animate: index => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                delay: index * 0.1,
            },
        }),
    };

    return (
        <motion.div
            className='h-full'
            initial={{ y: '-200vh' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1 }}
        >
            <div className='h-[600vh] relative' ref={ref}>
                {/* Hero Section */}
                <div className='w-screen h-[calc(100vh-6rem)] flex flex-col items-center justify-center'>
                    <motion.h1
                        className='text-7xl md:text-8xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-transparent bg-clip-text'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Showcase
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className='mt-6 flex items-center gap-2 text-gray-600'
                    >
                        <ArrowRight className='w-5 h-5 animate-bounce' />
                        <span className='text-lg'>Scroll to explore</span>
                    </motion.div>
                </div>

                {/* Horizontal Scroll Gallery */}
                <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
                    <motion.div style={{ x }} className='flex'>
                        <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300' />

                        {items.map((item, index) => (
                            <div
                                key={item.id}
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
                                            transition={{
                                                duration: 0.6,
                                                delay: 0.2,
                                            }}
                                        >
                                            Project {index + 1}
                                        </motion.span>
                                        <motion.h2
                                            className='text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 text-transparent bg-clip-text leading-tight tracking-tight'
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.6,
                                                delay: 0.3,
                                            }}
                                        >
                                            {item.title}
                                        </motion.h2>
                                    </div>

                                    <div className='grid md:grid-cols-2 gap-8 items-stretch h-full'>
                                        <motion.div
                                            className='flex flex-col gap-4 h-full'
                                            initial={{
                                                opacity: 0,
                                                scale: 0.95,
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                scale: 1,
                                            }}
                                            transition={{
                                                duration: 0.6,
                                                delay: 0.4,
                                            }}
                                        >
                                            <div className='relative overflow-hidden rounded-xl shadow-2xl flex-grow'>
                                                <ImageCarousel
                                                    images={item.images}
                                                />
                                            </div>

                                            <div className='flex flex-nowrap gap-2 mt-4'>
                                                <div className='flex flex-wrap gap-2 max-w-md'>
                                                    {item.tech.map(
                                                        (tech, techIndex) => (
                                                            <motion.div
                                                                key={techIndex}
                                                                variants={
                                                                    techBadgeVariants
                                                                }
                                                                initial='initial'
                                                                whileInView='animate'
                                                                custom={
                                                                    techIndex
                                                                }
                                                                className='group relative flex-shrink-0'
                                                            >
                                                                <div className='absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity dark:from-purple-400 dark:to-indigo-400' />
                                                                <div className='relative px-2 py-1 bg-white dark:bg-gray-800 rounded-full text-xs font-medium text-gray-800 dark:text-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.06)] transform group-hover:-translate-y-1 transition-transform'>
                                                                    {tech}
                                                                </div>
                                                            </motion.div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            className='flex flex-col gap-6 h-full'
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{
                                                duration: 0.6,
                                                delay: 0.5,
                                            }}
                                        >
                                            <div className='flex flex-col justify-between h-full'>
                                                <p className='text-lg text-gray-800/90 leading-relaxed'>
                                                    {item.desc}
                                                </p>

                                                <div className='flex gap-4 mt-8 justify-start md:justify-end'>
                                                    <motion.button
                                                        className='flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors shadow-lg'
                                                        whileHover={{
                                                            scale: 1.02,
                                                        }}
                                                        whileTap={{
                                                            scale: 0.98,
                                                        }}
                                                    >
                                                        <Github className='w-5 h-5' />
                                                        View Code
                                                    </motion.button>
                                                    <motion.button
                                                        className='flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-gray-900 font-medium hover:bg-gray-50 transition-colors shadow-lg'
                                                        whileHover={{
                                                            scale: 1.02,
                                                        }}
                                                        whileTap={{
                                                            scale: 0.98,
                                                        }}
                                                    >
                                                        <ExternalLink className='w-5 h-5' />
                                                        Live Demo
                                                    </motion.button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Animated Circle section */}
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
                            <path
                                id='circlePath'
                                d='M 150, 150 m -70, 0 a 70,70 0 0,1 140,0 a 70,70 0 0,1 -140,0'
                            />
                            <linearGradient
                                id='textGradient'
                                x1='0%'
                                y1='0%'
                                x2='100%'
                                y2='100%'
                            >
                                <stop offset='0%' stopColor='#818cf8' />
                                <stop offset='100%' stopColor='#8b5cf6' />
                            </linearGradient>
                        </defs>
                        <text fill='url(#textGradient)'>
                            <textPath
                                xlinkHref='#circlePath'
                                className='text-xl font-medium tracking-wider'
                            >
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
                                <span className='text-white font-medium text-lg md:text-xl'>
                                    Let&apos;s Talk
                                </span>
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
        </motion.div>
    );
};

export default PortfolioPage;
