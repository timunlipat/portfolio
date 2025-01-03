'use client';
import { motion } from 'framer-motion';
import { skills } from '../../data/contact';

const SkillCard = ({ skill }) => (
    <motion.div
        className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 1 }}
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
);

export const SkillsShowcase = () => (
    <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className='space-y-8'
    >
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
            <h2 className='text-2xl font-bold text-gray-900 mb-8'>
                Technical Expertise
            </h2>
            <div className="grid gap-6">
                {skills.map((skill, index) => (
                    <SkillCard key={index} skill={skill} />
                ))}
            </div>
        </div>
    </motion.div>
);