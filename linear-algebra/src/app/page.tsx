"use client"
import React, { useState } from 'react';
import NumericInputPad from "./components/NumericInputPad";

export default function Home() {
  const [val, setVal] = useState(0);
  const [rows, setRows] = useState<string>("0");
  const [cols, setCols] = useState<string>("0");

  const  handleValueChange = (newValue: number) => {
    setVal(newValue);
  };


  return (
<>
  <h1>数値入力のテスト {val}</h1>
  <h1>行の入力 {rows? rows:null}</h1>
  <h1>列の入力 {cols? cols:null}</h1>
  <NumericInputPad onValueChange={handleValueChange}  />
</>
  );
}
