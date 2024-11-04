import React, { useState } from 'react';
import {
    Calendar,
    MapPin,
    Users,
    Clock,
    Search,
    Home,
    Car,
    Building2,
    UtensilsCrossed,
} from 'lucide-react';

const BookingForm = () => {
    const [category, setCategory] = useState('houses');
    const [guests, setGuests] = useState('');
    const [showGuestDropdown, setShowGuestDropdown] = useState(false);

    const categories = {
        houses: { icon: Home, label: 'Houses' },
        cars: { icon: Car, label: 'Cars' },
        stadiums: { icon: Building2, label: 'Stadiums' },
        restaurants: { icon: UtensilsCrossed, label: 'Restaurants' },
    };

    const CategoryIcon = categories[category].icon;

    return (
        <div className='w-full max-w-3xl mx-auto bg-white rounded-lg shadow-lg'>
            {/* Header */}
            <div className='p-6'>
                <div className='flex space-x-6 mb-4 border-b pb-4'>
                    {Object.entries(categories).map(
                        ([key, { icon: Icon, label }]) => (
                            <button
                                key={key}
                                onClick={() => setCategory(key)}
                                className={`flex flex-col items-center space-y-2 py-2 px-4 transition-colors ${
                                    category === key
                                        ? 'text-blue-600 border-b-2 border-blue-600'
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                <Icon size={24} />
                                <span className='text-sm font-medium'>
                                    {label}
                                </span>
                            </button>
                        )
                    )}
                </div>
                <h2 className='text-2xl font-bold'>
                    Book your perfect {categories[category].label.toLowerCase()}
                </h2>
            </div>

            {/* Form Content */}
            <div className='p-6 pt-0'>
                <div className='space-y-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {/* Location Field */}
                        <div className='space-y-2'>
                            <label className='text-sm font-medium'>
                                Location
                            </label>
                            <div className='relative'>
                                <MapPin className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                                <input
                                    className='w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    placeholder={`Where do you want to book a ${categories[
                                        category
                                    ].label.toLowerCase()}?`}
                                />
                            </div>
                        </div>

                        {/* Guests Field */}
                        <div className='space-y-2 relative'>
                            <label className='text-sm font-medium'>
                                Number of guests
                            </label>
                            <div className='relative'>
                                <Users className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                                <button
                                    onClick={() =>
                                        setShowGuestDropdown(!showGuestDropdown)
                                    }
                                    className='w-full pl-10 pr-4 py-2 border rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white'
                                >
                                    {guests || 'Select guests'}
                                </button>
                                {showGuestDropdown && (
                                    <div className='absolute mt-1 w-full bg-white border rounded-lg shadow-lg z-10'>
                                        {[1, 2, 3, 4, 5, 6].map(num => (
                                            <button
                                                key={num}
                                                className='w-full px-4 py-2 text-left hover:bg-gray-100'
                                                onClick={() => {
                                                    setGuests(
                                                        `${num} ${
                                                            num === 1
                                                                ? 'Guest'
                                                                : 'Guests'
                                                        }`
                                                    );
                                                    setShowGuestDropdown(false);
                                                }}
                                            >
                                                {num}{' '}
                                                {num === 1 ? 'Guest' : 'Guests'}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {/* Check-in Field */}
                        <div className='space-y-2'>
                            <label className='text-sm font-medium'>
                                Check-in
                            </label>
                            <div className='relative'>
                                <Calendar className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                                <input
                                    type='date'
                                    className='w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                                />
                            </div>
                        </div>

                        {/* Check-out/Time Field */}
                        {category === 'restaurants' ? (
                            <div className='space-y-2'>
                                <label className='text-sm font-medium'>
                                    Time
                                </label>
                                <div className='relative'>
                                    <Clock className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                                    <input
                                        type='time'
                                        className='w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className='space-y-2'>
                                <label className='text-sm font-medium'>
                                    Check-out
                                </label>
                                <div className='relative'>
                                    <Calendar className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                                    <input
                                        type='date'
                                        className='w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Search Button */}
                    <button className='w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg flex items-center justify-center transition-colors'>
                        <Search className='mr-2 h-5 w-5' />
                        Search {categories[category].label}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;
