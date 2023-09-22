"use client";

import React from 'react'
import Input from './Components/Input';
import { useState } from 'react';
import Current from './Components/Current';
import Forecast from './Components/Forecast';
import WeatherDetails from './Components/WeatherDetails';
import Toggle from './Components/Toggle'

const Home = () => {
  
  const [data, setData] = useState({});
  const [location, setLocation] = useState("")
  const [error, setError] = useState("")

  const url = `http://api.weatherapi.com/v1/forecast.json?key=b5466eefba004bfda20142209232109&q=${location}&days=7&aqi=yes&alerts=yes`

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter"){
      e.preventDefault()
      try{
        const response = await fetch(url)
        if(!response.ok){
          throw new Error()
        }
        const data = await response.json()
        setData(data)
        setLocation("")
        setError("")
      } catch (error) {
        setError("Cidade não encontrada")
        setData({});
      }
    }
  }

  let content;
  if (Object.keys(data).length === 0 && error === "") {
    content = (
      <div className='text-white text-center h-screen mt-[5rem]'>
        <h2 className='text-3xl font-semibold mb-4'>Bem vindo</h2>
        <p className='text-xl'>Busque por uma cidade</p>
      </div>
    )
  } else if (error !== "") {
    content = (
      <div className='text-blue-950 text-center h-screen mt-[5rem]'>
        <p className='text-3xl font-semibold mb-4'>Cidade não encontrada</p>
        <p className='text-2xl font-semibold mb-4'>Tente outra cidade</p>
      </div>
    )
  } else {
    content = (
      <>
        <div className='flex md:flex-row flex-col p-12 items-center justify-between'>
          <Current
            data={data}
          />
          <Forecast 
            data={data}
          />
        </div>

        <div>
          <WeatherDetails data={data}/>
        </div>
      </>
    )
  }

  return (
    <div className='bg-cover bg-gradient-to-r from-blue-950 to-blue-400 h-fit'>
      <div className='bg-white/25 w-full rounded-lg flex flex-col h-fit'>
        <div className='flex flex-col md:flex-row justify-between items-center p-12'>
          <Input 
            handleSearch={handleSearch}
            setLocation={setLocation}
          />
          <h1 className='mb-8 md:mb-0 order-1 text-blue-800 py-2 px-4 rounded-xl italic font-semibold'>Weather App.</h1>
          <Toggle/>
        </div>
       {content}
      </div>  
    </div>
  )
}

export default Home;