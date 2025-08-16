import React from 'react';
import { Terminal } from 'lucide-react';

const   InputSection = ({ input, setInput }) => {
  return (
    <div className="font-urbanist min-h-[15vw]   bg-white rounded-lg border border-purple-100">
      <div className="text-lg font-bold text-gray-900 px-5 py-3 flex bg-purple-200 rounded-tr rounded-tl">
        <Terminal className="h-4 w-4 text-slate-400 mr-2" />
        <span className="text-sm  ml-2 ">Input</span>
      </div>
      
      <textarea
        placeholder="Enter program input here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full  text-gray-900 p-4 resize-none  outline-none font-mono text-sm placeholder:text-gray-900"
      />
    </div>
  );
};

export default InputSection;
