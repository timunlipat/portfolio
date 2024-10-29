'use client';

import Link from 'next/link';
import { useState } from 'react';

const links = [
    { url: '/', title: 'home' },
    { url: '/about', title: 'About' },
    { url: '/porfolio', title: 'Porfolio' },
    { url: '/contact', title: 'Contact' },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='h-full flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
            {/* Logo */}
            <Link
                href='/'
                className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'
            >
                <span className='text-white mr-1'>Zamil</span>
                <span className='w-12 h-8 rounded bg-white text-black flex items-center justify-center'>
                    .dev
                </span>
            </Link>

            {/* Menu */}
            <button
                className='w-10 h-8 flex flex-col justify-between z-50 relative'
                onClick={() => setOpen(prev => !prev)}
            >
                <div className='w-10 h-1 bg-white rounded'></div>
                <div className='w-10 h-1 bg-white rounded'></div>
                <div className='w-10 h-1 bg-white rounded'></div>
            </button>

            {/* Menu List */}
            {open && (
                <div className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl'>
                    {links.map(link => (
                        <Link href={link.url}>{link.title}</Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Navbar;
