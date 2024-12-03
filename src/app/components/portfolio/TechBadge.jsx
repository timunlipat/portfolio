import { motion } from 'framer-motion';

const TechBadge = ({ tech, index }) => {
    const techBadgeVariants = {
        initial: { opacity: 0, y: 20 },
        animate: index => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                delay: index * 0.1,
            },
        }),
    };

    return (
        <motion.div
            variants={techBadgeVariants}
            initial='initial'
            whileInView='animate'
            custom={index}
            className='group relative flex-shrink-0'
        >
            <div className='absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity dark:from-purple-400 dark:to-indigo-400' />
            <div className='relative px-1 sm:px-2 py-0.5 sm:py-1 bg-white dark:bg-gray-800 rounded-full text-[10px] sm:text-xs font-medium text-gray-800 dark:text-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.06)] transform group-hover:-translate-y-1 transition-transform'>
                {tech}
            </div>
        </motion.div>
    );
};

export default TechBadge;
