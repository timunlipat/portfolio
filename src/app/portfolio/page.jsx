'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const items = [
    {
        id: 1,
        color: 'from-red-300 to-blue-300',
        title: 'React Commerce',
        tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis.',
        img: 'https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
        link: '',
        github: '',
    },
    {
        id: 2,
        color: 'from-blue-300 to-violet-300',
        title: 'Next.js Medium Blog',
        tech: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma'],
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis.',
        img: 'https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
        link: '',
        github: '',
    },
    {
        id: 3,
        color: 'from-violet-300 to-purple-300',
        title: 'Vanilla Book App',
        tech: ['JavaScript', 'Firebase', 'CSS3'],
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis.',
        img: 'https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
        link: '',
        github: '',
    },
    {
        id: 4,
        color: 'from-purple-300 to-red-300',
        title: 'Music App',
        tech: ['React', 'Redux', 'Web Audio API'],
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis.',
        img: 'https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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

    return (
        <motion.div
            className='h-full'
            initial={{ y: '-200vh' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1 }}
        >
            <div className='h-[600vh] relative' ref={ref}>
                <div className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center'>
                    <h1 className='text-7xl md:text-8xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-transparent bg-clip-text'>
                        Showcase
                    </h1>
                </div>
                <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
                    <motion.div style={{ x }} className='flex'>
                        <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300' />
                        {items.map(item => (
                            <div
                                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                                key={item.id}
                            >
                                <div className='flex flex-col gap-6 w-full max-w-6xl mx-auto px-6 md:px-8'>
                                    <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 text-transparent bg-clip-text leading-tight tracking-tight py-2'>
                                        {item.title}
                                    </h1>

                                    <div className='grid md:grid-cols-2 gap-8 items-start'>
                                        <div className='relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl group'>
                                            <Image
                                                src={item.img}
                                                alt={`${item.title} preview`}
                                                fill
                                                className='object-cover object-center transform group-hover:scale-105 transition-transform duration-700'
                                                priority={item.id === 1}
                                            />
                                            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300'>
                                                <div className='absolute bottom-0 left-0 right-0 p-6'>
                                                    <div className='flex flex-wrap gap-2'>
                                                        {item.tech.map(
                                                            (tech, index) => (
                                                                <span
                                                                    key={index}
                                                                    className='px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800 shadow-sm'
                                                                >
                                                                    {tech}
                                                                </span>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='flex flex-col gap-6'>
                                            <p className='text-lg text-gray-800/90 leading-relaxed'>
                                                {item.desc}
                                            </p>

                                            <div className='flex gap-4 mt-auto'>
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
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <div className='w-screen h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex flex-col gap-16 items-center justify-center text-center'>
                <h1 className='text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 pb-10'>
                    Ready to Build Something Amazing?
                </h1>

                <div className='relative'>
                    <div className='absolute inset-0 z-0'>
                        {[...Array(3)].map((_, i) => (
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
                                Creative Technologist ✦
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
