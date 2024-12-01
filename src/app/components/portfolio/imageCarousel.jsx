import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const ImageCarousel = ({ images, children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const showNextImage = useCallback(() => {
        setCurrentIndex(prevIndex =>
            prevIndex + 1 === images.length ? 0 : prevIndex + 1
        );
    }, [images.length]);

    const showPrevImage = useCallback(() => {
        setCurrentIndex(prevIndex =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    }, [images.length]);

    useEffect(() => {
        const handleKeyDown = e => {
            if (e.key === 'ArrowLeft') showPrevImage();
            if (e.key === 'ArrowRight') showNextImage();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [showPrevImage, showNextImage]);

    useEffect(() => {
        const timer = setInterval(showNextImage, 5000);
        return () => clearInterval(timer);
    }, [showNextImage]);

    return (
        <div className='relative w-full h-full shadow-2xl group'>
            <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10' />

            <AnimatePresence initial={false}>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    className='relative w-full h-full'
                >
                    <Image
                        src={images[currentIndex]}
                        alt={`Project image ${currentIndex + 1}`}
                        fill
                        className='object-contain'
                        sizes='(max-width: 768px) 100vw, 50vw'
                        priority={currentIndex === 0}
                    />
                </motion.div>
            </AnimatePresence>

            <button
                onClick={showPrevImage}
                className='absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 p-2 bg-black/30 hover:bg-black/50 rounded-full'
            >
                <ChevronLeft className='w-8 h-8 text-white' />
            </button>

            <button
                onClick={showNextImage}
                className='absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 p-2 bg-black/30 hover:bg-black/50 rounded-full'
            >
                <ChevronRight className='w-8 h-8 text-white' />
            </button>

            <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20'>
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentIndex
                                ? 'bg-white w-4'
                                : 'bg-white/60 hover:bg-white/80'
                        }`}
                    />
                ))}
            </div>
            {children}
        </div>
    );
};

export default ImageCarousel;
