import React from 'react'
import { Commet } from 'react-loading-indicators'

const Spinner = ({message}) => {
  return (
    <div className="font-urbanist flex flex-col items-center justify-center h-screen">
        <Commet color="#c084fc" size="medium" text="" textColor="#ffffff" />
        <p className="mt-4 text-md font-medium text-gray-800">{message}</p>
    </div>
  )
}

export default Spinner