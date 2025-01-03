'use client';
import { motion } from 'framer-motion';
import { skills } from '../../data/contact';

const SkillCard = ({ skill, index }) => {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.1, // Stagger effect
                ease: "easeOut"
            }
        }
    };

    const iconVariants = {
        hover: {
            scale: 1.2,
            rotate: 5,
            transition: { duration: 0.3 }
        }
    };

    const skillBadgeVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { 
                duration: 0.3,
                delay: index * 0.1 + 0.2 
            }
        },
        hover: {
            scale: 1.05,
            transition: { duration: 0.2 }
        }
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
        >
            <div className="flex items-start space-x-4">
                <motion.div 
                    className={`w-14 h-14 rounded-xl bg-${skill.color}-100 flex items-center justify-center transform-gpu`}
                    whileHover="hover"
                    variants={iconVariants}
                >
                    <skill.icon className={`w-7 h-7 text-${skill.color}-600`} />
                </motion.div>
                <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">
                        {skill.category}
                    </h3>
                    <div className="flex flex-wrap gap-2 items-start">
                        {skill.skills.map((item, idx) => (
                            <motion.span 
                                key={idx}
                                variants={skillBadgeVariants}
                                whileHover="hover"
                                className={`
                                    inline-flex items-center px-3 py-1.5 rounded-full 
                                    text-sm font-medium bg-${skill.color}-50/80 
                                    text-${skill.color}-700 border border-${skill.color}-200/50
                                    shadow-sm hover:shadow backdrop-blur-sm
                                    transition-all duration-300
                                `}
                            >
                                {item}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export const SkillsShowcase = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-8"
        >
            <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold text-gray-900 mb-8 tracking-tight"
                >
                    Technical Expertise
                </motion.h2>
                <div className="grid gap-6">
                    {skills.map((skill, index) => (
                        <SkillCard 
                            key={index} 
                            skill={skill} 
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};