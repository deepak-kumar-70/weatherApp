
const Sixthcard = ({ feelsLike,feelslikeCondition}) => {
  return (
    <div className="w-[260px] h-[190px] bg-white rounded-xl ">
    <p className="text-slate-600 px-4 py-2">Feels like</p>
    <p className="font-RedHat text-[4.5em] px-4">
      { feelsLike}&deg;
    </p>
    <div className="w-[30px] ml-2 flex font-RegFont items-center">
      <img
        src={
          "https://upload.wikimedia.org/wikipedia/en/d/d5/Thermometer_icon.png"
        }
      />
      {feelslikeCondition}
    </div>
  </div>
  )
}

export default Sixthcard