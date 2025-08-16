import { LogIn } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import AxiosInstance from '../../Utility/AxiosInstance'
import { API_PATHS } from '../../Utility/API_Path'
import moment from 'moment'

const MyPerformance = () => {

  const [data, setdata] = useState([])
  const [isOpen, setisOpen] = useState(false)
  const [activeindex, setactiveindex] = useState(0)

  const getUserSubmissionData = async ()=>{
    try {
      const response = await AxiosInstance.get(API_PATHS.CODE.GET_ALL_BY_STUDENT);
      if(response.data)
      {
        setdata(response.data)
      }
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    getUserSubmissionData();

  }, [])
  
  const handleDetail = (index)=>{
    setactiveindex((prev)=>prev == index ? prev : index )
    setisOpen((prev)=>!prev)
  }

  const getpriority = (priority)=>{
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
    <div className='min-h-screen px-4 py-4'>
      <h1></h1>
      <div className='grid grid-cols-1 gap-6'>
        {
          data.map((item , index)=>{
            return<div onClick={()=>handleDetail(index)} className='w-full border grid grid-cols-3 bg-purple-50 rounded-xl  border-purple-400  p-2'>
                    <div className='relative overflow-hidden col-span-2 px-4 font-urbanist bg-white rounded-xl py-4  border-r-4 border-b-4 border-2  border-purple-400 cursor-pointer '>
                      <div className='space-y-2 py-0.5'>
                        <h1 className='text-lg font-semibold text-gray-800  line-clamp-2'>{item.challengeID.title}</h1>
                        <p className={` flex items-end justify-start`}><h1 className={`${getpriority(item.challengeID.difficulty)} w-fit px-3`}>{item.challengeID.difficulty}</h1></p>
                        <p className='absolute bg-red-300 text-red-600 top-5 -right-9 rotate-45 min-w-36 text-center'>{Date.now <= item.challengeID.endTime ? "Active " : "Closed" }</p>
                        <p className='text-md text-gray-500 mt-1.5 line-clamp-3 min-h-14'>{item.challengeID.description}</p>
                      </div>
                      <div className='text-xs text-gray-500 flex items-center justify-between py-2'>
                        <p  className='text-[13px] font-medium text-gray-900'>{moment(item.challengeID.startTime).format("Do MMM YYYY")}</p>
                        <p  className='text-[13px] font-medium text-gray-900'>{moment(item.challengeID.endTime).format("Do MMM YYYY")}</p>
                      </div>
                    </div>
                    <div className='relative overflow-hidden col-span-1 space-y-2 px-4 font-urbanist rounded-xl py-4 cursor-pointer '>
                        <h1 className='text-lg font-semibold text-gray-800  line-clamp-2'>Submission Details</h1>
                        <div className='flex  font-medium justify-between'>
                            <div className='w-1/2 text-sm text-gray-500 flex flex-col space-y-3  py-2'>
                                <p>Language: {item.language}</p>
                                <p className={`${item.result === "Passed" ?"bg-green-400" : "bg-red-400"} w-fit px-3 py-0.5 text-gray-900 font-semibold rounded-xl`}>{item.result}</p>
                                <p className='flex gap-1'>Test Cases Passed: <span>{(item.totalTestCaseClear / item.totalTestCase) * 100}</span>%</p>
                            </div>
                            <div className='gap-2  font-semibold text-purple-800 bg-purple-600/15  px-3 py-1.5 rounded cursor-pointer w-1/3 border border-purple-400  flex flex-col items-center justify-center'>
                              <h1 className='text-5xl font-charmonman font-bold'>1</h1>
                              <p className='font-semibold text-[12px]'>Global Rank</p>
                            </div>
                        </div >
                        <div className='text-xs text-gray-500 flex items-center justify-between py-2'>
                            <p className='text-[13px] font-medium text-gray-900'>Memory Used: {item.DetailTestCases[0]?.memory}</p>
                            <p className='text-[13px] font-medium text-gray-900'>Execution Time: {item.DetailTestCases[0]?.time}</p>
                        </div>
                    </div>
                   {
                    isOpen && index === activeindex && (
                      <div className='font-urbanist col-span-3 bg-white p-4 shadow  overflow-auto overflow-x-auto rounded-lg mt-3'>
                        <h2 className="font-semibold mb-2">Test Case Details</h2>
                        {item.DetailTestCases && item.DetailTestCases.length > 0 ? (
                          <table className="min-w-full ">
                            <thead className="bg-gray-100">
                              <tr className='text-left'>
                                <th className='py-3 px-4 text-gray-800 font-medium text-[13px]'>Input</th>
                                <th className='py-3 px-4 text-gray-800 font-medium text-[13px]'>Expected Output</th>
                                <th className='py-3 px-4 text-gray-800 font-medium text-[13px]'>Output</th>
                                <th className='py-3 px-4 text-gray-800 font-medium text-[13px]'>Status</th>
                                <th className='py-3 px-4 text-gray-800 font-medium text-[13px]'>Execution Time</th>
                                <th className='py-3 px-4 text-gray-800 font-medium text-[13px] hidden md:table-cell'>Memory Used</th>
                              </tr>
                            </thead>
                            <tbody>
                              {
                                item.DetailTestCases.map((item)=>(
                                  <tr key={item._id} className='border-t border-gray-200'>
                                    <td className='my-3 mx-4 text-gray-700 text-[13px line-clamp-1 overflow-hidden]'>{JSON.stringify(item.input)}</td>
                                    <td className="p-4 text-gray-700 text-[13px] text-nowrap">
                                      {item.expected}</td>
                                    <td className="p-4 text-gray-700 text-[13px] text-nowrap">{item.output}</td>
                                    <td className={`p-4 text-gray-700 text-[13px] text-nowrap `}><p className={` flex items-center justify-center w-fit px-2 py-1 rounded-xl ${item.status == "Accepted"?"bg-green-200 text-green-600":"bg-red-600 text-red-200" }`}>{item.status}</p></td>
                                    <td className="p-4 text-gray-700 text-[13px] text-nowrap">{item.time} sec</td>
                                    <td className="p-4 text-gray-700 text-[13px] text-nowrap hidden md:table-cell">{item.memory} bytes</td>
                                  </tr>
                                ))
                              }
                            </tbody>
                          </table>
                        ) : (
                          <p>No test case details available.</p>
                        )}
                      </div>
                    )
                  }

            </div>
          })
        }
      </div>
   
    </div>
  )
}

export default MyPerformance