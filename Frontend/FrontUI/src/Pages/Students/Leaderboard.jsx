import React, { useEffect, useState } from 'react'
import AxiosInstance from '../../Utility/AxiosInstance'
import { API_PATHS } from '../../Utility/API_Path'
import { Trophy, TrophyIcon } from 'lucide-react'
import LeaderBoardHeader from './Components/LeaderBoardHeader'
import ChallengeCard from '../../Components/Cards/User/ChallengeCard '
import ListPerformerHeader from './Components/ListPerformerHeader'
import ListofPerformer from './Components/ListofPerformer'
import Spinner from "../../Components/Spinner/Spinner"
const Leaderboard = () => {
  const [TopPerformers, setTopPerformers] = useState([])
  const [LeaderBoardData, setLeaderBoardData] = useState([])
  const [TopPerformerOfChallenge, setTopPerformerOfChallenge] = useState([])
  console.log("TopPerformerOfChallenge",TopPerformerOfChallenge);
  
  const [display, setdisplay] = useState("")
  console.log("LeaderBoardData",LeaderBoardData);
  const [isLoading, setisLoading] = useState(false)
  
  const FetchTopPerformer = async()=>{
    try {
      const response = await AxiosInstance.get(API_PATHS.CODE.GET_TOP_PERFORMER);
      if(response.data)
      {
        setTopPerformers(response.data)
      }
      
    } catch (error) {
      console.log(error);
      
    }
  }

  const FetchTopPerformerOfSpecificChallenge = async()=>{
    try {
        setisLoading(true)
        const response = await AxiosInstance.get(API_PATHS.CODE.GET_CHALLENGE_PERFORMER(display));
        if(response.data)
        {
          setTopPerformerOfChallenge(response.data);
        }
    } catch (error) {
      setisLoading(false)
      console.log(error);
    }
    finally{
      setisLoading(false);
    }
  }
  useEffect(()=>{
    if(display)
    {
      FetchTopPerformerOfSpecificChallenge();
    }
  },[display])

  const ConfirmID = (ID)=>{
    setdisplay(ID);
  }
  const FetchCompletedChallenges = async()=>{
    try {
      const result = await AxiosInstance.get(API_PATHS.CHALLENGE.GET_LEADERBOARD);
      if(result.data)
      {
        setLeaderBoardData(result.data)
      }
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(()=>{
    FetchTopPerformer();
  },[])
  useEffect(() => {
    FetchCompletedChallenges();
  }, [])
  

  return (
    <div  className='relative font-urbanist min-h-screen  px-4 '>
      <LeaderBoardHeader TopPerformers={TopPerformers} />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
              {
                LeaderBoardData.map((item)=>{
                return ( 
                  <ChallengeCard
                      tag={"Leaderboard"}
                      ID={item._id}
                      title = {item.title}
                      description = {item.description}
                      priority= {item.difficulty}  
                      startTime={item.startTime}
                      endTime={item.endTime}
                      status ={item.duration}
                      dueDate = {item.dueDate || ""}
                      onselect={(ID)=>ConfirmID(ID)}
                    
                  />
                )
                })
              }
      </div>
      <div   className={`min-h-screen border rounded-md bg-slate-50 px-5 py-5 absolute w-1/2 top-0 right-0 transform transition-transform duration-500 ease-in-out ${display ? "translate-x-0":"-right-32 translate-x-full"}`}>
            {
              isLoading ? <Spinner/>
                :
                <>
                <ListPerformerHeader
                  onClose={()=>setdisplay("")}
                />
                <ListofPerformer 
                  user = {TopPerformerOfChallenge}
                />
                </>

            }
      </div>

    </div>
  )
}

export default Leaderboard