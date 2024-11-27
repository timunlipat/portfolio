'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Star, CheckCircle } from 'lucide-react';

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

    const testimonials = [
        {
            name: 'Dina Razak',
            role: 'Owner',
            company: "Dina's Bakers",
            text: 'Our online orders have skyrocketed thanks to their amazing website! It’s easy to use, and their support team is super helpful. Highly recommend!',
            rating: 5,
        },
        {
            name: 'Pak Abu',
            role: 'Owner',
            company: 'Kedai Makan',
            text: 'Exceeded all our expectations. Definitely akan recommend to others!',
            rating: 5,
        },
    ];

    const features = [
        '24/7 Customer Support',
        '100% Satisfaction Guaranteed',
        'Fast Response Time',
        'Expert Consultation',
    ];

    return (
        <motion.div
            className='h-full'
            initial={{ y: '-200vh' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1 }}
        >
            <div className='relative bg-gradient-to-b from-indigo-50 via-purple-50 to-white p-4 md:p-8 lg:p-12'>
                <div className='max-w-7xl mx-auto'>
                    {/* Header Section */}
                    <motion.div
                        className='text-center mb-16 relative'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <span className='inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4'>
                            Let&apos;s Work Together
                        </span>
                        <h1 className='text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 pb-4'>
                            Transform Your Ideas Into Reality
                        </h1>
                        <p className='text-gray-600 text-lg md:text-xl max-w-2xl mx-auto'>
                            Join hundreds of satisfied clients who have brought
                            their visions to life
                        </p>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-16'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className='bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center'
                            >
                                <CheckCircle className='w-6 h-6 text-purple-600 mx-auto mb-2' />
                                <p className='text-sm font-medium text-gray-700'>
                                    {feature}
                                </p>
                            </div>
                        ))}
                    </motion.div>

                    {/* Main Content */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16'>
                        {/* Left Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className='space-y-8'
                        >
                            {/* Contact Info Card */}
                            <div className='bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20'>
                                <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                                    Get in Touch
                                </h2>
                                <div className='space-y-6'>
                                    {[
                                        {
                                            icon: Mail,
                                            label: 'Email',
                                            value: 'contact@example.com',
                                            bg: 'purple',
                                        },
                                        {
                                            icon: Phone,
                                            label: 'Phone',
                                            value: '+60 12-345 6789',
                                            bg: 'indigo',
                                        },
                                        {
                                            icon: MapPin,
                                            label: 'Location',
                                            value: 'Kuala Lumpur, Malaysia',
                                            bg: 'purple',
                                        },
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className='flex items-center space-x-4 hover:translate-x-2 transition-transform duration-300'
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            <div
                                                className={`bg-${item.bg}-100 p-4 rounded-full shadow-inner`}
                                            >
                                                <item.icon
                                                    className={`w-6 h-6 text-${item.bg}-600`}
                                                />
                                            </div>
                                            <div>
                                                <h3 className='font-medium text-gray-900'>
                                                    {item.label}
                                                </h3>
                                                <p
                                                    className={`text-gray-600 hover:text-${item.bg}-600 transition-colors`}
                                                >
                                                    {item.value}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Testimonials */}
                            <div className='space-y-4'>
                                {testimonials.map((testimonial, index) => (
                                    <motion.div
                                        key={index}
                                        className='bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20'
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className='flex items-start space-x-4'>
                                            <div className='w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 flex items-center justify-center text-white font-medium'>
                                                {testimonial.name[0]}
                                            </div>
                                            <div className='flex-1'>
                                                <div className='flex items-center justify-between'>
                                                    <div>
                                                        <p className='font-medium text-gray-900'>
                                                            {testimonial.name}
                                                        </p>
                                                        <p className='text-sm text-gray-600'>
                                                            {testimonial.role}{' '}
                                                            at{' '}
                                                            {
                                                                testimonial.company
                                                            }
                                                        </p>
                                                    </div>
                                                    <div className='flex items-center space-x-1'>
                                                        {[
                                                            ...Array(
                                                                testimonial.rating
                                                            ),
                                                        ].map((_, i) => (
                                                            <Star
                                                                key={i}
                                                                className='w-4 h-4 fill-yellow-400 text-yellow-400'
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className='text-gray-700 mt-4'>
                                            {testimonial.text}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 }}
                            className='relative'
                        >
                            <form
                                onSubmit={handleSubmit}
                                className='bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20'
                            >
                                <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                                    Send Us a Message
                                </h2>
                                <div className='space-y-6'>
                                    {[
                                        {
                                            id: 'name',
                                            label: 'Name',
                                            type: 'text',
                                            placeholder: 'John Doe',
                                        },
                                        {
                                            id: 'email',
                                            label: 'Email',
                                            type: 'email',
                                            placeholder: 'john@example.com',
                                        },
                                    ].map(field => (
                                        <motion.div
                                            key={field.id}
                                            whileHover={{ scale: 1.01 }}
                                        >
                                            <label
                                                htmlFor={field.id}
                                                className='block text-sm font-medium text-gray-700 mb-2'
                                            >
                                                {field.label}
                                            </label>
                                            <input
                                                type={field.type}
                                                id={field.id}
                                                className='block w-full px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition duration-200 hover:border-purple-300'
                                                placeholder={field.placeholder}
                                                onChange={e =>
                                                    setFormData({
                                                        ...formData,
                                                        [field.id]:
                                                            e.target.value,
                                                    })
                                                }
                                            />
                                        </motion.div>
                                    ))}
                                    <motion.div whileHover={{ scale: 1.01 }}>
                                        <label
                                            htmlFor='message'
                                            className='block text-sm font-medium text-gray-700 mb-2'
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id='message'
                                            rows={6}
                                            className='block w-full px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition duration-200 hover:border-purple-300'
                                            placeholder='Tell us about your project...'
                                            onChange={e =>
                                                setFormData({
                                                    ...formData,
                                                    message: e.target.value,
                                                })
                                            }
                                        />
                                    </motion.div>

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
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactPage;
