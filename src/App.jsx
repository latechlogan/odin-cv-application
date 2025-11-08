import { useState } from "react";
import CVDisplay from "./CVDisplay.jsx";
import CVForm from "./CVForm.jsx";
import {
  sampleEducation,
  sampleExperience,
  sampleGeneralInfo,
} from "./sampleData.js";

function App() {
  const [editMode, setEditMode] = useState(false);
  const [generalInfo, setGeneralInfo] = useState(sampleGeneralInfo);
  const [education, setEducation] = useState(sampleEducation);
  const [experience, setExperience] = useState(sampleExperience);

  function toggleEditMode() {
    setEditMode(!editMode);
  }

  function handleSubmit(data) {
    setGeneralInfo(data);
  }

  return (
    <div>
      {editMode ? (
        <CVForm
          initialData={generalInfo}
          toggleEditMode={toggleEditMode}
          onSubmit={handleSubmit}
        />
      ) : (
        <CVDisplay
          generalInfo={generalInfo}
          experience={experience}
          education={education}
          toggleEditMode={toggleEditMode}
        />
      )}
    </div>
  );
}

export default App;
