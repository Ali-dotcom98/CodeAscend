import React, { useEffect, useState } from 'react';
import { LuTrophy, LuUsers } from 'react-icons/lu';
import KK from "./assets/KK.svg";
import { useNavigate } from 'react-router-dom';
import AxiosInstance from '../../Utility/AxiosInstance';
import { API_PATHS } from '../../Utility/API_Path';
import Table1 from "../../Components/Table1";

import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";
import ChallengeCard from '../../Components/Cards/ChallengeCard';
import moment from 'moment';
const Dashboard = () => {
  const [Table, setTable] = useState([]);
  const [demoData, setdemoData] = useState({
    totalChallenges: 0,
    activeStudents: 0,
    submissionsPerDay: [],
    problemsByDifficulty: {}
  });
  console.log(demoData);
  

  const [AllChallenge, setAllChallenge] = useState([])

  const navigator = useNavigate();

  const FetchContent = async () => {
    try {
      const result = await AxiosInstance.get(API_PATHS.CHALLENGE.GET_ALL_DASHBOARD);
      setTable(result.data);
      setAllChallenge(result.data)
    } catch (error) {
      console.log(error);
    }
  };

  const FetchGraphData = async () => {
    try {
      const result = await AxiosInstance.get("/Chlg/ak");
      setdemoData(prev => ({ ...prev, ...result.data }));
    } catch (error) {
      console.log(error);
    }
  };
  

  useEffect(() => {
    FetchContent();
    FetchGraphData();
  }, []);

  const HandleClick = () => navigator("/Instructor/Create");

  return (
    <div className="p-2 space-y-6 bg-gray-50 min-h-screen translate-y-3 font-urbanist">
      <div className="grid grid-cols-5 gap-2">
        <div className="col-span-2 px-3">
          <div className='bg-[#6c63ff] h-32 mb-3 relative overflow-hidden rounded-md font-urbanist'>
            <div className='absolute size-56 rounded-full -left-12 top-3 bg-white' />
            <div className='absolute left-0 top-2 z-0 translate-x-3'>
              <img src={KK} className='size-32' alt="" />
            </div>
            <div className='p-3 translate-x-44 translate-y-4 w-fit'>
              <p className='text-md font-extrabold font-urbanist text-white'>
                Create and Manage <br /> Coding Challenges
              </p>
              <div className='flex items-center justify-start'>
                <button
                  onClick={HandleClick}
                  className='px-5 py-0.5 mt-2 text-sm font-medium bg-white text-black shadow-lg shadow-purple-600/5 rounded-md my-1 hover:bg-slate-200'
                >
                  View
                </button>
              </div>
            </div>
          </div>

          <div className="flex w-full gap-2 font-urbanist">
            <div className="bg-white w-full h-fit px-2 py-4 gap-2 rounded-2xl flex">
              <div className='bg-purple-300 w-fit h-fit p-2 rounded-full'><LuTrophy/></div>
              <div className='flex'>
                <h2 className="text-gray-500 text-md">Total Challenges</h2>
                <p className="text-2xl font-bold text-[#6c63ff] flex items-end">{demoData.totalChallenges}</p>
              </div>
            </div>
            <div className="bg-white w-full h-fit px-2 py-4 gap-2 rounded-2xl flex">
              <div className='bg-purple-300 w-fit h-fit p-2 rounded-full'><LuUsers/></div>
              <div className='flex gap-10'>
                <h2 className="text-gray-500 text-md">Active <p>Students</p></h2>
                <p className="text-2xl font-bold text-[#6c63ff] flex items-end">{demoData.activeStudents}</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-3 mt-3'>
            <p className=' w-fit text-[12px] font-medium text-white bg-[#6c63ff] px-3 py-0.5 rounded mt-1'>
              Submissions Per Day
            </p>
            <div className="bg-white py-3 px-1 rounded-2xl">
              <LineChart
                  
                  xAxis={[
                    {
                      data:
                        demoData?.submissionsPerDay?.map(item =>
                          moment(item.date).format("Do MMM")
                        ) || [],
                      scaleType: "point",
                    },
                  ]}
                  series={[
                    {
                      data: demoData?.submissionsPerDay?.map(item => item.count) || [],

                      color: "#6c63ff",
                    },
                  ]}
                  height={200}
                  grid={{ vertical: true, horizontal: true }}
              />
            </div>
          </div>
        </div>

        <div className="col-span-3 px-3 w-full flex flex-col gap-5">
          <div className='flex flex-col gap-3'>
            <p className=' w-fit text-[12px] font-medium text-white bg-[#6c63ff] px-3 py-0.5 rounded mt-1'>
                  Recently Created 
            </p>
            <div className="font-urbanist grid grid-cols-1 md:grid-cols-3 md:gap-2 md:px-0 ">

                {AllChallenge?.map((Challenge) => (
                  <ChallengeCard
                    key={Challenge?._id}
                    at = "Dashboard"
                    imgurl={Challenge?.thumbnailLink || null}
                    title={Challenge?.title || "Untitled Resume"}
                    lastUpdated={
                      Challenge?.updatedAt
                        ? moment(Challenge.updatedAt).format("Do MMM YYYY")
                        : "Unknown"
                    }
                    lastcreated={
                      Challenge?.createdAt
                        ? moment(Challenge.createdAt).format("Do MMM YYYY")
                        : "Unknown"
                    }
                    onSelect={() => navigator(`/Instructor/Challenge/${Challenge._id}` )}
                  />
                ))}
            </div>
          </div>
          <div className='flex flex-col gap-3'>
              <p className=' w-fit text-[12px] font-medium text-white bg-[#6c63ff] px-3 py-0.5 rounded mt-1'>
                  Challenge Overview 
              </p>
              <div>
                <Table1 tableData={Table} />
              </div>
          </div>
         
        </div>
      
        
      </div>

      

    </div>
  );
};

export default Dashboard;
