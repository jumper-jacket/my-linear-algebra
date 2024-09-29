"use clint"
import React from 'react';

import NaturalNumPad from './NaturalNumPad';

interface DimensionInputDisplayProps {
  inputDescription: string;
  onValueChange: (value: number) => void;
}

const DimensionInputDisplay:React.FC<DimensionInputDisplayProps> = (
  {inputDescription, onValueChange })  => {

  return(
  <section className='w-fit max-w-full mx-auto border-black border-4 rounded-lg'>
  <h1 className="bg-yellow-400 text-3xl font-semibold text-center text-white">
    {inputDescription}
  </h1>
  <NaturalNumPad onValueChange={onValueChange}/>
  </section>);
}

export default DimensionInputDisplay;