"use client"

import React, { useState} from 'react';
import SunSVG from '@/src/svgComponents/sun-svg';
import MoonSVG from '@/src/svgComponents/moon-svg';

const Toggle = () => { 
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);

    if (isChecked) {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } 
  }

  return (
    <label className='flex cursor-pointer relative items-center justify-center'>
      <input
        type={"checkbox"}
        className='sr-only peer'
        checked={isChecked}
        onChange={handleToggle}
      />
      <div
        className={`peer ${isChecked ? 'after:transition-all after:duration-500 after:left-11' : 'after:left-0'} pb-20 after:transition-all after:duration-500 w-20 h-8  rounded-full px-1 flex items-center after:rounded-full after:content-[""] after:flex after:relative after:w-7 after:h-7`}
      >
         {isChecked ? <MoonSVG /> : <SunSVG />}
      </div>
    </label>
  );
};
export default Toggle;
