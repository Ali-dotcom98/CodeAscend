import React, { useEffect, useState } from 'react'
import OnlineCompiler from './Components/OnlineCompiler';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import AxiosInstance from '../../Utility/AxiosInstance';
import { API_PATHS } from '../../Utility/API_Path';

const CodeingEnvironment = () => {
  const {ChallengeID} = useParams();
  const [CompetitonDetail, setCompetitonDetail] = useState({})
  const [ActualSubmission, setActualSubmission] = useState({})
  
  
  const fetchCompetitonDetail = async()=>{
    try {
      const response = await AxiosInstance.get(API_PATHS.CHALLENGE.GET_BY_ID(ChallengeID));
      if(response.data)
      {
        setCompetitonDetail(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const CreatSubmission = async()=>{
  try {
    const response = await AxiosInstance.post(API_PATHS.CODE.CREATE , {ChallengeID : ChallengeID})
    if(response.data)
        setActualSubmission(response.data)
  } catch (error) {
    console.log(error);
    
  }
}
  useEffect(()=>{
    fetchCompetitonDetail();
  },[])

  useEffect(()=>{
    CreatSubmission();
  },[])



return (
    <>
      <div className=" min-h-screen rounded-[6px] ">
        

        <main className="">
          <OnlineCompiler
            CompetitonDetail = {CompetitonDetail}
            ActualSubmissionData ={ActualSubmission}
          />
        </main>
        
      </div>

    </>
  );
  
}

export default CodeingEnvironment