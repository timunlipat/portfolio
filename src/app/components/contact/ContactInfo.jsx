'use client';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

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

const ContactInfoItem = ({ item }) => (
    <motion.div
        className='flex items-center space-x-4 hover:translate-x-2 transition-transform duration-300'
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 1 }}
    >
        <div className={`bg-${item.bg}-100 p-4 rounded-full shadow-inner`}>
            <item.icon className={`w-6 h-6 text-${item.bg}-600`} />
        </div>
        <div>
            <h3 className='font-medium text-gray-900'>{item.label}</h3>
            <p className={`text-gray-600 hover:text-${item.bg}-600 transition-colors duration-300`}>
                {item.value}
            </p>
        </div>
    </motion.div>
);

export const ContactInfo = () => (
    <div className='bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20'>
        <h2 className='text-2xl font-bold text-gray-900 mb-6'>
            Get in Touch
        </h2>
        <div className='space-y-6'>
            {contactInfo.map((item, index) => (
                <ContactInfoItem key={index} item={item} />
            ))}
        </div>
    </div>
);