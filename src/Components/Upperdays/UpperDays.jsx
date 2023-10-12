
const UpperDays = ({ day, temperature, iconSrc }) => {
  return (
    <div className="w-[105px] h-[120px] bg-white rounded-xl flex flex-col items-center gap-1">
    <p className="mt-1">{day}</p>
    <div className="w-[55px]">
      <img src={iconSrc} alt={`Weather icon for ${day}`} />
    </div>
    <div className="font-RedHat text-[1.1em]">{temperature}&deg;</div>
  </div>
  )
}

export default UpperDays