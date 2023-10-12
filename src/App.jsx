"use client";
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import cloud from "remixicon-react/CloudLineIcon";
import ArrowDown from "remixicon-react/ArrowDownLineIcon";
import Firstcard from "./Components/Firstcard/Firstcard";
import ArrowUp from "remixicon-react/ArrowUpLineIcon";
import UpperDays from "./Components/Upperdays/UpperDays";
import SecondCard from "./Components/Firstcard/SecondCard";
import ThirdCard from "./Components/Firstcard/ThirdCard";
import FourthCard from "./Components/Firstcard/FourthCard";
import Fifthcard from "./Components/Firstcard/Fifthcard";
import Sixthcard from "./Components/Firstcard/Sixthcard";

const App = () => {
  const [getCurrentLattitude, setGetCurrentLattitude] = useState(0);
  const [getCurrentLongitude, setGetCurrentLongitude] = useState(0);
  const currentWeatherApiKey = "38b1749b721f46da8a772913230210";
  const [city, setCity] = useState("New Delhi");
  const [currentweatherdata, setCurrentweatherdata] = useState({});
  const [forecastweatherextras, setForecastweatherextras] = useState([]);
  const [chanceofRain, setChanceofRain] = useState("2");
  const [sunset, setSunset] = useState("06:00 pm");
  const [sunrise, setSunrise] = useState("05:00 am");
  const [countryCodes, setCountryCodes] = useState("In");
  const [feelslikeCondition, setFeelslikeCondition] = useState("Normal");
  const [allcountrycode, setAllCountrycode] = useState([]);

  const currentweatherapicall = async () => {
    try {
      await axios
        .get(
          `http://api.weatherapi.com/v1/forecast.json?key=${currentWeatherApiKey}&q=${city}`
        )
        .then((res) => {
          const currentWeather = {
            city: `${res.data.location.name}`,
            currentTemp: `${res.data.current.temp_c}`,
            windSpeed: `${res.data.current.wind_kph}`,
            windDirection: `${res.data.current.wind_dir}`,
            humidity: `${res.data.current.humidity}`,
            visibility: `${res.data.current.vis_km}`,
            feelsLike: `${res.data.current.feelslike_c}`,
            condition: `${res.data.current.condition.text}`,
            country: `${res.data.location.country}`,
          };

          const tempForecast = res.data.forecast.forecastday;

          setForecastweatherextras(tempForecast);

          setCurrentweatherdata(currentWeather);
        });
    } catch (error) {}
  };
  useEffect(() => {
    forecastweatherextras.map((obj) => {
      setSunset(obj.astro.sunset);
      setSunrise(obj.astro.sunrise);
      setChanceofRain(obj.day.daily_chance_of_rain);
    });
  }, [forecastweatherextras, city]);

  useEffect(() => {
    currentweatherapicall();
  }, [city]);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setGetCurrentLattitude(position.coords.latitude);
        setGetCurrentLongitude(position.coords.longitude);
      });
    } else {
      console.error("Check Location permission");
    }
  }, []);

  const weatherIcons = {
    sunny: `https://cdn-icons-png.flaticon.com/512/3222/3222691.png`,
    clear: `https://cdn-icons-png.flaticon.com/512/3222/3222691.png`,
    cloudy: `https://cdn-icons-png.flaticon.com/512/1163/1163736.png`,
    mist: `https://cdn-icons-png.flaticon.com/512/175/175872.png`,
    fog: `https://cdn-icons-png.flaticon.com/512/175/175872.png`,
    Thunderstorm: ` https://cdn-icons-png.flaticon.com/512/3104/3104612.png`,
    windy: ` https://cdn-icons-png.flaticon.com/512/3026/3026375.png`,
    sleet: `https://cdn-icons-png.flaticon.com/512/7084/7084507.png`,
  };
  const [icon, setIcon] = useState(
    `https://cdn-icons-png.flaticon.com/512/3222/3222691.png`
  );

  useEffect(() => {
    const countryAlphaCode = async () => {
      axios
        .get(
          "https://pkgstore.datahub.io/core/country-list/data_json/data/8c458f2d15d9f2119654b29ede6e45b8/data_json.json"
        )
        .then((res) => {
          setAllCountrycode(res.data);
        });
    };
    allcountrycode.filter((country) => {
      if (country.Name == currentweatherdata.country) {
        setCountryCodes(country.Code);
      } else {
        console.log(false);
      }
    });

    countryAlphaCode();
  }, [city]);
  const daysData = [
    {
      day: "Sun",
      temperature: "15",
      iconSrc: "https://cdn-icons-png.flaticon.com/512/146/146182.png",
    },
    {
      day: "Mon",
      temperature: "16",
      iconSrc: "https://cdn-icons-png.flaticon.com/512/146/146182.png",
    },
    {
      day: "Tue",
      temperature: "17",
      iconSrc: "https://cdn-icons-png.flaticon.com/512/146/146182.png",
    },
    {
      day: "Wed",
      temperature: "15",
      iconSrc: "https://cdn-icons-png.flaticon.com/512/146/146182.png",
    },
    {
      day: "Thu",
      temperature: "15",
      iconSrc: "https://cdn-icons-png.flaticon.com/512/146/146182.png",
    },
    {
      day: "Fri",
      temperature: "15",
      iconSrc: "https://cdn-icons-png.flaticon.com/512/146/146182.png",
    },
    {
      day: "Sat",
      temperature: "15",
      iconSrc: "https://cdn-icons-png.flaticon.com/512/146/146182.png",
    },
  ];

  return (
    <div className="flex justify-center items-center w-full bg-[#Dedede] h-[100vh]">
      <div className="flex max-w-1240px h-[95vh]">
        <div className=" flex justify-center w-[300px] bg-slate-50 rounded-l-3xl">
          <div className="flex flex-col ">
            <form
              className="mt-5"
              onSubmit={(e) => {
                e.preventDefault();
                setCity("");
              }}
            >
              <input
                className="bg-slate-200 relative rounded-3xl w-[260px] h-[35px] px-3 focus:outline-none focus:shadow-[0_0px_15px_0px_#FFD710] transition-shadow z-[99]"
                placeholder="Search City..."
                onChange={(e) => setCity(e.target.value)}
                value={city}
              />
            </form>
            <div className=" w-[200px] mt-8">
              <img src={icon} />
            </div>
            <div className="">
              <p className="text-[6.8em] font-RedHat">
                {currentweatherdata.currentTemp}&deg;c
              </p>{" "}
              <div className="mt-[-13px]">
                <p className="text-[1.2em] text-slate-600">Monday, 16:00</p>
              </div>
            </div>
            <div className="font-RegFont mt-5  py-3">
              <div className="mt-1 text-[.9em] flex">
                {" "}
                <div className="w-[20px]">
                  <img
                    src={
                      "https://cdn-icons-png.flaticon.com/512/399/399421.png"
                    }
                  />
                </div>{" "}
                <p className="ml-2"> {currentweatherdata.condition}</p>
              </div>
              <div className="mt-1 text-[.9em] flex">
                {" "}
                <div className="w-[20px]">
                  <img
                    src={
                      "https://cdn-icons-png.flaticon.com/512/1779/1779907.png"
                    }
                  />
                </div>{" "}
                <p className="ml-2">Chances of Rain: {chanceofRain}%</p>
              </div>
            </div>
            <div className=" w-[100%] h-[80px] rounded-3xl border flex justify-center items-center border-slate-400">
              <p className="font-RegFont text-[1.5em] font-semibold">
                {currentweatherdata.city},{" "}
                <span className="text-[.6em]">{countryCodes}</span>{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="w-[900px] bg-[#Ececec]  rounded-r-3xl">
          <div className="">
            <div className="px-12 mt-6 ">
              <p className="border-b border-slate-400 inline-block">Week</p>
            </div>

            <div className="flex justify-center items-center mt-[20px] ">
              <div className="grid grid-cols-7 w-[800px] place-items-center ">
                {daysData.map((dayInfo, index) => (
                  <UpperDays
                    key={index}
                    day={dayInfo.day}
                    temperature={dayInfo.temperature}
                    iconSrc={dayInfo.iconSrc}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="px-12 mt-9 ">
            <p className="">Today's Highlight</p>
          </div>

          <div className="flex justify-center items-center mt-[20px] ">
            <div className="grid grid-cols-3 grid-rows-2 w-[800px] place-items-center gap-y-4 ">
              <Firstcard />
              <SecondCard
                currentWeather={currentweatherdata.windSpeed}
                chanceOfRain={currentweatherdata.windDirection}
              />
              <ThirdCard sunrise={sunrise} sunset={sunset} />
              <FourthCard visibilitys={currentweatherdata.visibility} />

              <Fifthcard humidity={currentweatherdata.humidity} />
              <Sixthcard
                feelsLike={currentweatherdata.feelsLike}
                feelslikeCondition={feelslikeCondition}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
