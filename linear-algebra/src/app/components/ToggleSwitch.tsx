import React, { useState } from 'react';

interface ToggleSwitchProps {
  leftLabel: string;
  rightLabel: string;
  onToggle: () => void;
}

const ToggleSwitch:React.FC<ToggleSwitchProps> = ( { leftLabel, rightLabel, onToggle }) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    onToggle();
  };

  return (
    <div className="max-w-xs mx-auto  flex items-center justify-center bg-white">
      <div
        className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer ${
          isOn ? 'bg-yellow-400' : 'bg-zinc-300'
        }`}
        onClick={toggleSwitch}
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
            isOn ? 'translate-x-6' : ''
          }`}
        />
      </div>
      <span className="ml-3  text-2xl font-bold text-gray-900">
        {isOn ? rightLabel :  leftLabel}
      </span>
    </div>
  );
};

export default ToggleSwitch;