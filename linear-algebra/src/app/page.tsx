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
  const [val, setVal] = useState(0);
  const [vectorDimension, setVectorDimension] = useState(0);
  const [rows, setRows] = useState<number>(0);
  const [cols, setCols] = useState<number>(0);
  const [isRight, setIsRight] = useState(false);
  const [isMatrixMode, setIsMatrixMode] = useState(false);
  const [isInputComplete, setInputComplete] = useState(false);
  const [mode, setMode] = useState<Mode>(Mode.Vector);

  const handleMode = () => {
    setMode(currentMode => currentMode === Mode.Vector ? Mode.Matrix : Mode.Vector);
  }

  const handleValueChange = useCallback((newValue: number) => {
    setVal(newValue);
    setInputComplete(true);
  }, []);

  const handleRowChange = useCallback((newValue: number) => {
    setRows(newValue);
  }, []);

  const handleColChange = useCallback((newValue: number) => {
    setCols(newValue);
  }, []);

  const handleToggleRowOrColSwitch = useCallback(() => {
    setIsRight(prev => !prev);
  }, []);

  const handleInputMode = useCallback(() => {
    setIsMatrixMode(prev => !prev);
    setInputComplete(false);
  }, []);

  const handleVectorDimensionChange = useCallback((newValue: number) => {
    setVectorDimension(newValue);
    setInputComplete(true);
  }, []);

  return (
    <>
      <h1>数値入力のテスト {val}</h1>
      <h1>行の入力 {rows}</h1>
      <h1>列の入力 {cols}</h1>
      <h1>{isMatrixMode ? "matrix" : "vector"}</h1>
      <h1>{mode}</h1>
      <ToggleSwitch leftLabel="vector" rightLabel="matrix" onToggle={handleMode}/>
      {
        mode === Mode.Matrix ? (
          <>
            <ToggleSwitch leftLabel='行' rightLabel='列' onToggle={handleToggleRowOrColSwitch}/>
            <DimensionInputDisplay
              inputDescription={isRight ? 'Col' : 'Row'}
              onValueChange={isRight ? handleColChange : handleRowChange}
            />
          </>
        ) : (
          !isInputComplete ? (
            <DimensionInputDisplay
              inputDescription='vector'
              onValueChange={handleVectorDimensionChange}
            />
          ) : (
            <CreateVector dimension={vectorDimension}/>
          )
        )
      }
    </>
  );
}