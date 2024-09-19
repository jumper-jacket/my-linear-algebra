"use clint"
import React, { useState } from 'react';

import NaturalNumPad from './NaturalNumPad';

interface DimensionInputDisplayProps {
  inputDescription: string;
  onValueChange: (value: number) => void;
}

const DimensionInputDisplay:React.FC<DimensionInputDisplayProps> = (
  {inputDescription, onValueChange })  => {

  return(<>
  <h1 className="bg-teal-400 text-3xl text-center text-white">
    {inputDescription}
  </h1>
  <NaturalNumPad onValueChange={onValueChange}/>
  </>);
}

export default DimensionInputDisplay;