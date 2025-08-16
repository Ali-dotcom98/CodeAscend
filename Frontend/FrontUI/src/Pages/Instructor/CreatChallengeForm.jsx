import React, { useState } from 'react'
import Input from '../../Components/input'
import AxiosInstance from '../../Utility/AxiosInstance'
import { API_PATHS } from '../../Utility/API_Path'
import { useNavigate } from 'react-router-dom'

const CreatChallengeForm = () => {
  const [Title, setTitle] = useState("")
  const [error, seterror] = useState("")
  const navigate = useNavigate();

  const handleCreateChallenge = async (e) => {
    e.preventDefault();
    if (!Title) {
      seterror("Please enter a challenge title");
      return;
    }
    seterror("")
    const response = await AxiosInstance.post(API_PATHS.CHALLENGE.CREATE, { title: Title })
    if (response.data?._id) {
      navigate(`/Instructor/Challenge/${response.data._id}`);
    }
  }

  return (
    <div className="font-urbanist w-[90vw] md:w-[39vw] px-6 flex flex-col justify-center ">
      <h3 className="text-lg font-semibold text-black">Create New Competition Challenge</h3>
      <p className="text-xs text-slate-700 mt-[5px] mb-3">
        Give your competition a title to get started. You can edit all details later.
      </p>

      <form onSubmit={handleCreateChallenge}>
        <Input
          value={Title}
          onchange={(e) => setTitle(e.target.value)}
          label="Problem Title"
          placeholder="e.g., Palindrome Checker"
          type="text"
        />

        {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

        <button type="submit" className="btn-primary">
          Create Challenge
        </button>
      </form>
    </div>
  )
}

export default CreatChallengeForm
