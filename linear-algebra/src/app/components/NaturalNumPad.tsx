"use client"
import React, { useState } from 'react';

interface NaturalNumPadProps {
  onValueChange: (value: number) => void;
}

type NaturalNumInput = "0"|"1"|"2"|"3"|"4"|"5"|"6"|"7"|"8"|"9";

const NaturalNumPad : React.FC<NaturalNumPadProps> = ({
  onValueChange,
}) => {
  const [continuing, setContinuing] = useState<string>("0");
  const [isFirstInput, setIsFirstInput] = useState(true);

  const handleInput = (input: NaturalNumInput) => {
    if(isFirstInput){
      if(input === "0"){
        //最初の入力で"0"だったらもう入力はできない
        setContinuing("0");
      }else {
        //最初の入力は初期値0を置き換える
        setContinuing(input);
      }
      setIsFirstInput(false);
    } else {
      //"0"で無ければ入力を続ける
      if(continuing!=="0"){
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

  const deviceInput: NaturalNumInput[] = ["7","8", "9", "4", "5", "6", "1", "2", "3","0"];

  return (
    <div className="max-w-xs mx-auto bg-black  p-4">
      <div 
      role="status"
      aria-live="polite"
      className="mb-4 p-2 bg-black rounded text-right text-4xl text-white">
        {continuing}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {deviceInput.map((btn) => (
          <button
            key={btn}
            onClick={() => handleInput(btn)}
            className="p-3 font-medium text-2xl text-white bg-zinc-700 rounded-full hover:bg-zinc-500"
          >
            {btn}
          </button>
        ))}
        <button
          onClick={handleDelete}
          className="p-3 text-white text-2xl bg-yellow-500 rounded-full hover:bg-yellow-300"
        >
          Del
        </button>
        <button
          onClick={handleClear}
          className="w-full mt-2 p-3 font-bold text-2xl bg-zinc-300 rounded-full hover:bg-zinc-100"
        >
          C
        </button>
      </div>
      <div className='flex'>

        <button
          onClick={handleSubmit}
          className="text-white font-semibold w-full mt-2 p-3 text-2xl bg-yellow-500 rounded-full hover:bg-yellow-300"
        >
          submit
        </button>

      </div>

    </div>
  );
};

export default NaturalNumPad;