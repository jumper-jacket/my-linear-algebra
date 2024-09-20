"use client"
import React, { useState } from 'react';

import DimensionInputDisplay from './components/DimensionInputDisplay';
import NumericInputPad from './components/NumericInputPad';
import ToggleSwitch from './components/ToggleSwitch';

export default function Home() {
  const [val, setVal] = useState(0);
  const [rows, setRows] = useState<number>(0);
  const [cols, setCols] = useState<number>(0);
  const [isRight, setIsRight] = useState(false);

  const  handleValueChange = (newValue: number) => {
    setVal(newValue);
  };

  const handleRowChange = (newValue: number) => {
    setRows(newValue);
  }
  const handleColChange = (newValue: number) => {
    setCols(newValue);
  }


  const handleToggleSwitch = () => {
    isRight ? setIsRight(false) : setIsRight(true);
  }


  return (
<>
  <h1>数値入力のテスト {val}</h1>
  <h1>行の入力 {rows}</h1>
  <h1>列の入力 {cols}</h1>
  <ToggleSwitch leftLabel='行' rightLabel='列' onToggle={handleToggleSwitch}/>
  <DimensionInputDisplay 
  inputDescription={isRight ? 'Col' : 'Row'}
  onValueChange={isRight ? handleColChange : handleRowChange}
  />
  <NumericInputPad onValueChange={handleValueChange}/>
</>
  );
}
