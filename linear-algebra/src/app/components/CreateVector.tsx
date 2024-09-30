"use client"
import React, { useState } from 'react';
import NumericInputPad from './NumericInputPad';

interface CreateVectorProps {
    dimension: number;
}

const CreateVector: React.FC<CreateVectorProps> = ({ dimension }) => {
    const [vector, setVector] = useState(new Array(dimension).fill(0));
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleVectorChange = (index: number, value: number) => {
        const newVector = [...vector];
        newVector[index] = value;
        setVector(newVector);
        setActiveIndex(null);
    };

    return (
        <>
        <div className="p-4 flex justify-center  items-center">
            <div className='flex flex-col'>
                <h1 className="text-2xl font-bold mb-4">Vector (Dimension: {dimension})</h1>
                <div className="flex flex-col gap-4 mb-4">
                    {vector.map((num, index) => (
                        <button
                            key={index}
                            className={`p-2 border rounded font-bold text-3xl text-white ${ index === activeIndex ?
                                `bg-zinc-400`
                                : 'bg-yellow-400'
                            }`}
                            onClick={() => setActiveIndex(index)}
                        >
                            {index + 1}: {num}
                        </button>
                    ))}
                </div>
            </div>
                {activeIndex !== null && (
                    <div className="ml-8">
                        <NumericInputPad
                            onValueChange={(value) => handleVectorChange(activeIndex, value)}
                        />
                    </div>
                )}
            </div>
    </>);
}

export default CreateVector;