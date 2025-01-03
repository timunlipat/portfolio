import { Code, Layout, Database, Settings } from 'lucide-react';

export const features = [
    'Personalized Solutions Tailored to Your Needs',
    'Flexible Scheduling to Meet Your Deadlines',
    'Clear and Transparent Communication',
    'Commitment to Quality and Client Satisfaction',
];

export const skills = [
    {
        category: 'Frontend Development',
        icon: Layout,
        skills: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'Framer Motion'],
        color: 'purple'
    },
    {
        category: 'Backend Development',
        icon: Database,
        skills: ['Node.js', 'Express.js', 'Firebase', 'RESTful APIs', 'WebSockets'],
        color: 'indigo'
    },
    {
        category: 'Additional Technologies',
        icon: Code,
        skills: ['Git', 'Vercel', 'Netlify', 'Testing (Jest/React Testing Library)', 'Postman'],
        color: 'purple'
    },
    {
        category: 'Tools & Practices',
        icon: Settings,
        skills: ['Responsive Design', 'Version Control', 'State Management (Redux/Zustand)', 'Performance Optimization', 'Basic SEO'],
        color: 'indigo'
    }
];
