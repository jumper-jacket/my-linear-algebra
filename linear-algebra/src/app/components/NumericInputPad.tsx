"use client"
import React, { useState } from 'react';

interface NumericInputPadProps {
  onValueChange: (value: string) => void;
  initialValue?: string;
  maxLength?: number;
}

const NumericInputPad: React.FC<NumericInputPadProps> = ({
  onValueChange,
  initialValue = '0',
  maxLength = 10
}) => {
  const [value, setValue] = useState(initialValue);

  const handleInput = (input: string) => {
    if (value.length >= maxLength) return;

    let newValue = value;
    if (value === '0' && input !== '.') {
      newValue = input;
    } else if (input === '.' && !value.includes('.')) {
      newValue += input;
    } else if (input !== '.') {
      newValue += input;
    }

    setValue(newValue);
    onValueChange(newValue);
  };

  const handleDelete = () => {
    const newValue = value.length > 1 ? value.slice(0, -1) : '0';
    setValue(newValue);
    onValueChange(newValue);
  };

  const handleClear = () => {
    setValue('0');
    onValueChange('0');
  };

  return (
    <div className="max-w-xs mx-auto bg-gray-100 rounded-lg p-4">
      <div className="mb-4 p-2 bg-white rounded text-right text-2xl">
        {value}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'].map((btn) => (
          <button
            key={btn}
            onClick={() => handleInput(btn)}
            className="p-3 text-xl bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            {btn}
          </button>
        ))}
        <button
          onClick={handleDelete}
          className="p-3 text-xl bg-red-200 rounded-lg hover:bg-red-300"
        >
          Del
        </button>
      </div>
      <button
        onClick={handleClear}
        className="w-full mt-2 p-3 text-xl bg-blue-200 rounded-lg hover:bg-blue-300"
      >
        Clear
      </button>
    </div>
  );
};

export default NumericInputPad;