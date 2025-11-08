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
  const [experience, setExperience] = useState(sampleExperience);
  const [education, setEducation] = useState(sampleEducation);

  function toggleEditMode() {
    setEditMode(!editMode);
  }

  function handleSubmit(data) {
    setGeneralInfo(data.generalInfo);
    setExperience(data.experience);
    setEducation(data.education);
  }

  return (
    <div>
      {editMode ? (
        <CVForm
          initGeneralInfo={generalInfo}
          initExperience={experience}
          initEducation={education}
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
