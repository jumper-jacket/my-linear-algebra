"use client"
import React, { useState } from 'react';
import NumericInputPad from "./components/NumericInputPad";

export default function Home() {
  const [inputValue, setInputValue] = useState<string>('0');

  const  handleValueChange = (newValue: string) => {
    setInputValue(newValue);
  };


  return (
<>
  <h1>数値入力のテスト</h1>
  <h1>入力値: {inputValue}</h1>
  <NumericInputPad onValueChange={handleValueChange}  />
</>
  );
}
