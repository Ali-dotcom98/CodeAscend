import React from 'react'
import Input from '../../../Components/input'
import { LuPlus, LuTrash2 } from 'react-icons/lu'

const TestCasesForm = ({testCases,updateArrayItem,AddItemInArray,removeArrayItem}) => {
  return (
    <div className="px-5 pt-5 min-h-[30vw]">
        <h2 className="text-lg font-semibold text-gray-900">Test Cases</h2>

        <div className="mt-4 flex flex-col gap-4 mb-3">
        {testCases.map((items, index) => (
            <div key={index} className="border border-gray-200/80 p-4 rounded-lg relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                    <Input
                    label="Input"
                    placeholder="[3, 1, 7, 0, -2]"
                    type="text"
                    value={items.input || ""}
                    onchange={({ target }) =>
                        updateArrayItem(index, "input", target.value)
                    }
                    />
                </div>
                 <div className="col-span-1">
                    <Input
                    label="Output"
                    placeholder="[7, -2]"
                    type="text"
                    value={items.expectedOutput || ""}
                    onchange={({ target }) =>
                        updateArrayItem(index, "expectedOutput", target.value)
                    }
                    />
                </div>
            </div>

    
            {testCases.length > 1 && (
                <button
                type="button"
                className="absolute top-3 flex items-center right-3 text-sm text-red-500 hover:underline cursor-pointer"
                onClick={() => removeArrayItem(index)}
                >
                <LuTrash2 />
                </button>
            )}
            </div>
        ))}

        <button
            type="button"
            className="self-start flex items-center gap-2 px-4 py-2 rounded bg-purple-100 text-purple-800 text-sm font-medium hover:bg-purple-200 cursor-pointer"
            onClick={() =>
            AddItemInArray({
                input: "",
                expectedOutput: "",
            })
            }
        >
            <LuPlus /> Add Testcases
        </button>
        </div>
    </div>
  )
}

export default TestCasesForm