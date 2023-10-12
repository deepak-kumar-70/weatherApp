
const Fifthcard = ({  humidity}) => {
  return (
    <div className="w-[260px] h-[190px] bg-white rounded-xl ">
    <p className="text-slate-600 px-4 py-2">Humidity</p>
    <div className="flex gap-8">
      <div>
        <p className="text-[4.5em] font-RedHat px-4">
          {  humidity}
          <span className="text-[.5em]">%</span>
        </p>
        <p className="font-RegFont px-4">Normal</p>
      </div>

      <div className=" w-[40px] rounded-full flex justify-center border">
        <div className="bg-blue-500 w-[35px] h-[35px] rounded-full mt-[2px]"></div>
      </div>
    </div>
  </div>
  )
}

export default Fifthcard