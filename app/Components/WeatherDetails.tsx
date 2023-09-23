import React from 'react'
import {BsSunrise, BsSunset} from 'react-icons/bs'
import {WiHumidity} from 'react-icons/wi'
import {GiWindSlap, GiCompass} from 'react-icons/gi'
import {CiDroplet} from "react-icons/ci"
import {FaEye} from "react-icons/fa"
import {BsThermometerHalf} from "react-icons/bs"

interface WeatherDetailsProps {
  data: {
    current: {
      wind_kph: number;
      humidity: number;
      wind_dir: string;
      feelslike_c: number;
      vis_km: number;
      precip_mm: number;
    }
    forecast: {
      forecastday: {
        astro: {
          sunrise: string;
          sunset: string;
        }
      }[]
    }
  }
}


const WeatherDetails = ({data}: WeatherDetailsProps) => {
  return (
   <>
    <div className='p-12'>
      <h1 className='mb-20 p-1 text-3xl text-zinc-700 dark:text-white/70'>Detalhes do tempo</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        <div className='bg-zinc-700 flex p-4 items-center justify-center gap-6 rounded-xl'>
          <div className='text-white/75 text-2xl'>
            <h3>Vento</h3>
            <h3>{data.current.wind_kph} Km/h</h3>
          </div>
          <div className='text-5xl'>
            <GiWindSlap fontSize={40} color={'white'}/>
          </div>
        </div>

        <div className='bg-zinc-700 flex p-4 items-center justify-center gap-6 rounded-xl'>
          <div className='text-white/75  text-2xl'>
            <h3>Humidade</h3>
            <h3>{data.current.humidity}%</h3>
          </div>
          <div className='text-5xl'>
            <WiHumidity fontSize={40} color={'white'}/>
          </div>
        </div>

        <div className='bg-zinc-700 flex p-4 items-center justify-center gap-6 rounded-xl'>
          <div className='text-white/75  text-2xl'>
            <h3>Precipitação</h3>
            <h3>{data.current.precip_mm} mm</h3>
          </div>
          <div className='text-white/75  text-5xl'>
            <CiDroplet fontSize={40} color={'white'}/>
          </div>
        </div>

        <div className='bg-zinc-700 flex p-4 items-center justify-center gap-6 rounded-xl'>
          <div className='text-white/75  text-2xl'>
            <h3>Dir do Vento</h3>
            <h3>{data.current.wind_dir}</h3>
          </div>
          <div className='text-white/75  text-5xl'>
            <GiCompass fontSize={40} color={'white'}/>
          </div>
        </div>

        <div className='bg-zinc-700 flex p-4 items-center justify-center gap-6 rounded-xl'>
          <div className='text-white/75  text-2xl'>
            <h3>Nascer do sol</h3>
            <h3>{data.forecast.forecastday[0].astro.sunrise}</h3>
          </div>
          <div className='text-5xl'>
            <BsSunrise fontSize={40} color={'white'}/>
          </div>
        </div>

        <div className='bg-zinc-700 flex p-4 items-center justify-center gap-6 rounded-xl'>
          <div className='text-white/75  text-2xl'>
            <h3>Por do sol</h3>
            <h3>{data.forecast.forecastday[0].astro.sunset}</h3>
          </div>
          <div className='text-5xl'>
            <BsSunset fontSize={40} color={'white'}/>
          </div>
        </div>

        <div className='bg-zinc-700 flex p-4 items-center justify-center gap-6 rounded-xl'>
          <div className='text-white/75  text-2xl'>
            <h3>Visibilidade</h3>
            <h3>{data.current.vis_km} Km</h3>
          </div>
          <div className='text-5xl'>
            <FaEye  fontSize={40} color={'white'}/>
          </div>
        </div>

        <div className='bg-zinc-700 flex p-4 items-center justify-center gap-6 rounded-xl'>
          <div className='text-white/75 text-2xl'>
            <h3>Sensação</h3>
            <h3>{data.current.feelslike_c} °</h3>
          </div>
          <div className='text-5xl'>
            <BsThermometerHalf fontSize={40} color={'white'}/>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default WeatherDetails