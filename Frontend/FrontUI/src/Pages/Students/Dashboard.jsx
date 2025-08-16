import { Ban } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Banner from './Banner/Banner'
import AxiosInstance from "../../Utility/AxiosInstance"
import { API_PATHS } from '../../Utility/API_Path'
import ChallengeCard from '../../Components/Cards/User/ChallengeCard '
import Model from "../../Layouts/Modal.jsx"
import { data, useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigator = useNavigate();
  const [Data, setData] = useState([]);
  const [ConfirmId, setConfirmId] = useState("")
  const [Confirmation, setConfirmation] = useState(false)

  const fetchAllResumes = async () => {
    try {
      const response = await AxiosInstance.get(API_PATHS.CHALLENGE.GET_PUBLIC_CHALLENGE); 
      setData(response.data);
    } catch (error) {
      console.error("Error fetching resumes:", error);
    }
  };

  const ConfirmID = (ID)=>{  
    setConfirmation(true)
    setConfirmId(ID)
  }
  useEffect(() => {
    fetchAllResumes();
  }, []);
  const handleAfterConfirmation = ()=>{
    navigator(`/Student/Editor/${ConfirmId}`)
  }
  return (
    <div className=' px-4'>
      <Banner/>
      {/* {
        JSON.stringify(Data)
      } */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
        {
          Data.map((item)=>{
          return ( 
            <ChallengeCard
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
      <Model
  isOpen={Confirmation}
  onClose={() => setConfirmation((prev) => !prev)}
  type="Confirmation"
  title="Participation Guidelines"
>
  <div className="space-y-4 text-sm text-gray-700 px-5 py-3">
    <p>
      You are about to participate in a live coding competition. Please read the following guidelines carefully before proceeding:
    </p>

    <ul className="list-disc list-inside space-y-1">
      <li>Do <strong>not</strong> open a new tab or window during the competition.</li>
      <li>Do <strong>not</strong> switch or navigate away from the current tab.</li>
      <li>All activities are monitored. Any form of cheating or suspicious behavior will lead to <strong>immediate disqualification</strong>.</li>
    </ul>

    <p className="font-medium">
      By proceeding, you agree to abide by these rules. Failure to comply will result in elimination from the competition.
    </p>
    <button className='btn-primary' onClick={handleAfterConfirmation}>Confirm</button>
  </div>
</Model>




    </div>
  )
}

export default Dashboard