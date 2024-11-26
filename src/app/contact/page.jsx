'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = e => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <motion.div
            className='h-full'
            initial={{ y: '-200vh' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1 }}
        >
            <div className='h-full bg-gradient-to-b from-indigo-50 to-purple-50 p-4 md:p-8 lg:p-12'>
                <div className='max-w-7xl mx-auto'>
                    {/* Header */}
                    <motion.div
                        className='text-center mb-12'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <h1 className='text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 pb-4'>
                            Let's Create Something Amazing
                        </h1>
                        <p className='text-gray-600 text-lg md:text-xl'>
                            Got a project in mind? Let's bring your ideas to
                            life.
                        </p>
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
                            <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg mt-6'>
                                <div className='space-y-6'>
                                    <div className='flex items-center space-x-4'>
                                        <div className='bg-purple-100 p-3 rounded-full'>
                                            <Mail className='w-6 h-6 text-purple-600' />
                                        </div>
                                        <div>
                                            <h3 className='font-medium text-gray-900'>
                                                Email
                                            </h3>
                                            <p className='text-gray-600'>
                                                example@email.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex items-center space-x-4'>
                                        <div className='bg-indigo-100 p-3 rounded-full'>
                                            <Phone className='w-6 h-6 text-indigo-600' />
                                        </div>
                                        <div>
                                            <h3 className='font-medium text-gray-900'>
                                                Phone
                                            </h3>
                                            <p className='text-gray-600'>
                                                +60 12-345 6789
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex items-center space-x-4'>
                                        <div className='bg-purple-100 p-3 rounded-full'>
                                            <MapPin className='w-6 h-6 text-purple-600' />
                                        </div>
                                        <div>
                                            <h3 className='font-medium text-gray-900'>
                                                Location
                                            </h3>
                                            <p className='text-gray-600'>
                                                Kuala Lumpur, Malaysia
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.9 }}
                        >
                            <form onSubmit={handleSubmit} className='space-y-6'>
                                <div className='space-y-4'>
                                    <div>
                                        <label
                                            htmlFor='name'
                                            className='block text-sm font-medium text-gray-700'
                                        >
                                            Name
                                        </label>
                                        <input
                                            type='text'
                                            id='name'
                                            className='mt-1 block w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition'
                                            placeholder='John Doe'
                                            onChange={e =>
                                                setFormData({
                                                    ...formData,
                                                    name: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor='email'
                                            className='block text-sm font-medium text-gray-700'
                                        >
                                            Email
                                        </label>
                                        <input
                                            type='email'
                                            id='email'
                                            className='mt-1 block w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition'
                                            placeholder='john@example.com'
                                            onChange={e =>
                                                setFormData({
                                                    ...formData,
                                                    email: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor='message'
                                            className='block text-sm font-medium text-gray-700'
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id='message'
                                            rows={6}
                                            className='mt-1 block w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition'
                                            placeholder='Tell me about your project...'
                                            onChange={e =>
                                                setFormData({
                                                    ...formData,
                                                    message: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>

                                <motion.button
                                    type='submit'
                                    className='w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg flex items-center justify-center space-x-2 hover:shadow-xl transition-shadow'
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span>Send Message</span>
                                    <Send className='w-5 h-5' />
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
