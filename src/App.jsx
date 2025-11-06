import { useState } from "react";
import "./CVDisplay.jsx";
import "./CVForm.jsx";
import CVDisplay from "./CVDisplay.jsx";
import CVForm from "./CVForm.jsx";
import { sampleGeneralInfo } from "./sampleData.js";

function App() {
  const [editMode, setEditMode] = useState(false);
  const [generalInfo, setGeneralInfo] = useState({ ...sampleGeneralInfo });

  function handleSubmit() {
    setEditMode(!editMode);
    // setGeneralInfo()
  }

  function handleEdit() {
    setEditMode(!editMode);
  }

  return (
    <>
      {editMode ? (
        <>
          <CVForm />
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          <CVDisplay generalInfo={generalInfo} />
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </>
  );
}

export default App;
