import React from 'react'
import UpperDays from '../Upperdays/UpperDays'
const SecondCard = ({currentWeather,chanceOfRain}) => {
  return (
    <div className="w-[260px] h-[190px] bg-white rounded-xl ">
    <p className="text-slate-600 px-4 py-2">Wind Speed</p>

    <p className="text-[4.5em] font-RedHat px-4">
      {currentWeather}{" "}
      <span className="text-[.5em]">km/h</span>{" "}
    </p>
    <p className="font-RegFont px-4 flex items-center">
      <div className="w-[30px] h-[30px] flex justify-center items-center border rounded-full mr-3">
        <img
          className="w-[80%]"
          src="https://www.iconpacks.net/icons/2/free-location-icon-2955-thumb.png"
        />
      </div>
      {chanceOfRain}
    </p>
  </div>

  )
}

export default SecondCard