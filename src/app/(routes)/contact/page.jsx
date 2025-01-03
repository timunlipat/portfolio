'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '../../components/contact/Header';
import { ContactInfo } from '../../components/contact/ContactInfo';
import { SkillsShowcase } from '../../components/contact/SkillsShowcase';
import { ContactForm } from '../../components/contact/ContactForm';
import Toast from '../../components/ui/Toast';

export default function ContactPage() {
    const [toast, setToast] = useState(null);

    return (
        <motion.div
            className='h-full'
            initial={{ y: '-200vh' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1 }}
        >
            <div className='h-full overflow-scroll no-scrollbar'>
                <div className='p-4 md:p-8 lg:p-12 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
                    <div className='max-w-7xl mx-auto'>
                        <Header />

                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
                            {/* Left Column - Skills */}
                            <SkillsShowcase />

                            {/* Right Column - Contact Info & Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1 }}
                                className='space-y-8'
                            >
                                <ContactInfo />
                                <ContactForm setToast={setToast} />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {toast && (
                    <Toast
                        message={toast.message}
                        type={toast.type}
                        onClose={() => setToast(null)}
                    />
                )}
            </AnimatePresence>
        </motion.div>
    );
}