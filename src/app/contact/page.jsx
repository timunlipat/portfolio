'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Sparkles, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isHovered, setIsHovered] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData);
    };

    // Animation variants
    const cardVariants = {
        hover: {
            scale: 1.02,
            boxShadow:
                '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            transition: { duration: 0.2 },
        },
    };

    return (
        <motion.div
            className='h-full'
            initial={{ y: '-200vh' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1 }}
        >
            <div className='relative h-full bg-gradient-to-b from-indigo-50 to-purple-50 p-4 md:p-8 lg:p-12'>
                <div className='max-w-7xl mx-auto'>
                    {/* Header */}
                    <motion.div
                        className='text-center mb-12 relative'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                            >
                                <Sparkles className='w-8 h-8 text-purple-400' />
                            </motion.div>
                        </div>
                        <h1 className='text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 pb-4 drop-shadow-sm'>
                            Let's Create Something Amazing
                        </h1>
                        <motion.p
                            className='text-gray-600 text-lg md:text-xl'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            Got a project in mind? Let's bring your ideas to
                            life.
                        </motion.p>
                    </motion.div>

                    {/* Main Content */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 }}
                            className='space-y-8'
                        >
                            {/* Contact Cards */}
                            <motion.div
                                className='bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg mt-1 border border-white/20'
                                whileHover={cardVariants.hover}
                            >
                                <div className='space-y-8'>
                                    <motion.div
                                        className='flex items-center space-x-4 hover:translate-x-2 transition-transform duration-300'
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <div className='bg-purple-100 p-4 rounded-full shadow-inner'>
                                            <Mail className='w-6 h-6 text-purple-600' />
                                        </div>
                                        <div>
                                            <h3 className='font-medium text-gray-900'>
                                                Email
                                            </h3>
                                            <p className='text-gray-600 hover:text-purple-600 transition-colors'>
                                                example@email.com
                                            </p>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        className='flex items-center space-x-4 hover:translate-x-2 transition-transform duration-300'
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <div className='bg-indigo-100 p-4 rounded-full shadow-inner'>
                                            <Phone className='w-6 h-6 text-indigo-600' />
                                        </div>
                                        <div>
                                            <h3 className='font-medium text-gray-900'>
                                                Phone
                                            </h3>
                                            <p className='text-gray-600 hover:text-indigo-600 transition-colors'>
                                                +60 12-345 6789
                                            </p>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        className='flex items-center space-x-4 hover:translate-x-2 transition-transform duration-300'
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <div className='bg-purple-100 p-4 rounded-full shadow-inner'>
                                            <MapPin className='w-6 h-6 text-purple-600' />
                                        </div>
                                        <div>
                                            <h3 className='font-medium text-gray-900'>
                                                Location
                                            </h3>
                                            <p className='text-gray-600 hover:text-purple-600 transition-colors'>
                                                Kuala Lumpur, Malaysia
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.9 }}
                            className='relative'
                        >
                            <form
                                onSubmit={handleSubmit}
                                className='space-y-6 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20'
                            >
                                <div className='space-y-4'>
                                    <motion.div whileHover={{ scale: 1.01 }}>
                                        <label
                                            htmlFor='name'
                                            className='block text-sm font-medium text-gray-700'
                                        >
                                            Name
                                        </label>
                                        <input
                                            type='text'
                                            id='name'
                                            className='mt-1 block w-full px-4 py-3 bg-white/90 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition duration-200 hover:border-purple-300'
                                            placeholder='John Doe'
                                            onChange={e =>
                                                setFormData({
                                                    ...formData,
                                                    name: e.target.value,
                                                })
                                            }
                                        />
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.01 }}>
                                        <label
                                            htmlFor='email'
                                            className='block text-sm font-medium text-gray-700'
                                        >
                                            Email
                                        </label>
                                        <input
                                            type='email'
                                            id='email'
                                            className='mt-1 block w-full px-4 py-3 bg-white/90 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition duration-200 hover:border-purple-300'
                                            placeholder='john@example.com'
                                            onChange={e =>
                                                setFormData({
                                                    ...formData,
                                                    email: e.target.value,
                                                })
                                            }
                                        />
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.01 }}>
                                        <label
                                            htmlFor='message'
                                            className='block text-sm font-medium text-gray-700'
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id='message'
                                            rows={6}
                                            className='mt-1 block w-full px-4 py-3 bg-white/90 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition duration-200 hover:border-purple-300'
                                            placeholder='Tell me about your project...'
                                            onChange={e =>
                                                setFormData({
                                                    ...formData,
                                                    message: e.target.value,
                                                })
                                            }
                                        />
                                    </motion.div>
                                </div>

                                <motion.button
                                    type='submit'
                                    className='group w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-4 px-6 rounded-lg shadow-lg flex items-center justify-center space-x-2 hover:shadow-xl transition-all duration-300'
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.95 }}
                                    onHoverStart={() => setIsHovered(true)}
                                    onHoverEnd={() => setIsHovered(false)}
                                >
                                    <span>Send Message</span>
                                    <motion.div
                                        animate={
                                            isHovered ? { x: 5 } : { x: 0 }
                                        }
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Send className='w-5 h-5' />
                                    </motion.div>
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactPage;
