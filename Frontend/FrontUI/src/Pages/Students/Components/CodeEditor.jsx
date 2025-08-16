import React from 'react';
import Editor from "@monaco-editor/react";
import { Code } from 'lucide-react';

const CodeEditor = ({ code, setCode, language }) => {
  const getEditorLanguage = () => {
    switch (language) {
      case 'c++': return 'cpp';
      case 'python': return 'python';
      case 'java': return 'java';
      case 'c': return 'c';
      default: return 'cpp';
    }
  };

  return (
    <div className="h-full flex flex-col bg-white rounded-lg border border-purple-100">
      <div className="text-lg font-bold text-gray-900 px-5 py-3 flex bg-purple-200 rounded-tr rounded-tl">
        <Code className="h-4 w-4 mr-2" />
        <span className="text-sm ">Source Code</span>
      </div>

      <div className="flex-grow rounded-b">
        <Editor
          height="550px"
          language={getEditorLanguage()}
          theme="vs-light"
          value={code}
          onChange={(value) => setCode(value || '')}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            scrollBeyondLastLine: false,
            lineNumbers: 'on',
            roundedSelection: true,
            automaticLayout: true,
            padding: { top: 16 },
          }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
