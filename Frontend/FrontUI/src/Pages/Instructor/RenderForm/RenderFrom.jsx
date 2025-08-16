import React, { useEffect, useRef, useState } from 'react'
import { DefaultContext } from 'react-icons/lib';
import { formatYearMonth } from '../../../Utility/Helper';
import ChallengeHeader from '../ChallengeHeader';

const Title = ({ text, color ,status}) => {
    return (
        <div className="relative w-fit mb-2.5">
        <span
            className="absolute bottom-0 left-0 w-full h-2"
            style={{ backgroundColor: color }}
        ></span>
        <h2 className={`relative font-bold ${status ? "text-lg":"text-sm"}`}>{text}</h2>
        </div>
    );
};
const CodeBlock = ({ code }) => (
  <pre className="bg-gray-100 text-sm p-2 rounded-md overflow-x-auto">{code}</pre>
);
const RenderFrom = ({data , containerWidth ,status}) => {
    const [showAllTests, setShowAllTests] = useState(false);
const displayedTests = showAllTests
  ? (data?.testCases || [])
  : (data?.testCases?.slice(0, 2) || []);


    const DEFAULT_THEME =["#F5F4FF",  "#E0DBFF",  "#C9C2F8", "#6C63FF", "#4B4B5C"];
     const resumeRef = useRef(null);
    const [baseWidth, setBaseWidth] = useState(780); // Default value
    const [scale, setScale] = useState(1);

    useEffect(() => {
        if (resumeRef.current) {
        const actualBaseWidth = resumeRef.current.offsetWidth;
        setBaseWidth(actualBaseWidth);
        setScale(containerWidth / actualBaseWidth);
        }
    }, [containerWidth]);
  return (
    <div
        ref={resumeRef}
        className={`bg-white ${status ?"px-3 ":"p-3"}`}
        style={{
        transform: containerWidth > 0 ? `scale(${scale})` : "none",
        transformOrigin: "top left",
        width: containerWidth > 0 ? `${baseWidth}px` : "auto", // Keep the original width when not scaled
        height: "auto",
        }}>
        <div className="flex flex-col bg-white ">
            {
                 <ChallengeHeader
                        data ={data}
                        DEFAULT_THEME = {DEFAULT_THEME}
                        
                    />
            }
            <div className={`${status ?"px-3":"px-5 py-4"}  space-y-4`}>
                <div>
                    <Title text="Problem Description" color={DEFAULT_THEME[1]} status={status}/>
                    <p className={` font-medium ${status ?"text-md":"text-sm"}`}>
                        {data.description}
                    </p>
                </div>
                <div className='grid grid-cols-5 gap-4 '>
                    {
                        !status && (
                            <div className='col-span-4'>
                                <Title text="Function Signature" color={DEFAULT_THEME[1]} status={status} />
                                <CodeBlock code={data.functionSignature} />
                            </div>
                        )
                    }
                    <div className='flex gap-3'>
                        {
                            status?
                            <div>
                                <Title text="Difficulty" color={DEFAULT_THEME[1]} status={status} />
                                <span className={`inline-block bg-yellow-100 text-yellow-700 px-2 py-2 ${status ?"text-sm":"text-xs"}  rounded-full`}>
                                    {data.difficulty}
                                </span>
                            </div>
                            :
                            <div>
                                <Title text="Difficulty" color={DEFAULT_THEME[1]} />
                                <span className={`inline-block bg-yellow-100 text-yellow-700 px-2 py-2 text-xs   rounded-full`}>
                                    {data.difficulty}
                                </span>
                            </div>
                        }
                    </div>

                </div>
                <div className='grid grid-cols-4 gap-4 '>
                    <div className='col-span-2'>
                        <Title text="Examples" color={DEFAULT_THEME[1]} status={status} />
                        {data?.examples?.map((ex, idx) => (
                            <div key={ex._id || idx} className={`mb-2 ${status ?"text-md":"text-sm"}`}>
                            <div><span className="font-semibold">Input:</span> <CodeBlock code={ex.input} /></div>
                            <div><span className="font-semibold">Output:</span> <CodeBlock code={ex.output} /></div>
                            </div>
                        ))}
                    </div>
                   <div className="col-span-2">
                        <Title text="TestCases" color={DEFAULT_THEME[1]}  status={status}/>

                        {displayedTests?.map((ex, idx) => (
                            <div key={ex._id || idx} className={`mb-2 ${status ?"text-md":"text-sm"}`}>
                            <div>
                                <span className="font-semibold">Input:</span>{' '}
                                <CodeBlock code={ex.input} />
                            </div>
                            <div>
                                <span className="font-semibold">Output:</span>{' '}
                                <CodeBlock code={ex.expectedOutput} />
                            </div>
                            </div>
                        ))}
                        {data?.testCases?.length > 2 && (
                            <button
                            onClick={() => setShowAllTests(!showAllTests)}
                            className="mt-2 text-xs text-blue-600 hover:underline"
                            >
                            {showAllTests ? 'Show Less' : 'Read More'}
                            </button>
                        )}
                    </div>
                </div>
                 {
                    (
                        <div className="w-full col-span-2 ">
                            <Title text="Tags" color={DEFAULT_THEME[1]} status={status}/>
                            <div className="flex flex-row items-center flex-wrap gap-3">
                                {data?.tags?.map((tag, index) => {
                                if (!tag) return null;
                                return (
                                    <div
                                    key={`interest_${index}`}
                                    className={`${status ? "text-[14px]":"text-[10px]"} font-medium py-1 px-3 rounded-lg`}
                                    style={{ backgroundColor: DEFAULT_THEME[2] }}
                                    >
                                    {tag}
                                    </div>
                                );
                                })}
                            </div>
                        </div>
                    )
                 }
                
            </div>
            
        </div>
    </div>

      
  )
}

export default RenderFrom