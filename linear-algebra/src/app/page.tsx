"use client"
import React, { useState, useCallback } from 'react';

import DimensionInputDisplay from './components/DimensionInputDisplay';
import NumericInputPad from './components/NumericInputPad';
import ToggleSwitch from './components/ToggleSwitch';
import CreateVector from './components/CreateVector';

enum Mode  {
  Vector = "Vector",
  Matrix = "Matrix"
};


export default function Home() {
  const [vectorDimension, setVectorDimension] = useState(0);
  const [rows, setRows] = useState<number>(0);
  const [cols, setCols] = useState<number>(0);
  const [isRight, setIsRight] = useState(false);
  const [isInputComplete, setInputComplete] = useState(false);
  const [mode, setMode] = useState<Mode>(Mode.Vector);

  const handleMode = () => {
    setMode(currentMode => currentMode === Mode.Vector ? Mode.Matrix : Mode.Vector);
  }
  const handleRowChange = (newValue: number) => {
    setRows(newValue);
  }

  const handleColChange = (newValue: number) => {
    setCols(newValue);
  }

  const handleToggleRowOrColSwitch = () => {
    setIsRight(prev => !prev);
  }

  const handleVectorDimensionChange = (newValue: number) => {
    setVectorDimension(newValue);
    setInputComplete(true);
  };

  return (
    <>
      <ToggleSwitch leftLabel="vector" rightLabel="matrix" onToggle={handleMode}/>
      {
        mode === Mode.Matrix && (
          <>
            <ToggleSwitch leftLabel='行' rightLabel='列' onToggle={handleToggleRowOrColSwitch}/>
            <DimensionInputDisplay
              inputDescription={isRight ? 'Col' : 'Row'}
              onValueChange={isRight ? handleColChange : handleRowChange}
            />
          </>
        )
      }
      {
        mode === Mode.Vector && (
          <>
          {
            !isInputComplete ? (
            <DimensionInputDisplay
              inputDescription='vector'
              onValueChange={handleVectorDimensionChange}
            />
            ) : <CreateVector dimension={vectorDimension}/>
          }
          </>
        )
      } 
   </>
  );
}