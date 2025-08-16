import React, { useState } from 'react'
import Input from '../../../Components/input'
import { LuPlus, LuTrash2 } from 'react-icons/lu'
import { formatYearMonth } from '../../../Utility/Helper'
import moment from 'moment'
import { data } from 'react-router-dom'

const FunctionSettingsForm = ({language,functionSignature,startTime,duration,isPublic,tags,updateSection ,endTime, AddItemInArray , removeArrayItem ,updateArrayItem , inputType , outputType , UpdateSectionPro}) => {
    const [AddArray, setAddArray] = useState(false)
    console.log("endTime" , endTime);
    const formatDate = (date) => {
    if (!date) return '';
    return new Date(date).toISOString().split('T')[0];
    };

    return (
    <div className="px-5 pt-5">
            <h2 className="text-lg  font-semibold text-gray-900">FunctionSettings</h2>
            <div className="mt-4">
                <div className='flex flex-col my-2 space-y-1.5'>
                    <label htmlFor=""  className="font-medium">isPublic</label>
                    <input type="checkbox" checked={isPublic} onChange={({target})=>updateSection("isPublic", target.checked)} name="" id="" />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <Input
                    label="Start Date"
                    type="date"
                    value={startTime ? moment(startTime).format('YYYY-MM-DD') : ''}
                    onchange={({ target }) => updateSection("startTime", target.value)}
                    />
                    <Input
                    label="endTime"
                    type="date"
                    value={endTime ? moment(endTime).format('YYYY-MM-DD') : ''}
                    onchange={({ target }) => updateSection("endTime", target.value)}
                    
                    />

                    <Input
                    value={duration || ""}
                    onchange={({ target }) => updateSection("duration", target.value)}
                    label="duration"
                    placeholder="30 min "
                    type="Number"
                    />

                   


                </div>

                <div className="col-span-2 mt-3 ">
                    <label className="text-xs font-medium text-slate-600">
                    functionSignature
                    </label>
                    <textarea
                        placeholder="def max_min(arr):"
                        className="form-input resize-none"
                        rows={4}
                        value={functionSignature|| ""}
                        onChange={({ target }) => updateSection("functionSignature", target.value)}
                    />
                </div>

                {
                    language != "Python" && (
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                     <div className='flex flex-col my-2 space-y-1.5'>
                        <label htmlFor="" className="font-medium">ReturnType</label>
                        <select  className='p-3 bg-slate-50 relative outline-none rounded-md' name="" value={outputType} onChange={({target})=>UpdateSectionPro("outputType", target.value)} id="">
                            <option value="boolean++">Boolean</option>
                            <option value="int">Integer</option>
                            <option value="long">Long</option>
                            <option value="String">String</option>

                        </select>
                    </div>
                     <div className='flex flex-col my-2 space-y-1.5'>
                        <div className='flex flex-row items-center justify-between'>
                            <label htmlFor="" className="font-medium capitalize">Parameter Type</label>
                            <div className='flex gap-4'>
                                <label htmlFor="">Array</label>
                                <input type="checkbox" checked={AddArray} onChange={()=>setAddArray((prev)=>!prev)} />
                            </div>
                        </div>
                        {
                            !AddArray ?(
                                <select  className='p-3 bg-slate-50 relative outline-none rounded-md' name="" value={inputType} onChange={({target})=>UpdateSectionPro("inputType", target.value)} id="">
                                    <option value="boolean">Boolean</option>
                                    <option value="int">Integer</option>
                                    <option value="long">Long</option>
                                    <option value="String">String</option>

                                </select>
                            ):(
                                <select  className='p-3 bg-slate-50 relative outline-none rounded-md' name="" value={inputType} onChange={({target})=>UpdateSectionPro("inputType", target.value)} id="">
                                    <option value="boolean">Boolean</option>
                                    <option value="int[]">Integer [ ] </option>
                                    <option value="long[]">Long [ ]</option>
                                    <option value="String[]">String [ ]</option>

                                </select>
                            )
                        }
                    </div>
                </div>
                    ) 
                }
                 <div className="mt-4 flex flex-col gap-4 mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">Tags</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4" >
                        {tags?.map((tag, index) => (
                            
                            <div className="relative border border-gray-200/80 p-4 rounded-lg col-span-2">
                                <Input
                                    placeholder="e.g. Array Stack"
                                    value={tag || ""}
                                    onchange={({ target }) =>
                                    updateArrayItem(index, null, target.value)
                                    }
                                />
                                    {tags.length > 1 && (
                                        <button
                                        type="button"
                                        className="absolute -translate-x-5  -translate-y-10  flex items-center right-3 text-sm text-red-500 hover:underline cursor-pointer"

                                            onClick={() => removeArrayItem( index)}
                                            >
                                            <LuTrash2 />
                                            </button>
                                        )}
                                    </div>
                                
                            ))}
                        <button
                            type="button"
                            className="w-fit flex items-center gap-2 px-4 py-2 rounded bg-purple-100 text-purple-800 text-sm font-medium hover:bg-purple-200 cursor-pointer"

                            onClick={() => AddItemInArray("")}
                        >
                            <LuPlus /> Add Tags

                        </button>
                    </div>
                </div>
            </div>

                {/* <button
                onClick={onNext}
                className="btn-primary mt-4"
                >
                Next
                </button> */}
        </div>
    )
}

export default FunctionSettingsForm