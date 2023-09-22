"use client"

import React, { useState} from 'react';

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
        className={`peer ${isChecked ? 'after:left-11' : 'after:left-0'} w-20 h-8 bg-zinc-700  dark:bg-blue-400 rounded-full px-1 flex items-center after:rounded-full after:content-[""] after:flex after:relative after:w-7 after:h-7 after:bg-blue-100`}
      ></div>
    </label>
  );
};
export default Toggle;
