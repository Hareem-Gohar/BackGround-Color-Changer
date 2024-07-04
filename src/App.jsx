import React, { useState } from 'react';
import "./App.css"
const App = () => {
  const colorsArray = [
    { name: 'Teal', code: 'bg-teal-500' },
    { name: 'Cyan', code: 'bg-cyan-500' },
    { name: 'Lime', code: 'bg-lime-500' },
    { name: 'Amber', code: 'bg-amber-500' },
    { name: 'Orange', code: 'bg-orange-500' },
    { name: 'Cool Gray', code: 'bg-gray-700' }, 
    { name: 'Emerald', code: 'bg-emerald-500' },
    { name: 'Sky', code: 'bg-sky-500' },
    { name: 'Violet', code: 'bg-violet-500' }
  ];

  const [bgColor, setBgColor] = useState("bg-black");

  const changeBackgroundColor = (newColor) => {
    setBgColor(newColor);
  };

  return (
    <div className={`w-full h-screen flex justify-center items-center ${bgColor}`}>
      <h1 className='text-white font-bold text-3xl uppercase text-center'>Click to change the color of background </h1>
      <div className="fixed bottom-5 inset-x-0 py-4 px-3 text-white flex justify-center items-center gap-5 flex-wrap bg-black">
        {colorsArray.map((color, index) => (
          <button
            key={index}
            className={`rounded-full px-8 font-semibold text-black py-2 ${color.code}`}
            onClick={() => changeBackgroundColor(color.code)}
          >
            {color.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
