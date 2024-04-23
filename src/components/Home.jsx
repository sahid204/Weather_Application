import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const Home = () => {
  const [data, setData] = useState({})
  const [Location, setLocation] = useState('')
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${Location}&appid=4cc403185b2b6ec09307843e14211842
  `
  const searchLocation=(event)=>{
    if(event.key==='Enter'){
      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
   
  }
  return (
    <div className="app w-full h-full relative p-4" >
      <div className="search text-center m-auto p-1">
        <input className="p-2 text-base rounded-2xl border-2 border-black bg-slate-200 w-4/12" value={Location}
        onChange={event=>setLocation(event.target.value)} placeholder='Enter Location' 
        onKeyPress={searchLocation}
        type="text" />
        
      </div>
      <div className="container max-w-[700px] max-h-[700px] m-auto py-5 relative top-[8%] flex flex-col gap-52 ">
        <div className="top p-1">
          <div className="location text-4xl font-bold">
            <p>{data.name}</p>
          </div>
          <div className="temp p-1">
            {data.main?<h1 className="font-bold my-2 text-8xl">{data.main.temp} °F</h1>: null}
          </div>
          <div className="description p-1 text-xl ">
          {data.weather?<p className="text-xl">{data.weather[0].main}  Clouds</p>: null}
          </div>
        </div>
        <div className="bottom flex justify-evenly p-[1rem] m-[1rem auto] text-3xl w-[100%] rounded-lg bg-slate-400 ">
          <div className="feels">
          {data.main?<p className="text-3xl">{data.main.feels_like} °F</p>: null}
            <p className="text-xl font-bold">Feels Like</p>
          </div>
          <div className="humidity">
          {data.main?<p className="text-3xl mx-4">{data.main.humidity}%</p>: null}
            <p className="text-xl font-bold">Humidity</p>
          </div>
          <div className="wind">
          {data.wind?<p className="text-3xl">{data.wind.speed} MPH</p>: null}
            <p className="text-xl font-bold">Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home