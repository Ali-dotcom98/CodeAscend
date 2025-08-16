import React from 'react'

const ListofPerformer = ({ user }) => {
  return (
    <div className="space-y-4">
        {user && user.length > 0 ? (
        user.map((item, index) => (
            <div
            key={index}
            className="bg-white shadow rounded-lg p-4 flex justify-between items-center border border-gray-200"
            >
            {/* Left side - rank */}
            <div className="text-xl font-bold text-purple-600">
                #{item.rank}
            </div>

            {/* Middle - user details */}
            <div className="flex-1 ml-4">
                <div className="font-semibold text-gray-800">
                {item.studentID?.name || "Unknown User"}
                </div>
                <div className="text-sm text-gray-500">
                {item.studentID?.email}
                </div>
            </div>

            {/* Right side - stats */}
            <div className="text-right">
                <div className="text-sm text-gray-700">
                Test Cases:{" "}
                <span className="font-medium">
                    {item.totalTestCaseClear}/{item.totalTestCase}
                </span>
                </div>
                <div className="text-sm text-gray-500">
                Time: {item.executionTime}s
                </div>
            </div>
            </div>
        ))
        ) : (
        <div className="text-gray-500 text-center">No performers found</div>
        )}
    </div>
    )
}

export default ListofPerformer
