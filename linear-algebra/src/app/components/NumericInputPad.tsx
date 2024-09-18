"use client"
import React, { useState } from 'react';

interface NumericInputPadProps {
  onValueChange: (value: number) => void;
}

type DeviceInput = "0"|"1"|"2"|"3"|"4"|"5"|"6"|"7"|"8"|"9"|".";

const NumericInputPad: React.FC<NumericInputPadProps> = ({
  onValueChange,
}) => {
  const [continuing, setContinuing] = useState<string>("0");
  const [isFirstInput, setIsFirstInput] = useState(true);

  const handleInput = (input: DeviceInput) => {
    if(isFirstInput){
      if(input === "."){
        //最初の入力で"."だったらそのまま小数の入力を続ける
        setContinuing(continuing + input);
      } else if(input === "0"){
        setContinuing(continuing + ".");

      } else {
        //最初の入力は初期値0を置き換える
        setContinuing(input);
      }
      setIsFirstInput(false);
    } else {
      //"."で無ければ入力を続ける
      if(input !== "."){
        setContinuing(continuing + input);
      }
    }

    console.log(continuing);
  };

  const handleDelete = () => {
    setContinuing(() => {
      let len = continuing.length;
      return continuing.slice(0, len-1);
    });
  };

  const handleClear = () => {
    setContinuing("0");
    setIsFirstInput(true);
  };

  const handleSubmit = () => {
    if(!Number.isNaN(Number(continuing))){
      onValueChange(Number(continuing));
    } else {
      console.log("不正な入力", Number(continuing));
    }
  }

  const deviceInput: DeviceInput[] = ["7","8", "9", "4", "5", "6", "1", "2", "3","0", "."];

  return (
    <div className="max-w-xs mx-auto bg-gray-100 rounded-lg p-4">
      <div className="mb-4 p-2 bg-white rounded text-right text-2xl">
        {continuing}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {deviceInput.map((btn) => (
          <button
            key={btn}
            onClick={() => handleInput(btn)}
            className="p-3 text-xl bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            {btn}
          </button>
        ))}
        <button
          onClick={handleDelete}
          className="p-3 text-xl bg-red-200 rounded-lg hover:bg-red-300"
        >
          Del
        </button>
      </div>
      <div className='flex'>
        <button
          onClick={handleClear}
          className="w-full mt-2 p-3 text-xl bg-blue-200 rounded-lg hover:bg-blue-300"
        >
          Clear
        </button>
        <button
          onClick={handleSubmit}
          className="w-full mt-2 p-3 text-xl bg-green-200 rounded-lg hover:bg-blue-300"
        >
          submit
        </button>

      </div>

    </div>
  );
};

export default NumericInputPad;