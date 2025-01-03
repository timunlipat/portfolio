'use client';
import { useState, useRef, useCallback, memo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { skills } from '../../data/contact';
import emailjs from '@emailjs/browser';
import Toast from '../../components/ui/Toast';

// Header Section Component
const Header = memo(() => (
    <motion.div
        className='text-center pt-0 pb-16'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
    >
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mx-auto"
        >
            <h1 className='text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 pb-3 mb-4 leading-tight'>
                Ready to Build the Future Together
            </h1>
            <p className='text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed'>
                Seeking impactful opportunities and meaningful collaborations. Let’s bring innovative ideas to life.
            </p>
        </motion.div>
    </motion.div>
));
Header.displayName = 'Header';

// Contact Info Item Component
const ContactInfoItem = memo(({ item }) => (
    <motion.div
        className='flex items-center space-x-4 hover:translate-x-2 transition-transform duration-300'
        whileHover={{ scale: 1.02 }}
    >
        <div className={`bg-${item.bg}-100 p-4 rounded-full shadow-inner`}>
            <item.icon className={`w-6 h-6 text-${item.bg}-600`} />
        </div>
        <div>
            <h3 className='font-medium text-gray-900'>{item.label}</h3>
            <p className={`text-gray-600 hover:text-${item.bg}-600 transition-colors`}>
                {item.value}
            </p>
        </div>
    </motion.div>
));
ContactInfoItem.displayName = 'ContactInfoItem';

// Form Input Component
const FormInput = memo(({ field }) => (
    <motion.div whileHover={{ scale: 1.01 }} className="w-full">
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
));
FormInput.displayName = 'FormInput';

// Submit Button Component
const SubmitButton = memo(({ isHovered, setIsHovered }) => (
    <motion.button
        type='submit'
        className='group w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-4 px-6 rounded-lg shadow-lg flex items-center justify-center space-x-2 hover:shadow-xl transition-all duration-300'
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
    >
        <span className="text-lg">Send Message</span>
        <motion.div
            animate={isHovered ? { x: 5 } : { x: 0 }}
            transition={{ duration: 0.2 }}
        >
            <Send className='w-5 h-5' />
        </motion.div>
    </motion.button>
));
SubmitButton.displayName = 'SubmitButton';

// Skill Card Component
const SkillCard = memo(({ skill }) => (
    <motion.div
        className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
    >
        <div className="flex items-start space-x-4">
            <div className={`w-12 h-12 rounded-xl bg-${skill.color}-100 flex items-center justify-center`}>
                <skill.icon className={`w-6 h-6 text-${skill.color}-600`} />
            </div>
            <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{skill.category}</h3>
                <div className="flex flex-wrap gap-2 items-start">
                    {skill.skills.map((item, index) => (
                        <span 
                            key={index}
                            className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-${skill.color}-50 text-${skill.color}-700 border border-${skill.color}-100`}
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
));
SkillCard.displayName = 'SkillCard';

// Skills Showcase Component
const SkillsShowcase = memo(() => (
    <div className="grid gap-6">
        {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
        ))}
    </div>
));
SkillsShowcase.displayName = 'SkillsShowcase';

// Contact Info Section
const contactInfo = [
    {
        icon: Mail,
        label: 'Email',
        value: 'zamil.aziz.dev@gmail.com',
        bg: 'purple',
    },
    {
        icon: Phone,
        label: 'Phone',
        value: '+60 14-764 2021',
        bg: 'indigo',
    },
    {
        icon: MapPin,
        label: 'Location',
        value: 'Kuala Lumpur, Malaysia',
        bg: 'purple',
    },
];

// Form Fields Configuration
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

// Main Contact Page Component
const ContactPage = () => {
    const form = useRef();
    const [isHovered, setIsHovered] = useState(false);
    const [toast, setToast] = useState(null);
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
        [isSubmitting]
    );

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
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                                className='space-y-8'
                            >
                                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
                                    <h2 className='text-2xl font-bold text-gray-900 mb-8'>
                                        Technical Expertise
                                    </h2>
                                    <SkillsShowcase />
                                </div>
                            </motion.div>

                            {/* Right Column - Contact Info & Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                                className='space-y-8'
                            >
                                {/* Contact Info Card */}
                                <div className='bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20'>
                                    <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                                        Get in Touch
                                    </h2>
                                    <div className='space-y-6'>
                                        {contactInfo.map((item, index) => (
                                            <ContactInfoItem
                                                key={index}
                                                item={item}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Contact Form */}
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
                                                <FormInput
                                                    key={field.id}
                                                    field={field}
                                                />
                                            ))}
                                        </div>

                                        <motion.div whileHover={{ scale: 1.01 }}>
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

                                        <SubmitButton
                                            isHovered={isHovered}
                                            setIsHovered={setIsHovered}
                                        />
                                    </div>
                                </form>
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
};

export default ContactPage;