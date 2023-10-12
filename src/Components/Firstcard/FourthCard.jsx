

const FourthCard = ({visibilitys}) => {
  return (
    <div className="w-[260px] h-[190px] bg-white rounded-xl ">
    <p className="text-slate-600 px-4 py-2">Visibilty</p>
    <p className="text-[4.5em] font-RedHat px-4">
    {visibilitys}
      <span className="text-[.5em]">km</span>
    </p>
    <p className="font-RegFont px-4">Low</p>
  </div>
  )
}

export default FourthCard