'use client';
import { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const formFields = [
    {
        id: 'user_name',
        name: 'user_name',
        label: 'Name',
        type: 'text',
        placeholder: 'Your full name',
    },
    {
        id: 'user_email',
        name: 'user_email',
        label: 'Email',
        type: 'email',
        placeholder: 'you@example.com',
    },
];

const FormInput = ({ field }) => (
    <motion.div 
        whileHover={{ scale: 1.01 }} 
        transition={{ duration: 1 }}
        className="w-full"
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
            name={field.name}
            className='block w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition duration-200 hover:border-purple-300'
            placeholder={field.placeholder}
        />
    </motion.div>
);

export const ContactForm = ({ setToast }) => {
    const form = useRef();
    const [isHovered, setIsHovered] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = useCallback(
        async e => {
            e.preventDefault();
            if (isSubmitting) return;

            setIsSubmitting(true);
            try {
                await emailjs.sendForm(
                    process.env.NEXT_PUBLIC_SERVICE_ID,
                    process.env.NEXT_PUBLIC_TEMPLATE_ID,
                    form.current,
                    process.env.NEXT_PUBLIC_PUBLIC_KEY
                );

                setToast({
                    message: 'Message sent successfully!',
                    type: 'success',
                });
                form.current.reset();
            } catch (error) {
                console.error('Error:', error);
                setToast({
                    message: 'Failed to send message. Please try again.',
                    type: 'error',
                });
            } finally {
                setIsSubmitting(false);
                setTimeout(() => setToast(null), 5000);
            }
        },
        [isSubmitting, setToast]
    );

    return (
        <form
            ref={form}
            onSubmit={handleSubmit}
            className='bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20'
        >
            <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                Send a Message
            </h2>
            <div className='space-y-6'>
                <div className="grid grid-cols-1 gap-6">
                    {formFields.map(field => (
                        <FormInput key={field.id} field={field} />
                    ))}
                </div>

                <motion.div 
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 1 }}
                >
                    <label
                        htmlFor='message'
                        className='block text-sm font-medium text-gray-700 mb-2'
                    >
                        Message
                    </label>
                    <textarea
                        id='message'
                        name='user_message'
                        rows={6}
                        className='block w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition duration-200 hover:border-purple-300'
                        placeholder='Tell me about your project...'
                        disabled={isSubmitting}
                    />
                </motion.div>

                <motion.button
                    type='submit'
                    className='group w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-4 px-6 rounded-lg shadow-lg flex items-center justify-center space-x-2 hover:shadow-xl transition-all duration-300'
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 1 }}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                >
                    <span className="text-lg">Send Message</span>
                    <motion.div
                        animate={isHovered ? { x: 5 } : { x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Send className='w-5 h-5' />
                    </motion.div>
                </motion.button>
            </div>
        </form>
    );
};