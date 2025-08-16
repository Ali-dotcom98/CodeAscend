import React from 'react'
import Input from '../../../Components/input';

const BasicChallengeInfoForm = ({Question,Description, Difficulty, updateSection ,language ,UpdateSectionPro}) => {
    const handleDiffulty = ()=>{
        
    }
     return (
        <div className="px-5 pt-5 min-h-[30vw]">
            <h2 className="text-lg  font-semibold text-gray-900">Basic Information</h2>

            <div className="mt-4">
                {/* <PhotoSelector
                    image={profileData?.profileImg || profileData?.profilePreviewUrl}
                    setImage={(value) => updateSection("profileImg", value)}
                    preview={profileData?.profilePreviewUrl}
                    setPreview={(value) => updateSection("profilePreviewUrl", value)}
                /> */}

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <Input
                    value={Question || ""}
                    onchange={({ target }) => updateSection("Question", target.value)}
                    label="Title"
                    placeholder="Max and Min Number"
                    type="text"
                    />

                    <div className='flex flex-col my-2 space-y-1.5'>
                        <label htmlFor=""  className="font-medium">Difficulty</label>
                        <select value={Difficulty} onChange={({target})=>updateSection("difficulty",target.value)} className='p-3 bg-slate-50 relative outline-none rounded-md' name="" id="">
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>

                    <div className='flex flex-col my-2 space-y-1.5'>
                        <label htmlFor="" className="font-medium">language</label>
                        <select  className='p-3 bg-slate-50 relative outline-none rounded-md' name="" value={language} onChange={({target})=>UpdateSectionPro("language", target.value)} id="">
                            <option value="C++">C++</option>
                            <option value="Java">Java</option>
                            <option value="C">C</option>
                            <option value="Python">Python</option>

                        </select>
                    </div>



                    {/* <Input
                        value={Description || ""}
                        onchange={({ target }) => updateSection("description", target.value)}
                        label="Description"
                        placeholder="Write a function that takes an array of integers and returns the maximum and minimum numbers as a tuple or list"
                        type="text"
                    /> */}
                </div>

                <div className="col-span-2 mt-3 ">
                    <label className="text-xs font-medium text-slate-600">
                    Description
                    </label>
                    <textarea
                        placeholder="Write a function that takes an array of integers and returns the maximum and minimum numbers as a tuple or list."
                        className="form-input resize-none"
                        rows={4}
                        value={Description|| ""}
                        onChange={({ target }) => updateSection("description", target.value)}
                    />
                </div>
            </div>

            {/* <button
            onClick={onNext}
            className="btn-primary mt-4"
            >
            Next
            </button> */}
        </div>
    );
}

export default BasicChallengeInfoForm