"use client"

import React, { useState } from 'react';

const Toggle = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className='flex cursor-pointer relative bg-zinc-900 items-center justify-center'>
      <input
        type="checkbox"
        className='sr-only peer'
        checked={isChecked}
        onChange={handleToggle}
      />
      <div
        className={`peer ${isChecked ? 'after:left-12' : 'after:left-0'} w-24 h-12 bg-zinc-700 rounded-full px-1 flex items-center after:rounded-full after:content-[""] after:flex after:relative after:w-10 after:h-10 after:bg-zinc-900`}
      ></div>
    </label>
  );
};

export default Toggle;
