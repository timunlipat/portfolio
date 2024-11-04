import Image from 'next/image';

const Homepage = () => {
    return (
        <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
            {/* Image container */}
            <div className='h-1/2 lg:h-full lg:w-1/2 relative'>
                <Image src='/hero.png' alt='' fill className='object-contain' />
            </div>
            {/* Text container */}
            <div className='h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center'>
                {/* Title */}
                <h1 className='text-4xl md:text-6xl font-bold'>
                    Crafting Digital Experiences, Designing Tomorrow.
                </h1>
                {/* Description */}
                <p className='md:text-xl'>
                    Transforming ideas into impactful digital solutions, we
                    blend creativity and technology to shape experiences that
                    inspire and engage. Join us as we build the digital
                    landscapes of tomorrow, one design at a time.
                </p>
                {/* Buttons */}
                <div className='flex gap-4 w-full'>
                    <button className='p-4 rounded-lg ring-1 ring-black bg-black text-white'>
                        View My Work
                    </button>
                    <button className='p-4 rounded-lg ring-1 ring-black'>
                        Contact Me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
