import { useState } from "react";
import CVDisplay from "./CVDisplay.jsx";
import CVForm from "./CVForm.jsx";
import { sampleGeneralInfo } from "./sampleData.js";

function App() {
  const [editMode, setEditMode] = useState(false);
  const [generalInfo, setGeneralInfo] = useState({ ...sampleGeneralInfo });

  function toggleEditMode() {
    setEditMode(!editMode);
  }

  function handleSubmit(data) {
    setGeneralInfo(data);
  }

  return (
    <>
      {editMode ? (
        <CVForm
          initialData={generalInfo}
          toggleEditMode={toggleEditMode}
          onSubmit={handleSubmit}
        />
      ) : (
        <CVDisplay generalInfo={generalInfo} toggleEditMode={toggleEditMode} />
      )}
    </>
  );
}

export default App;
