"use client"
import React, { useState } from 'react';

import NumericInputPad from "./components/NumericInputPad";
import NaturalNumPad from './components/NaturalNumPad';

export default function Home() {
  const [val, setVal] = useState(0);
  const [rows, setRows] = useState<number>(0);
  const [cols, setCols] = useState<number>(0);

  const  handleValueChange = (newValue: number) => {
    setVal(newValue);
  };

  const handleRowChange = (newValue: number) => {
    setRows(newValue);
  }


  return (
<>
  <h1>数値入力のテスト {val}</h1>
  <h1>行の入力 {rows}</h1>
  <h1>列の入力 {cols}</h1>
  <NumericInputPad onValueChange={handleValueChange}  />
  <NaturalNumPad onValueChange={handleRowChange}/>
</>
  );
}
