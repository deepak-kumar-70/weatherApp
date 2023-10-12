
const Firstcard = () => {
  return (
    <div className="w-[260px] h-[190px] bg-white rounded-xl ">
    <p className="text-slate-600 px-4 py-2 font-RegFont">
      Air Quality
    </p>
    <div className="flex gap-8">
      <div>
        <p className="text-[4.5em] font-RedHat px-4 w-[135px]">
          89{" "}
        </p>
        <p className="font-RegFont px-4">Good</p>
      </div>

      <div className=" w-[40px] rounded-full flex justify-center border">
        <div className="bg-[#00FFBF] w-[35px] h-[35px] rounded-full mt-[2px] translate-y-[80px]"></div>
      </div>
    </div>
  </div>
  )
}

export default Firstcard
