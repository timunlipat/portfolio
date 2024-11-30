'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import CallToAction from '../components/portfolio/CallToAction';
import HeroSection from '../components/portfolio/HeroSection';
import ProjectCard from '../components/portfolio/ProjectCard';

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
                        {items.map((item, index) => (
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
