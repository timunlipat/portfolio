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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

const BookingForm = () => {
    const [category, setCategory] = useState('houses');

    const categories = {
        houses: { icon: Home, label: 'Houses' },
        cars: { icon: Car, label: 'Cars' },
        stadiums: { icon: Building2, label: 'Stadiums' },
        restaurants: { icon: UtensilsCrossed, label: 'Restaurants' },
    };

    const CategoryIcon = categories[category].icon;

    return (
        <Card className='w-full max-w-3xl mx-auto bg-white shadow-lg'>
            <CardHeader className='pb-4'>
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
                <CardTitle className='text-2xl font-bold'>
                    Book your perfect {categories[category].label.toLowerCase()}
                </CardTitle>
            </CardHeader>

            <CardContent>
                <div className='space-y-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='space-y-2'>
                            <label className='text-sm font-medium'>
                                Location
                            </label>
                            <div className='relative'>
                                <MapPin className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                                <Input
                                    className='pl-10'
                                    placeholder={`Where do you want to book a ${categories[
                                        category
                                    ].label.toLowerCase()}?`}
                                />
                            </div>
                        </div>

                        <div className='space-y-2'>
                            <label className='text-sm font-medium'>
                                Number of guests
                            </label>
                            <div className='relative'>
                                <Users className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                                <Select>
                                    <SelectTrigger className='pl-10'>
                                        <SelectValue placeholder='Select guests' />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {[1, 2, 3, 4, 5, 6].map(num => (
                                            <SelectItem
                                                key={num}
                                                value={num.toString()}
                                            >
                                                {num}{' '}
                                                {num === 1 ? 'Guest' : 'Guests'}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='space-y-2'>
                            <label className='text-sm font-medium'>
                                Check-in
                            </label>
                            <div className='relative'>
                                <Calendar className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                                <Input type='date' className='pl-10' />
                            </div>
                        </div>

                        {category === 'restaurants' ? (
                            <div className='space-y-2'>
                                <label className='text-sm font-medium'>
                                    Time
                                </label>
                                <div className='relative'>
                                    <Clock className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                                    <Input type='time' className='pl-10' />
                                </div>
                            </div>
                        ) : (
                            <div className='space-y-2'>
                                <label className='text-sm font-medium'>
                                    Check-out
                                </label>
                                <div className='relative'>
                                    <Calendar className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                                    <Input type='date' className='pl-10' />
                                </div>
                            </div>
                        )}
                    </div>

                    <Button className='w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-lg'>
                        <Search className='mr-2 h-5 w-5' />
                        Search {categories[category].label}
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default BookingForm;
