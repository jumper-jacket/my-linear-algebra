"use clint"
import React, { useState } from 'react';

import NaturalNumPad from './NaturalNumPad';

interface DimensionInputDisplayProps {
  inputDescription: string;
  onValueChange: (value: number) => void;
}

const DimensionInputDisplay:React.FC<DimensionInputDisplayProps> = (
  {inputDescription, onValueChange })  => {

  return(
  <section className='w-fit max-w-full mx-auto border-black border-4 rounded-lg'>
  <h1 className="bg-teal-400 text-3xl text-center text-white">
    {inputDescription}
  </h1>
  <NaturalNumPad onValueChange={onValueChange}/>
  </section>);
}

export default DimensionInputDisplay;