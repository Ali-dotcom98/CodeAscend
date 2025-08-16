import React from 'react'
import { formatYearMonth } from '../../../Utility/Helper'
import img from '../../../assets/images.jpg'
import Progress from "../../Progress/StepProgress"
import moment from 'moment'
const ChallengeCard  = ({  
    tag,
    ID,
    title, 
    description,
    priority,
    endTime,
    status,
    startTime,
    onselect,
    onclick
    
    }) => {
        
        
    const statusColot = ()=>{
        switch(status)
        {
            case "In Progress":
                return "text-cyan-500 bg-cyan-50 border border-cyan-500/10";
            
            case "Completed":
                return "text-lime-500 bg-lime-50 border border-lime-500/20";

            default:
                return "text-violet-500 bg-violet-50 border border-violet-500/10"
        }
    }
  
    const getpriority = ()=>{
        switch(priority)
        {
            case "Easy":
                return "text-emerald-500 bg-emerald-50 border border-emerald-500/10";

            case "Medium":
            return "text-amber-500 bg-amber-50 border border-amber-500/10";

            default:
                return "text-rose-500 bg-rose-50 border border-rose-500/10";


        }
    }
  return (
    <div className='relative overflow-hidden font-urbanist bg-white rounded-xl py-4 shadow-md shadow-gray-100 border border-x-gray-200/50 cursor-pointer' 
    onClick={()=>onselect(ID)} >
        <div className='flex items-end gap-3 px-4 '>
            <div className={`text-[11px] font-medium ${getpriority()} px-4 py-0.5 rounded`}>
                {
                    priority 
                }
            </div>
            <div className={`text-[11px] font-medium ${statusColot()} px-4 py-0.5 rounded`}>
                {
                    status== null  ? "Min" : `Duration : ${status} Min`
                }
            </div>
            

        </div>
        <div className={`px-4 border-l-[3px] border-purple-600 space-y-3`}>
            <p className='text-sm font-medium text-gray-800 mt-4 line-clamp-2'>{title}</p>
            <p className='text-xs text-gray-500 mt-1.5 line-clamp-3 leading-[18px] min-h-14'>{description}</p>
                {
                    tag && (
                    <p className='absolute bg-red-300 text-red-600 top-5 -right-9 rotate-45 min-w-36 text-center'>{Date.now <= endTime ? "Active " : "Closed" }</p>

                    )
                }
            <Progress progres={100} status={status}/>
        </div>
        <div className='px-4'> 
            <div className='flex items-center justify-between my-1'>
                <div>
                    <label htmlFor="" className='text-xs text-gray-500'>Start date</label>
                    <p className='text-[13px] font-medium text-gray-900'>
                        {
                            moment(startTime).format("Do MMM YYYY")
                        }
                    </p>
                </div>
                <div>
                    <label htmlFor="" className='text-xs text-gray-500'>End Date</label>
                    <p className='text-[13px] font-medium text-gray-900'>
                        {
                            moment(endTime).format("Do MMM YYYY")
                        }
                    </p>
                </div>
            </div>
            {/* <div className='flex items-center justify-between mt-3'>
                <AvatarGroup avatars={assignedTo || {}} />
                {
                    attachmentCount >= 0 && (
                        <div className='flex items-center gap-2 bg-blue-50 px-2.5 py-1.5 rounded-lg'>
                            <LucidePaperclip className='text-task_primary'/>
                            <span className='text-xs text-gray-900  '>{attachmentCount}</span>
                        </div>
                    )
                }
            </div> */}
        </div>
        <div>

        </div>

    </div>
  )
}

export default ChallengeCard 