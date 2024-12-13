'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import NavLink from './navLink';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
    { url: '/', title: 'Home' },
    { url: '/about', title: 'About' },
    { url: '/portfolio', title: 'Portfolio' },
    { url: '/contact', title: 'Contact' },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const topVariant = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: 45,
            backgroundColor: 'rgb(255,255,255)',
        },
    };

    const centerVariant = {
        closed: {
            opacity: 1,
        },
        opened: {
            opacity: 0,
        },
    };

    const bottomVariant = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: -45,
            backgroundColor: 'rgb(255,255,255)',
        },
    };

    const listVariants = {
        initial: {
            x: '100vw',
        },
        animate: {
            x: 0,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.2,
            },
        },
        exit: {
            x: '100vw',
            transition: {
                when: 'afterChildren',
                staggerChildren: 0.1,
                staggerDirection: -1,
            },
        },
    };

    const listItemVariants = {
        initial: {
            x: 10,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
        },
        exit: {
            x: -10,
            opacity: 0,
        },
    };

    return (
        <div className='h-full flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
            {/* Logo */}
            <div className='md:hidden lg:flex lg:w-1/3 lg:justify-start'>
                <Link
                    href='/'
                    className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'
                >
                    <span className='text-white mr-1'>Zamil</span>
                    <span className='w-12 h-8 rounded bg-white text-black flex items-center justify-center'>
                        Tech
                    </span>
                </Link>
            </div>

            {/* Links */}
            <div className='hidden md:flex gap-4 lg:gap-6 w-1/3 justify-center'>
                {links.map(link => (
                    <NavLink link={link} key={link.title} />
                ))}
            </div>

            {/* Social */}
            <div className='hidden md:flex gap-4 w-1/3 justify-end'>
                <Link href='#'>
                    <Image src='/github.png' alt='' width={24} height={24} />
                </Link>
                <Link href='#'>
                    <Image src='/dribbble.png' alt='' width={24} height={24} />
                </Link>
                <Link href='#'>
                    <Image src='/instagram.png' alt='' width={24} height={24} />
                </Link>
                <Link href='#'>
                    <Image src='/facebook.png' alt='' width={24} height={24} />
                </Link>
                <Link href='#'>
                    <Image src='/pinterest.png' alt='' width={24} height={24} />
                </Link>
                <Link href='#'>
                    <Image src='/linkedin.png' alt='' width={24} height={24} />
                </Link>
            </div>

            {/* Menu Button */}
            <div className='md:hidden'>
                <button
                    className='w-10 h-8 flex flex-col justify-between z-50 relative'
                    onClick={() => setOpen(!open)}
                    style={{ position: 'relative', zIndex: 60 }}
                >
                    <motion.div
                        variants={topVariant}
                        animate={open ? 'opened' : 'closed'}
                        className='w-10 h-1 bg-black rounded origin-left'
                    ></motion.div>
                    <motion.div
                        variants={centerVariant}
                        animate={open ? 'opened' : 'closed'}
                        className='w-10 h-1 bg-black rounded'
                    ></motion.div>
                    <motion.div
                        variants={bottomVariant}
                        animate={open ? 'opened' : 'closed'}
                        className='w-10 h-1 bg-black rounded origin-left'
                    ></motion.div>
                </button>

                {/* Menu List */}
                <AnimatePresence mode='wait'>
                    {open && (
                        <motion.div
                            variants={listVariants}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                            className='fixed top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl'
                            style={{ zIndex: 55 }}
                        >
                            {links.map(link => (
                                <motion.div
                                    variants={listItemVariants}
                                    key={link.title}
                                    className='relative'
                                    style={{ zIndex: 56 }}
                                >
                                    <Link
                                        href={link.url}
                                        className='block py-2 px-4'
                                        onClick={e => {
                                            e.stopPropagation();
                                            setOpen(false);
                                        }}
                                    >
                                        {link.title}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Navbar;
