import React from 'react'
import { formatYearMonth } from '../../Utility/Helper';
import LOGO from "./assets/LOGO.svg"
const Title = ({ text, color ,status}) => {
    return (
        <div className="relative w-fit mb-2.5">
        <span
            className="absolute bottom-0 left-0 w-full h-2"
            style={{ backgroundColor: color }}
        ></span>
        <h2 className={`relative font-bold ${status ? "text-lg":"text-sm"}`}>{text}</h2>
        </div>
    );
};
const CustomTitle = ({ text, color ,status}) => {
    return (
        <div className="relative w-fit mb-2.5">
        <span
            className="absolute bottom-0 left-0 w-full h-2"
            style={{ backgroundColor: color }}
        ></span>
        <h2 className={`relative font-bold ${status ? "":"text-xl"}`}>{text}</h2>
        </div>
    );
};
const ChallengeHeader = ({data , DEFAULT_THEME}) => {    
  return (
    <div className="relative py-5 border-b-2 grid grid-cols-7 h-40 mb-3 border-b-[#C9C2F8] ">
        <svg
            className="absolute top-4 z-20"
            width="260"
            height="128"
            viewBox="0 0 260 128"
            xmlns="http://www.w3.org/2000/svg"
            >
            <polygon points="0,0 156,0 260,128 0,128" fill={DEFAULT_THEME[1]} />
            <foreignObject x="20" y="50" width="240" height="100">
                <div className="flex items-center gap-2">
                <img src={LOGO} className="size-8" alt="" />
                <h1 className="font-semibold text-[18px]">Code Ascend</h1>
                </div>
            </foreignObject>
        </svg>

        <div className={`col-span-7 border-2 border-[#E0DBFF] h-28  translate-y-3`}>
            <div className='w-full grid grid-cols-7'>
                <div className='col-span-2 '>
                </div>
                <div className='col-span-5 flex  justify-between  h-40 px-10'>
                    <div className='py-4 '>
                        <CustomTitle text={data.Question} color={DEFAULT_THEME[1]} />
                        <Title text={`Date : ${formatYearMonth(data.startTime)}`} color={DEFAULT_THEME[1]} />
                    </div>
                    <div className='py-7'>
                        <Title text={`Time : ${data.duration} Min`} color={DEFAULT_THEME[1]} />
                        <Title text={`Date : ${formatYearMonth(data.endTime)}`} color={DEFAULT_THEME[1]} />
                    </div>
                </div>

            </div>
        </div>
    
    </div>
  )
}

export default ChallengeHeader