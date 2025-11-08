import { useState } from "react";

function ExperienceInput({ obj, index, handleExperienceInput }) {
  return (
    <>
      <label htmlFor={`companyName-${index}`}>Company Name </label>
      <input
        type="text"
        id={`companyName-${index}`}
        name="companyName"
        value={obj.companyName}
        onChange={(e) => handleExperienceInput(index, e)}
        className="bg-slate-100 rounded-sm p-1"
      ></input>

      <label htmlFor={`positionTitle-${index}`}>Title </label>
      <input
        type="text"
        id={`positionTitle-${index}`}
        name="positionTitle"
        value={obj.positionTitle}
        onChange={(e) => handleExperienceInput(index, e)}
        className="bg-slate-100 rounded-sm p-1"
      ></input>

      <label htmlFor={`responsibilities-${index}`}>Company Name </label>
      <textarea
        id={`responsibilities-${index}`}
        name="responsibilities"
        value={obj.responsibilities}
        onChange={(e) => handleExperienceInput(index, e)}
        className="bg-slate-100 rounded-sm p-1"
      ></textarea>

      <label htmlFor={`dateStart-${index}`}>Start Date (Year) </label>
      <input
        type="tel"
        id={`dateStart-${index}`}
        name="dateStart"
        value={obj.dateStart}
        onChange={(e) => handleExperienceInput(index, e)}
        className="bg-slate-100 rounded-sm p-1"
      ></input>

      <label htmlFor={`dateEnd-${index}`}>End Date (Year) </label>
      <input
        type="tel"
        id={`dateEnd-${index}`}
        name="dateEnd"
        value={obj.dateEnd}
        onChange={(e) => handleExperienceInput(index, e)}
        className="bg-slate-100 rounded-sm p-1"
      ></input>
    </>
  );
}

function EducationInput({ obj, index, handleEducationInput }) {
  return (
    <>
      <label htmlFor={`schoolName-${index}`}>School Name </label>
      <input
        type="text"
        id={`schoolName-${index}`}
        name="schoolName"
        value={obj.schoolName}
        onChange={(e) => handleEducationInput(index, e)}
        className="bg-slate-100 rounded-sm p-1"
      ></input>

      <label htmlFor={`degree-${index}`}>Degree </label>
      <input
        type="text"
        id={`degree-${index}`}
        name="degree"
        value={obj.degree}
        onChange={(e) => handleEducationInput(index, e)}
        className="bg-slate-100 rounded-sm p-1"
      ></input>

      <label htmlFor={`areaOfStudy-${index}`}>Area of Study </label>
      <input
        type="text"
        id={`areaOfStudy-${index}`}
        name="areaOfStudy"
        value={obj.areaOfStudy}
        onChange={(e) => handleEducationInput(index, e)}
        className="bg-slate-100 rounded-sm p-1"
      ></input>

      <label htmlFor={`dateStart-${index}`}>Start Date (Year) </label>
      <input
        type="tel"
        id={`dateStart-${index}`}
        name="dateStart"
        value={obj.dateStart}
        onChange={(e) => handleEducationInput(index, e)}
        className="bg-slate-100 rounded-sm p-1"
      ></input>

      <label htmlFor={`dateEnd-${index}`}>End Date (Year) </label>
      <input
        type="tel"
        id={`dateEnd-${index}`}
        name="dateEnd"
        value={obj.dateEnd}
        onChange={(e) => handleEducationInput(index, e)}
        className="bg-slate-100 rounded-sm p-1"
      ></input>
    </>
  );
}

export default function CVForm({
  initGeneralInfo,
  initEducation,
  initExperience,
  toggleEditMode,
  onSubmit,
}) {
  const [formGeneralInfo, setFormGeneralInfo] = useState(initGeneralInfo);
  const [formExperience, setFormExperience] = useState(initExperience);
  const [formEducation, setFormEducation] = useState(initEducation);

  function handleSubmit(e) {
    e.preventDefault();
    toggleEditMode();
    onSubmit({
      generalInfo: formGeneralInfo,
      experience: formExperience,
      education: formEducation,
    });
  }

  function handleGeneralInfoInput(e) {
    const { name, value } = e.target;
    setFormGeneralInfo({ ...formGeneralInfo, [name]: value });
  }

  function handleExperienceInput(index, e) {
    const { name, value } = e.target;
    const updatedExperience = [...formExperience];
    updatedExperience[index] = {
      ...updatedExperience[index],
      [name]: value,
    };
    setFormExperience(updatedExperience);
  }

  function handleEducationInput(index, e) {
    const { name, value } = e.target;
    const updatedEducation = [...formEducation];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [name]: value,
    };
    setFormEducation(updatedEducation);
  }

  function handleCancel() {
    setFormGeneralInfo(initGeneralInfo);
    setFormExperience(initExperience);
    setFormEducation(initEducation);
    toggleEditMode();
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="text-gray-700">
        <fieldset className="flex flex-col" id="generalInfo">
          <legend>General Information</legend>
          <label htmlFor="firstName">First Name </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formGeneralInfo.firstName}
            onChange={handleGeneralInfoInput}
            className="bg-slate-100 rounded-sm p-1"
          ></input>

          <label htmlFor="lastName">Last Name </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formGeneralInfo.lastName}
            onChange={handleGeneralInfoInput}
            className="bg-slate-100 rounded-sm p-1"
          ></input>

          <label htmlFor="position">Position </label>
          <input
            type="text"
            id="position"
            name="position"
            value={formGeneralInfo.position}
            onChange={handleGeneralInfoInput}
            className="bg-slate-100 rounded-sm p-1"
          ></input>

          <label htmlFor="phone">Phone </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formGeneralInfo.phone}
            onChange={handleGeneralInfoInput}
            className="bg-slate-100 rounded-sm p-1"
          ></input>

          <label htmlFor="email">Email </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formGeneralInfo.email}
            onChange={handleGeneralInfoInput}
            className="bg-slate-100 rounded-sm p-1"
          ></input>
        </fieldset>

        <fieldset id="experience">
          <legend>Experience</legend>
          {formExperience.map((obj, index) => {
            return (
              <ExperienceInput
                obj={obj}
                index={index}
                key={obj.id}
                handleExperienceInput={handleExperienceInput}
              />
            );
          })}
        </fieldset>

        <fieldset id="education">
          <legend>Education</legend>
          {formEducation.map((obj, index) => {
            return (
              <EducationInput
                obj={obj}
                index={index}
                key={obj.id}
                handleEducationInput={handleEducationInput}
              />
            );
          })}
        </fieldset>

        <button
          type="submit"
          onClick={handleSubmit}
          className="text-white bg-sky-500 border-1 border-sky-600 rounded-sm px-4 py-1"
        >
          Submit
        </button>

        <button type="button" onClick={handleCancel} className="px-4 py-1">
          Cancel
        </button>
      </form>
    </>
  );
}
