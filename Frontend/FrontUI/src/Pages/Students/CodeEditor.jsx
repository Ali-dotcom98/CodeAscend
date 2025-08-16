// App.jsx
import React, { useState } from "react";
import Editor from "@monaco-editor/react";

function CodeEditor() {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState({
    javascript: '// Write your JavaScript here\nconsole.log("Hello World");',
    python: '# Write your Python code here\nprint("Hello World")',
    cpp: '// Write your C++ code here\n#include <iostream>\nusing namespace std;\nint main(){\n    cout << "Hello World";\n    return 0;\n}'
  });

  const handleEditorChange = (value) => {
    setCode((prev) => ({
      ...prev,
      [language]: value
    }));
  };

  return (
    <div className="h-screen bg-blue-500 p-2">
      <div className="grid grid-cols-3 grid-rows-[50px_1fr_150px] gap-2 h-full">

        {/* Language Change */}
        <div className="col-span-1 bg-blue-400 flex items-center px-4">
          <label className="text-white font-semibold mr-2">Language:</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-white text-black px-2 py-1 rounded"
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="cpp">C++</option>
          </select>
        </div>

        {/* Problem Section */}
        <div className="col-span-2 row-span-2 bg-blue-400 text-white p-4">
          <h2 className="font-bold mb-2">Problem</h2>
          <p>
            Here will be your problem statement. You can dynamically load it
            from a backend or keep it static for now.
          </p>
        </div>

        {/* Code Editor */}
        <div className="col-span-1 row-span-2 bg-white">
          <Editor
            height="100%"
            language={language} 
            value={code[language]}
            theme="vs-dark"
            onChange={handleEditorChange}
          />
        </div>

        {/* Output Section */}
        <div className="bg-blue-400 text-white p-2">
          <h3 className="font-bold">Output</h3>
          <pre className="bg-blue-300 p-2 mt-2">Hello World</pre>
        </div>

        {/* Buttons */}
        <div className="bg-blue-400 flex flex-col gap-2 justify-center items-center">
          <button
            onClick={() => {
              try {
                if (language === "javascript") {
                  // eslint-disable-next-line no-eval
                  const result = eval(code.javascript);
                  alert(result);
                } else {
                  alert(`Running ${language} code requires backend execution.`);
                }
              } catch (e) {
                alert(e.message);
              }
            }}
            className="bg-blue-700 text-white px-4 py-2 rounded"
          >
            Run Code
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded">
            Submit
          </button>
        </div>

      </div>
    </div>
  );
}

export default CodeEditor;
