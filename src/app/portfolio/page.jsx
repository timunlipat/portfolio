'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

const items = [
    {
        id: 1,
        color: 'from-red-300 to-blue-300',
        title: 'React Commerce',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
        img: 'https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
        link: '',
    },
    {
        id: 2,
        color: 'from-blue-300 to-violet-300',
        title: 'Next.js Medium Blog',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
        img: 'https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
        link: '',
    },
    {
        id: 3,
        color: 'from-violet-300 to-purple-300',
        title: 'Vanilla Book App',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
        img: 'https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
        link: '',
    },
    {
        id: 4,
        color: 'from-purple-300 to-red-300',
        title: 'Spotify Music App',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
        img: 'https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        link: '',
    },
];

const PortfolioPage = () => {
    const ref = useRef();
    const [isHovered, setIsHovered] = useState(false);

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
                <div className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center'>
                    My Works
                </div>
                <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
                    <motion.div style={{ x }} className='flex'>
                        <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300' />
                        {items.map(item => (
                            <div
                                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                                key={item.id}
                            >
                                <div className='flex flex-col gap-8 text-white'>
                                    <h1 className='text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl'>
                                        {item.title}
                                    </h1>
                                    <div className='relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]'>
                                        <Image
                                            src={item.img}
                                            alt={`${item.title} preview`}
                                            fill
                                            sizes='(max-width: 768px) 80vw,
                                                   (max-width: 1024px) 96vw,
                                                   (max-width: 1280px) 500px,
                                                   600px'
                                            className='object-cover'
                                            priority={item.id === 1}
                                        />
                                    </div>
                                    <p className='w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]'>
                                        {item.desc}
                                    </p>
                                    <Link
                                        href={item.link}
                                        className='flex justify-end'
                                    >
                                        <button
                                            className='
                                                bg-white
                                                hover:bg-opacity-95
                                                text-purple-800
                                                font-medium
                                                px-6
                                                py-3
                                                rounded-lg
                                                transition-all
                                                duration-200
                                                shadow-lg
                                                hover:shadow-xl
                                                transform
                                                hover:-translate-y-0.5
                                                flex
                                                items-center
                                                justify-center
                                                space-x-2
                                                w-auto
                                                min-w-[120px]
                                                backdrop-blur-sm
                                                border
                                                border-white/20
                                            '
                                        >
                                            See Demo
                                        </button>
                                    </Link>
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
                    {/* Animated background circles */}
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

                    {/* Main rotating text */}
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
                                y2='0%'
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
                                className='w-20 h-20 md:w-32 md:h-32 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center group'
                                whileHover={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                }}
                                transition={{ duration: 0.2 }}
                            >
                                <span className='text-white font-medium text-lg md:text-xl'>
                                    Let's Talk
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
