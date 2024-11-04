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
    BedDouble,
    Bath,
    Wifi,
    Car as CarIcon,
    Fuel,
    Gauge,
    Trophy,
    Music,
    UtensilsCrossed as FoodIcon,
    Wine,
} from 'lucide-react';

const BookingForm = () => {
    const [category, setCategory] = useState('houses');
    const [guests, setGuests] = useState('');
    const [showGuestDropdown, setShowGuestDropdown] = useState(false);
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [showFilters, setShowFilters] = useState(false);

  const categories = {
        houses: {
            icon: Home,
            label: 'Houses',
            fields: [
                {
                    icon: BedDouble,
                    label: 'Bedrooms',
                    options: ['Any', '1', '2', '3', '4+'],
                },
                {
                    icon: Bath,
                    label: 'Bathrooms',
                    options: ['Any', '1', '2', '3+'],
                },
                {
                    icon: Wifi,
                    label: 'Amenities',
                    options: ['WiFi', 'Kitchen', 'Pool', 'Parking'],
                },
            ],
        },
        cars: {
            icon: Car,
            label: 'Cars',
            fields: [
                {
                    icon: CarIcon,
                    label: 'Type',
                    options: ['Any', 'Sedan', 'SUV', 'Sports', 'Van'],
                },
                {
                    icon: Fuel,
                    label: 'Fuel',
                    options: ['Any', 'Petrol', 'Diesel', 'Electric'],
                },
                {
                    icon: Gauge,
                    label: 'Transmission',
                    options: ['Any', 'Auto', 'Manual'],
                },
            ],
        },
        stadiums: {
            icon: Building2,
            label: 'Stadiums',
            fields: [
                {
                    icon: Trophy,
                    label: 'Event Type',
                    options: ['Any', 'Sports', 'Concert', 'Festival'],
                },
                {
                    icon: Users,
                    label: 'Seating',
                    options: ['Any', 'Standard', 'VIP', 'Box'],
                },
                {
                    icon: Music,
                    label: 'Facilities',
                    options: ['Parking', 'Food Court', 'VIP Lounge'],
                },
            ],
        },
        restaurants: {
            icon: UtensilsCrossed,
            label: 'Restaurants',
            fields: [
                {
                    icon: FoodIcon,
                    label: 'Cuisine',
                    options: ['Any', 'Italian', 'Asian', 'American'],
                },
                {
                    icon: Users,
                    label: 'Seating',
                    options: ['Indoor', 'Outdoor', 'Private Room'],
                },
                {
                    icon: Wine,
                    label: 'Features',
                    options: ['Bar', 'Live Music', 'View'],
                },
            ],
        },
    };

    const formatPrice = value => `$${value}`;

    return (
        <div className='w-full max-w-3xl mx-auto bg-white rounded-lg shadow-lg'>
            {/* Header */}
            <div className='p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg'>
                <div className='flex space-x-6 mb-4 border-b pb-4'>
                    {Object.entries(categories).map(
                        ([key, { icon: Icon, label }]) => (
                            <button
                                key={key}
                                onClick={() => setCategory(key)}
                                className={`flex flex-col items-center space-y-2 py-2 px-4 transition-colors relative
                ${
                    category === key
                        ? 'text-blue-600'
                        : 'text-gray-500 hover:text-gray-700'
                }`}
                            >
                                <Icon size={24} />
                                <span className='text-sm font-medium'>
                                    {label}
                                </span>
                                {category === key && (
                                    <div className='absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full' />
                                )}
                            </button>
                        )
                    )}
                </div>
                <h2 className='text-2xl font-bold text-gray-800'>
                    Book your perfect {categories[category].label.toLowerCase()}
                </h2>
            </div>

            {/* Form Content */}
            <div className='p-6 space-y-6'>
                {/* Main Search Fields */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='space-y-2'>
                        <label className='text-sm font-medium text-gray-700'>
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

                    <div className='space-y-2 relative'>
                        <label className='text-sm font-medium text-gray-700'>
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

                {/* Dates/Time Section */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='space-y-2'>
                        <label className='text-sm font-medium text-gray-700'>
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

                    {category === 'restaurants' ? (
                        <div className='space-y-2'>
                            <label className='text-sm font-medium text-gray-700'>
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
                            <label className='text-sm font-medium text-gray-700'>
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

                {/* Price Range */}
                <div className='space-y-2'>
                    <div className='flex justify-between'>
                        <label className='text-sm font-medium text-gray-700'>
                            Price Range
                        </label>
                        <span className='text-sm text-gray-500'>
                            {formatPrice(priceRange[0])} -{' '}
                            {formatPrice(priceRange[1])}
                        </span>
                    </div>
                    <div className='flex space-x-4'>
                        <input
                            type='range'
                            min='0'
                            max='1000'
                            value={priceRange[0]}
                            onChange={e =>
                                setPriceRange([
                                    parseInt(e.target.value),
                                    priceRange[1],
                                ])
                            }
                            className='w-full'
                        />
                        <input
                            type='range'
                            min='0'
                            max='1000'
                            value={priceRange[1]}
                            onChange={e =>
                                setPriceRange([
                                    priceRange[0],
                                    parseInt(e.target.value),
                                ])
                            }
                            className='w-full'
                        />
                    </div>
                </div>

                {/* Category-specific Fields */}
                <div className='space-y-4'>
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className='text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center'
                    >
                        {showFilters ? 'Hide' : 'Show'} additional filters
                    </button>

          {showFilters && (
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg'>
                            {categories[category].fields.map((field, index) => (
                                <div key={index} className='space-y-2'>
                                    <label className='text-sm font-medium text-gray-700 flex items-center'>
                                        <field.icon className='h-4 w-4 mr-2' />
                                        {field.label}
                                    </label>
                                    <select className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'>
                                        {field.options.map((option, idx) => (
                                            <option key={idx}>{option}</option>
                                        ))}
                                    </select>
                                </div>
                            ))}
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
    );
};

export default BookingForm;
