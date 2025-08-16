import React, { useEffect, useState } from 'react'
import ChallengeCard from "../../Components/Cards/ChallengeCard";
import AxiosInstance from '../../Utility/AxiosInstance';
import { API_PATHS } from '../../Utility/API_Path';
import moment from 'moment';
import { Navigate, useNavigate } from 'react-router-dom';

const ManagaCometition = () => {
    const navigator = useNavigate();
    const [AllChallenge, setAllChallenge] = useState([])
    const [DeletedArray, setDeletedArray] = useState([])
    const [Select, setSelect] = useState(false)

    
    console.log("AllChallenge",AllChallenge);
    
    console.log(DeletedArray);
    
    
    const fetchAllResumes = async () => {
        try {
        const response = await AxiosInstance.get(API_PATHS.CHALLENGE.GET_ALL); 
        setAllChallenge(response.data);
        } catch (error) {
        console.error("Error fetching resumes:", error);
        }
    };

    const handleChanges = (id , ischecked)=>{
        console.log(id , ischecked);

        const isExist = DeletedArray.includes(id) ? false : ischecked
        if(isExist)
        {
            setDeletedArray(prev=>[...prev , id])
        }
        else
        {
            setDeletedArray((prev)=>prev.filter((item)=> item!=id))
        }

    }

    const HandleDelete = async()=>{
        try {
             const response = await AxiosInstance.delete(API_PATHS.CHALLENGE.DELETE_LIST , { data : {DeletedArray}})
            if(response)
                setDeletedArray([]);
                fetchAllResumes();
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(() => {
        fetchAllResumes();
    }, []);

    return (
    <>
        <div className="flex font-urbanist mb-4 items-center justify-between h-fit bg-white rounded-lg border border-purple-100 py-3 px-4  mt-2">

            <button onClick={()=>(setSelect((prev)=>!prev), setDeletedArray([]))} className='btn-small-light' >Select</button>
            {
                Select && DeletedArray.length > 0 && (
                    <button className='btn-small-light' onClick={HandleDelete}>Delete {(DeletedArray.length)}</button>
                )
            }
            
        </div>
        <div className="font-urbanist grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-5 pt-1 pb-6 px-4 md:px-0  min-h-screen">
            {AllChallenge?.map((Challenge , index) => (
            <div onClick={()=>handleChanges(Challenge._id , true)}>
                <ChallengeCard
                    ID={Challenge?._id}
                    imgurl={Challenge?.thumbnailLink || null}
                    title={Challenge?.title || "Untitled Resume"}
                    lastUpdated={
                    Challenge?.updatedAt
                        ? moment(Challenge.updatedAt).format("Do MMM YYYY")
                        : "Unknown"
                    }
                    DeletedArray={DeletedArray}
                />
                <div className='flex flex-col my-2 space-y-1.5'>
                    {
                        Select && (
                        <input className='p-3 bg-slate-50 relative outline-none rounded-md' type="checkbox"  name='Check' checked={DeletedArray.includes(Challenge._id)}
                            onChange={({target})=>handleChanges(Challenge._id , target.checked)}
                        />
                        )
                    }
                </div>

            </div>
            
            ))}
        </div>
    </>
    )
}

export default ManagaCometition