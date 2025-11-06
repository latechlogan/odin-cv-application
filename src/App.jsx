import { useState } from "react";
import "./CVDisplay.jsx";
import "./CVForm.jsx";
import CVDisplay from "./CVDisplay.jsx";
import CVForm from "./CVForm.jsx";
import { sampleGeneralInfo } from "./sampleData.js";

function App() {
  const [generalInfo, setGeneralInfo] = useState({ ...sampleGeneralInfo });

  return (
    <>
      <h1>Hello {generalInfo.firstName}</h1>
      <CVDisplay />
      <CVForm />
    </>
  );
}

export default App;
