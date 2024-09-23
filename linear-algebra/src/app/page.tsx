"use client"
import React, { useState } from 'react';

import DimensionInputDisplay from './components/DimensionInputDisplay';
import NumericInputPad from './components/NumericInputPad';
import ToggleSwitch from './components/ToggleSwitch';
import CreateVector from './components/CreateVector';

export default function Home() {
  const [val, setVal] = useState(0);
  const [vectorDimension, setVectorDimention] = useState(0);
  const [rows, setRows] = useState<number>(0);
  const [cols, setCols] = useState<number>(0);
  const [isRight, setIsRight] = useState(false);
  const [isMatrixMode, setIsMatrixMode] = useState(false);
  const [isInputComplete, setInputComplete] = useState(false);

  const  handleValueChange = (newValue: number) => {
    setVal(newValue);
  };

  const handleRowChange = (newValue: number) => {
    setRows(newValue);
  }
  const handleColChange = (newValue: number) => {
    setCols(newValue);
  }


  const handleToggleRowOrColSwitch = () => {
    isRight ? setIsRight(false) : setIsRight(true);
  }

  const handleInputMode = () => {
    isMatrixMode ? setIsMatrixMode(false) : setIsMatrixMode(true);
  }

  const handleVectorDimensionChange = (newValue: number) => {
    setVectorDimention(newValue);
  }

  const handleInputCompletion = () => {
    setInputComplete(true);
  }

  return (
<>
  <h1>数値入力のテスト {val}</h1>
  <h1>行の入力 {rows}</h1>
  <h1>列の入力 {cols}</h1>
  <h1>{isMatrixMode? "matrix" : "vector"}</h1>
  <ToggleSwitch leftLabel="vector" rightLabel="matrix" onToggle={handleInputMode}/>
  {
    isMatrixMode ? (<><ToggleSwitch leftLabel='行' rightLabel='列' onToggle={handleToggleRowOrColSwitch}/>
    <DimensionInputDisplay 
    inputDescription={isRight ? 'Col' : 'Row'}
    onValueChange={isRight ? handleColChange : handleRowChange}
    />
    </>
    )
    : (<DimensionInputDisplay inputDescription='vector' onValueChange={handleVectorDimensionChange}/>)
  }
  
  <CreateVector dimension={vectorDimension}/>
  <NumericInputPad onValueChange={handleValueChange}/>
</>
  );
}
