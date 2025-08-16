import React from 'react'

const ListPerformerHeader = ({onClose}) => {
  return (
    <div className='flex items-center justify-between mb-4'>
        <h1 className='font-medium text-lg'>Top Performers</h1>
        <button
            onClick={()=>onClose()}
            type="button"
            className=" bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 flex justify-center items-center "
        >
            <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
            >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1l12 12M13 1L1 13"
            />
            </svg>
        </button>
    </div>
  )
}

export default ListPerformerHeader