import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const Toast = ({ message, type, onClose }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className={`fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 ${
            type === 'success' ? 'bg-green-500' : 'bg-red-500'
        } text-white`}
    >
        <span>{message}</span>
        <button onClick={onClose} className='p-1 hover:bg-white/20 rounded'>
            <X size={16} />
        </button>
    </motion.div>
);

export default Toast;
