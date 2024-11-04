import React, { useState } from 'react';
import {
    ChevronRight,
    Check,
    Calendar,
    CreditCard,
    Mail,
    Clock,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

const AboutPage = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        { id: 1, title: 'Select Date & Time', icon: Calendar },
        { id: 2, title: 'Personal Details', icon: Mail },
        { id: 3, title: 'Review Booking', icon: Clock },
        { id: 4, title: 'Payment', icon: CreditCard },
    ];

    const renderStepContent = step => {
        switch (step) {
            case 1:
                return (
                    <div className='space-y-4'>
                        <h3 className='text-lg font-semibold'>
                            Select Your Preferred Date & Time
                        </h3>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div className='space-y-2'>
                                <label className='block text-sm font-medium'>
                                    Date
                                </label>
                                <input
                                    type='date'
                                    className='w-full p-2 border rounded-md'
                                />
                            </div>
                            <div className='space-y-2'>
                                <label className='block text-sm font-medium'>
                                    Time
                                </label>
                                <select className='w-full p-2 border rounded-md'>
                                    <option>09:00 AM</option>
                                    <option>10:00 AM</option>
                                    <option>11:00 AM</option>
                                    <option>12:00 PM</option>
                                </select>
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className='space-y-4'>
                        <h3 className='text-lg font-semibold'>
                            Enter Your Details
                        </h3>
                        <div className='space-y-3'>
                            <div>
                                <label className='block text-sm font-medium'>
                                    Full Name
                                </label>
                                <input
                                    type='text'
                                    className='w-full p-2 border rounded-md mt-1'
                                    placeholder='John Doe'
                                />
                            </div>
                            <div>
                                <label className='block text-sm font-medium'>
                                    Email
                                </label>
                                <input
                                    type='email'
                                    className='w-full p-2 border rounded-md mt-1'
                                    placeholder='john@example.com'
                                />
                            </div>
                            <div>
                                <label className='block text-sm font-medium'>
                                    Phone
                                </label>
                                <input
                                    type='tel'
                                    className='w-full p-2 border rounded-md mt-1'
                                    placeholder='+1 (555) 000-0000'
                                />
                            </div>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className='space-y-4'>
                        <h3 className='text-lg font-semibold'>
                            Review Your Booking
                        </h3>
                        <Card>
                            <CardContent className='p-4 space-y-3'>
                                <div className='flex justify-between'>
                                    <span className='text-gray-600'>Date:</span>
                                    <span className='font-medium'>
                                        October 30, 2024
                                    </span>
                                </div>
                                <div className='flex justify-between'>
                                    <span className='text-gray-600'>Time:</span>
                                    <span className='font-medium'>
                                        10:00 AM
                                    </span>
                                </div>
                                <div className='flex justify-between'>
                                    <span className='text-gray-600'>
                                        Duration:
                                    </span>
                                    <span className='font-medium'>1 hour</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span className='text-gray-600'>
                                        Price:
                                    </span>
                                    <span className='font-medium'>$99.00</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                );
            case 4:
                return (
                    <div className='space-y-4'>
                        <h3 className='text-lg font-semibold'>
                            Payment Details
                        </h3>
                        <div className='space-y-3'>
                            <div>
                                <label className='block text-sm font-medium'>
                                    Card Number
                                </label>
                                <input
                                    type='text'
                                    className='w-full p-2 border rounded-md mt-1'
                                    placeholder='**** **** **** ****'
                                />
                            </div>
                            <div className='grid grid-cols-2 gap-4'>
                                <div>
                                    <label className='block text-sm font-medium'>
                                        Expiry Date
                                    </label>
                                    <input
                                        type='text'
                                        className='w-full p-2 border rounded-md mt-1'
                                        placeholder='MM/YY'
                                    />
                                </div>
                                <div>
                                    <label className='block text-sm font-medium'>
                                        CVV
                                    </label>
                                    <input
                                        type='text'
                                        className='w-full p-2 border rounded-md mt-1'
                                        placeholder='***'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className='max-w-3xl mx-auto p-6'>
            <h2 className='text-2xl font-bold mb-6'>Complete Your Booking</h2>

            {/* Progress Steps */}
            <div className='mb-8'>
                <div className='flex items-center justify-between mb-4'>
                    {steps.map(step => {
                        const StepIcon = step.icon;
                        return (
                            <div
                                key={step.id}
                                className='flex flex-col items-center'
                            >
                                <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2
                    ${
                        currentStep === step.id
                            ? 'border-blue-500 bg-blue-50'
                            : currentStep > step.id
                            ? 'border-green-500 bg-green-50'
                            : 'border-gray-300'
                    }
                  `}
                                >
                                    {currentStep > step.id ? (
                                        <Check className='w-5 h-5 text-green-500' />
                                    ) : (
                                        <StepIcon
                                            className={`w-5 h-5 ${
                                                currentStep === step.id
                                                    ? 'text-blue-500'
                                                    : 'text-gray-400'
                                            }`}
                                        />
                                    )}
                                </div>
                                <span
                                    className={`text-sm mt-2 ${
                                        currentStep === step.id
                                            ? 'text-blue-500 font-medium'
                                            : 'text-gray-500'
                                    }`}
                                >
                                    {step.title}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Step Content */}
            <div className='bg-white p-6 rounded-lg border'>
                {renderStepContent(currentStep)}

                {/* Navigation Buttons */}
                <div className='flex justify-between mt-8'>
                    <button
                        onClick={() =>
                            setCurrentStep(prev => Math.max(1, prev - 1))
                        }
                        disabled={currentStep === 1}
                        className='px-4 py-2 text-gray-600 border rounded-md disabled:opacity-50'
                    >
                        Back
                    </button>
                    <button
                        onClick={() => {
                            if (currentStep === steps.length) {
                                // Handle booking completion
                                return;
                            }
                            setCurrentStep(prev =>
                                Math.min(steps.length, prev + 1)
                            );
                        }}
                        className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'
                    >
                        {currentStep === steps.length
                            ? 'Complete Booking'
                            : 'Continue'}
                    </button>
                </div>
            </div>

            {/* Booking Summary (Fixed Position) */}
            <div className='fixed bottom-0 left-0 right-0 bg-white border-t p-4 md:hidden'>
                <div className='max-w-3xl mx-auto flex justify-between items-center'>
                    <div>
                        <span className='block text-sm text-gray-600'>
                            Total Amount
                        </span>
                        <span className='text-lg font-bold'>$99.00</span>
                    </div>
                    <button className='px-4 py-2 bg-blue-500 text-white rounded-md'>
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
