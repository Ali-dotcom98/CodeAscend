import React from 'react';
import { Terminal, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';

const OutputSection = ({ output, status }) => {
  const getStatusIndicator = () => {
    
    switch (status) {
      case 'running':
        return <RefreshCw className="h-4 w-4 text-blue-400 animate-spin" />;
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-800" />;
      case 'error':
        return <AlertCircle className="h-4 w-4 text-red-800" />;
      default:
        return <Terminal className="h-4 w-4 text-slate-400" />;
    }
  };

  const getHeaderClass = () => {
    switch (status) {
      case 'running':
        return 'bg-slate-900';
      case 'success':
        return 'bg-green-200';
      case 'error':
        return 'bg-red-200';
      default:
        return 'bg-purple-200';
    }
  };

  return (
    <div className="font-urbanist min-h-[15vw]  bg-white rounded-lg border border-purple-100">
      <div className={`text-lg font-bold text-gray-900 px-5 py-3 flex  rounded-tr rounded-tl ${getHeaderClass()}`}>
        {getStatusIndicator()}
        <span className="text-sm  ml-2 ">Output</span>
      </div>

      <pre className={`
        w-full h-[calc(100%-36px)] p-4 overflow-auto font-mono text-sm whitespace-pre-wrap
        ${status === 'success' ? 'text-green-600' : 
          status === 'error' ? 'text-red-600' : 
          ''}
      `}>
        {output || 'Code output will appear here...'}
      </pre>
    </div>
  );
};

export default OutputSection;
