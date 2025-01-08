'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ContactInfo } from '../../components/contact/ContactInfo';
import { ContactForm } from '../../components/contact/ContactForm';
import Toast from '../../components/ui/Toast';

export default function ContactPage() {
    const [toast, setToast] = useState(null);

    return (
        <motion.div className='h-full' initial={{ y: '-200vh' }} animate={{ y: '0%' }} transition={{ duration: 1 }}>
            <div className='h-full overflow-scroll no-scrollbar'>
                <div className='p-4 md:p-8 lg:p-12 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
                    <div className='max-w-7xl mx-auto'>
                        {/* header */}
                        <div className='pb-14'>
                            <h1 className='text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 pb-3 mb-4 leading-tight'>
                                Ready to Build the Future Together
                            </h1>
                            <p className='text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed'>
                                Seeking impactful opportunities and meaningful collaborations.
                            </p>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
                            {/* left */}
                            <ContactInfo />
                            {/* right */}
                            <ContactForm setToast={setToast} />
                        </div>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
            </AnimatePresence>
        </motion.div>
    );
}
