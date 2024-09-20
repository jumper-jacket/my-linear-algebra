"use client"
import React, { useState } from 'react';

interface NumericInputPadProps {
  onValueChange: (value: number) => void;
}

type DeviceInput = "0"|"1"|"2"|"3"|"4"|"5"|"6"|"7"|"8"|"9"|"."| "-";

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
        //最初の入力で"0"で入力されたら小数点に置き換える
        setContinuing(continuing + ".");
      } else {
        //最初の入力は初期値0を置き換える
        setContinuing(input);
      }
      setIsFirstInput(false);
    } else {
      //"."で無ければ入力を続ける
      if(input !== "."){
        if(input !=="-"){
          //入力が"-"でなければ，末尾に入力を追加
          setContinuing(continuing + input);
        } else {
          //入力が"-"だったら，一番前にマイナスを追加
          //既にマイナスが追加されていたらマイナスを削除
          if(continuing[0] === "-"){
            setContinuing(continuing.slice(1));
          }else{
            setContinuing("-" + continuing);
          }
        }
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

  const deviceInput: DeviceInput[] = ["7","8", "9", "4", "5", "6", "1", "2", "3","0", ".","-"];

  return (
    <div className="max-w-xs mx-auto bg-black rounded-lg p-4">
      <div className="mb-4 p-2 bg-black rounded text-right text-4xl text-white font-semibold">
        {continuing}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {deviceInput.map((btn) => (
          <button
            key={btn}
            onClick={() => handleInput(btn)}
            className="p-3 text-white font-semibold text-2xl bg-zinc-600 rounded-full hover:bg-zinc-300"
          >
            {btn}
          </button>
        ))}
             </div>
      <div className='flex'>
        <button
          onClick={handleDelete}
          className="w-full mt-2 p-3 text-white text-2xl bg-yellow-500 rounded-full hover:bg-yellow-300"
        >
          Del
        </button>
        <button
          onClick={handleClear}
          className="w-full mt-2 p-3 font-bold text-2xl bg-zinc-200 rounded-full hover:bg-blue-300"
        >
          C
        </button>
        <button
          onClick={handleSubmit}
          className="w-full mt-2 p-3 font-bold text-white text-xl bg-yellow-500 rounded-full hover:bg-blue-300"
        >
          submit
        </button>

      </div>

    </div>
  );
};

export default NumericInputPad;