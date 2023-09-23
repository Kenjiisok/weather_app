import React from 'react'
import {IoLocationOutline} from 'react-icons/io5'
import { getCurrentDate } from '../Utils/currentDate'

interface CurrentProps {
  data: {
    current: {
      condition: {
        icon: string;
        text: string;
      }
      temp_c: number;
    }
    location : {
      name : string;
      region: string;
    }
  }
}

const Current = ({data}: CurrentProps) => {

  const currentDate = getCurrentDate()
  const weatherIcons = data.current ? data.current.condition.icon : null

  return (
    <div className='flex flex-col mb-8 md:mb-0 items-start gap-2 w-1/2'>
      <div className='flex items-center'>
        <div>
          <h1 className='text-5xl text-zinc-700 dark:text-white/70'>Hoje</h1>
          <p className='text-zinc-700 dark:text-white/70 text-2xl'>{currentDate}</p>

          {weatherIcons && (
            <div>
              <img className='w-[55px] object-cover' src={weatherIcons} alt={data.current.condition.text}/>
            </div>
          )}
        </div>
      </div>
      <div>
        <p className='text-5xl dark:text-white/70 text-zinc-700'>
          {data.current.temp_c.toFixed()}
          <span>°</span>
        </p>
        <span className='text-zinc-700 dark:text-white/70'>{data.current.condition.text}</span>
      </div>
      <div>
        <div className='flex items-center text-white/70 bg-zinc-700 px-2 py-2 rounded-xl'>
            <IoLocationOutline/>
            <span>
              {data.location.name}, {data.location.region}
            </span>
        </div>
      </div>
    </div>
    
  )
}

export default Current