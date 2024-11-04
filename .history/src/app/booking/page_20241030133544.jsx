'use client';

import { useState } from 'react';
import {
    MapPin,
    Users,
    Clock,
    Search,
    Building,
    Utensils,
    Bed as BedIcon,
    Wifi,
    Car,
    Fuel,
    Medal,
    Wine,
    Calendar,
    Camera,
    Star,
    Settings,
    Palette,
} from 'lucide-react';

const Booking = () => {
    const [category, setCategory] = useState('events');
    const [guests, setGuests] = useState('');
    const [showGuestDropdown, setShowGuestDropdown] = useState(false);
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [showFilters, setShowFilters] = useState(false);

    const categories = {
        events: {
            icon: Calendar,
            label: 'Events',
            fields: [
                {
                    icon: Medal,
                    label: 'Event Type',
                    options: [
                        'Any',
                        'Concert',
                        'Festival',
                        'Conference',
                        'Workshop',
                    ],
                },
                {
                    icon: Clock,
                    label: 'Duration',
                    options: ['Any', 'Half-Day', 'Full-Day', 'Multi-Day'],
                },
                {
                    icon: Users,
                    label: 'Audience',
                    options: ['Public', 'Private', 'VIP'],
                },
            ],
        },
        places: {
            icon: MapPin,
            label: 'Places',
            fields: [
                {
                    icon: Calendar,
                    label: 'Type',
                    options: ['Any', 'Beach', 'Mountain', 'City', 'Resort'],
                },
                {
                    icon: Calendar,
                    label: 'Availability',
                    options: [
                        'Any',
                        'Weekend Only',
                        'Weekdays Only',
                        'All Days',
                    ],
                },
                {
                    icon: Camera,
                    label: 'Scenic Features',
                    options: ['Lake View', 'Forest', 'Historical'],
                },
            ],
        },
        restaurants: {
            icon: Utensils,
            label: 'Restaurants',
            fields: [
                {
                    icon: Utensils,
                    label: 'Cuisine',
                    options: ['Any', 'Italian', 'Asian', 'American', 'French'],
                },
                {
                    icon: Users,
                    label: 'Seating',
                    options: ['Indoor', 'Outdoor', 'Private Room'],
                },
                {
                    icon: Wine,
                    label: 'Features',
                    options: ['Bar', 'Live Music', 'Rooftop', 'View'],
                },
            ],
        },
        stadiums: {
            icon: Building,
            label: 'Stadiums',
            fields: [
                {
                    icon: Medal,
                    label: 'Event Type',
                    options: ['Any', 'Sports', 'Concert', 'Exhibition'],
                },
                {
                    icon: Users,
                    label: 'Seating',
                    options: ['Standard', 'VIP', 'Box', 'Standing'],
                },
                {
                    icon: Star,
                    label: 'Special Facilities',
                    options: [
                        'Parking',
                        'Food Court',
                        'VIP Lounge',
                        'Merchandise',
                    ],
                },
            ],
        },
        cars: {
            icon: Car,
            label: 'Cars',
            fields: [
                {
                    icon: Car,
                    label: 'Type',
                    options: ['Any', 'Sedan', 'SUV', 'Convertible', 'Van'],
                },
                {
                    icon: Fuel,
                    label: 'Fuel',
                    options: ['Petrol', 'Diesel', 'Electric', 'Hybrid'],
                },
                {
                    icon: Settings,
                    label: 'Transmission',
                    options: ['Automatic', 'Manual', 'Semi-Auto'],
                },
                {
                    icon: Palette,
                    label: 'Color Options',
                    options: ['Any', 'Black', 'White', 'Red', 'Blue'],
                },
            ],
        },
        hotels: {
            icon: BedIcon,
            label: 'Hotels',
            fields: [
                {
                    icon: Star,
                    label: 'Star Rating',
                    options: ['Any', '3 Stars', '4 Stars', '5 Stars'],
                },
                {
                    icon: BedIcon,
                    label: 'Room Type',
                    options: ['Standard', 'Suite', 'Family Room', 'Deluxe'],
                },
                {
                    icon: Wifi,
                    label: 'Amenities',
                    options: ['WiFi', 'Pool', 'Parking', 'Gym'],
                },
            ],
        },
    };

    const formatPrice = value => `RM${value}`;

    return (
        <div className='w-full max-w-3xl mx-auto bg-white rounded-lg shadow-lg'>
            {/* Header */}
            <div className='p-6 bg-yellow-200'>
                <div className='flex space-x-6 mb-4 border-b pb-4'>
                    {Object.entries(categories).map(
                        ([key, { icon: Icon, label }]) => (
                            <button
                                key={key}
                                onClick={() => setCategory(key)}
                                className={`flex flex-col items-center space-y-2 py-2 px-4 transition-colors relative ${
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
                            className='w-full appearance-none h-2 bg-yellow-200 rounded-lg cursor-pointer accent-yellow-500'
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
                            className='w-full appearance-none h-2 bg-yellow-200 rounded-lg cursor-pointer accent-yellow-500'
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
                <button className='w-full bg-yellow-300 hover:bg-yellow-500 text-black py-4 rounded-lg flex items-center justify-center transition-colors'>
                    <Search className='mr-2 h-5 w-5' />
                    Search {categories[category].label}
                </button>
            </div>
        </div>
    );
};

export default Booking;
