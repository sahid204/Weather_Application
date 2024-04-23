import React from 'react'

const About = () => {
  return (
    
    <div className="p-4">
      <div className="p-4 mx-auto text-center font-bold text-3xl">
      Welcome to Weather Application!
      </div>
      <p className="text-lg p-3">Weather Application is your go-to destination for accurate and up-to-date weather information, no matter where you are in the world. Our mission is to provide you with the tools you need to plan your day, stay safe, and make the most of every moment, rain or shine.</p>
      <div className="p-2 mx-1 font-bold text-lg">Key Features:</div>
      <div className="p-1 mx-1">
      <p className="p-1"> <span className="text-base font-bold">Real-Time Weather Updates:</span> Receive instant updates on current weather conditions in your location, including temperature, humidity, wind speed, and more.</p>
      <p className="p-1"><span className="text-base font-bold">Hourly and Daily Forecasts:</span> Plan ahead with detailed forecasts for the next 24 hours or the entire week, so you're never caught off guard by changing weather patterns.</p>
      <p className="p-1"><span className="text-base font-bold">Interactive Maps:</span> Explore weather patterns with interactive maps that allow you to track storms, view satellite imagery, and monitor precipitation levels.</p>
      <p className="p-1"><span className="text-base font-bold">Customizable Alerts: </span>Stay informed with customizable weather alerts for your location, ensuring you're prepared for any severe weather events.</p>
      <p className="p-1"><span className="text-base font-bold">Personalized Experience: </span>Customize your weather experience by saving your favorite locations and accessing weather information for multiple cities with ease.</p>
      </div>
      <div className="p-4 text-lg font-normal">Whether you're planning a weekend getaway, scheduling outdoor activities, or simply want to know if you need an umbrella, Weather Application has you covered.</div>
      <div className=" p-2 mx-auto text-center font-bold text-xl  transform hover:scale-125 transition-transform duration-300 cursor-pointer">
        Download Now!
     </div>

    </div>
    
  )
}

export default About