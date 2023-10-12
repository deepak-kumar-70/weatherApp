import ArrowDown from "remixicon-react/ArrowDownLineIcon";
import ArrowUp from "remixicon-react/ArrowUpLineIcon";
const ThirdCard = ({sunrise,sunset}) => {
  return (
    <div className="w-[260px] h-[190px] bg-white rounded-xl ">
                <p className="text-slate-600 px-4 py-2">Sunrise Sunset</p>
                <div className="flex">
                  <div className="flex flex-col gap-6 px-4">
                    <div className="w-[55px] relative">
                      <img src="https://cdn-icons-png.flaticon.com/512/146/146182.png" />
                      <ArrowUp className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
                    </div>

                    <div className="w-[55px] relative">
                      <img src="https://cdn-icons-png.flaticon.com/512/146/146182.png" />
                      <ArrowDown className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-9">
                    <p className="font-RedHat text-[1.7em] mt-2">{sunrise}</p>
                    <p className="font-RedHat text-[1.7em]">{sunset}</p>
                  </div>
                </div>
              </div>
  )
}

export default ThirdCard