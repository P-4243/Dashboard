import React, { useState } from "react";
import "./Compiler.css";

const Compiler = () => {
  const [code, setCode] = useState(
    `my_array = [7, 12, 9, 4, 11]\nminVal = my_array[0]\n\nfor i in my_array:\n    if i < minVal:\n        minVal = i\n\nprint("Lowest value:", minVal)\n\n#Python`
  );
  const [language, setLanguage] = useState("Python");
  const [result, setResult] = useState("");

  const handleRunCode = () => {
   
    setResult("Lowest value: 4");
  };

  return (
    <div className="compiler-page">
     
      <div className="compiler-header">
       
        <h2>Compiler</h2>
      </div>

     
      <div className="compiler-content">
       
        <div className="editor-section">
          <div className="language-select">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="Python">Select Language</option>
              <option value="Python">Python</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Java">Java</option>
              <option value="C++">C++</option>
            </select>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="code-editor"
          />
          <button className="run-button" onClick={handleRunCode}>
            Run
          </button>
        </div>

      <h1></h1>
        <div className="output-section">
          <h3>Result:</h3>
          <div className="result-area">{result || " "}</div>
        </div>
      </div>
    </div>
  );
};

export default Compiler;
