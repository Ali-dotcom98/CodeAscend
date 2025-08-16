import { TrophyIcon } from 'lucide-react'
import React from 'react'

const LeaderBoardHeader = ({TopPerformers}) => {
  return (
     <div className='relative min-h-[150px] grid grid-cols-3 border mt-8 rounded-xl p-4 text-black bg-purple-200 border-purple-400  overflow-hidden'>
       

        <div className='col-span-1 relative '>
            <div className='absolute translate-x-12 translate-y-9 text-purple-600  '>
              <div className='flex'>
                <TrophyIcon className='size-8 -translate-y-3'/>
                <TrophyIcon className='size-11 -translate-y-2'/>
                <TrophyIcon className='size-16'/>
                <TrophyIcon className='size-11 -translate-y-2'/>
                <TrophyIcon className='size-8 -translate-y-3'/>
              </div>
            {/* <img src={Award} className='size-64 ' alt="" /> */}
        </div>

        </div>
        <div className="col-span-1 text-lg space-y-2 font-medium text-black   line-clamp-2 flex flex-col items-center justify-center ">
          <h1 className='text-2xl'>Code Ascend</h1>
          <p>Coding Competition • Live Rankings</p>
          <p className='text-xs'>Where the Best Rise to the Top</p>
        </div>

        <div className='col-span-1   mr-3'>
          {
            TopPerformers.map((item, index) => (
            <div 
              key={item._id._id || index} 
              className="flex items-center justify-between text-[14px] font-medium border-b border-purple-400 w-full space-y-4 px-4"
            >
              <div className="flex items-center space-x-4 ">
                <span className={`rounded-lg size-9  flex items-center justify-center ${index+1 == 1 ? "bg-[#FFD700]": index+1 == 2 ?"bg-[#C0C0C0]":"bg-[#CD7F32]"}`}>
                  <div className='text-lg'>{index + 1}</div>
                </span>
                <h1 className="">{item._id.name}</h1>
                
              </div>

              <div>
                <h1 className=" mb-4">
                  {item.submissionCount * 987} points
                </h1>
              </div>
            </div>
          ))

          }
        </div>
        <div className='absolute  bottom-0 z-20 '>
            <svg className='h-24 w-full overflow-hidden' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#c084fc " fill-opacity="1" d="M0,224L288,64L576,160L864,32L1152,224L1440,320L1440,320L1152,320L864,320L576,320L288,320L0,320Z"></path></svg>
        </div>
        <div className='absolute  bottom-0 '>
            <svg className='h-24 translate-x-2 w-full overflow-hidden' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#9333ea" fill-opacity="1" d="M0,224L288,64L576,160L864,32L1152,224L1440,320L1440,320L1152,320L864,320L576,320L288,320L0,320Z"></path></svg>
        </div>
        
      </div>
  )
}

export default LeaderBoardHeader