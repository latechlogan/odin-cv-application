import { useState } from "react";

function ExperienceInput({ obj, index, handleExperienceInput }) {
  return (
    <div className="flex flex-wrap flex-row mb-12">
      <div className="w-full md:w-1/2 flex flex-col pr-4 mb-4 gap-2">
        <label
          className="text-xs uppercase text-gray-600"
          htmlFor={`companyName-${index}`}
        >
          Company Name{" "}
        </label>
        <input
          type="text"
          id={`companyName-${index}`}
          name="companyName"
          value={obj.companyName}
          onChange={(e) => handleExperienceInput(index, e)}
          className="appearance-none text-gray-400 focus:text-gray-600 bg-gray-100 border border-gray-300 p-2 rounded-md"
        ></input>
      </div>

      <div className="w-full md:w-1/2 flex flex-col pr-4 mb-4 gap-2">
        <label
          className="text-xs uppercase text-gray-600"
          htmlFor={`positionTitle-${index}`}
        >
          Title{" "}
        </label>
        <input
          type="text"
          id={`positionTitle-${index}`}
          name="positionTitle"
          value={obj.positionTitle}
          onChange={(e) => handleExperienceInput(index, e)}
          className="appearance-none text-gray-400 focus:text-gray-600 bg-gray-100 border border-gray-300 p-2 rounded-md"
        ></input>
      </div>
      <div className="w-full flex flex-col pr-4 mb-4 gap-2">
        <label
          className="text-xs uppercase text-gray-600"
          htmlFor={`responsibilities-${index}`}
        >
          Responsibilities{" "}
        </label>
        <textarea
          id={`responsibilities-${index}`}
          name="responsibilities"
          value={obj.responsibilities}
          onChange={(e) => handleExperienceInput(index, e)}
          className="appearance-none text-gray-400 focus:text-gray-600 bg-gray-100 border border-gray-300 p-2 rounded-md h-40"
        ></textarea>
      </div>
      <div className="w-full md:w-1/2 flex flex-col pr-4 mb-4 gap-2">
        <label
          className="text-xs uppercase text-gray-600"
          htmlFor={`exp-dateStart-${index}`}
        >
          Start Date (Year){" "}
        </label>
        <input
          type="tel"
          id={`exp-dateStart-${index}`}
          name="dateStart"
          value={obj.dateStart}
          onChange={(e) => handleExperienceInput(index, e)}
          className="appearance-none text-gray-400 focus:text-gray-600 bg-gray-100 border border-gray-300 p-2 rounded-md"
        ></input>
      </div>
      <div className="w-full md:w-1/2 flex flex-col pr-4 mb-4 gap-2">
        <label
          className="text-xs uppercase text-gray-600"
          htmlFor={`exp-dateEnd-${index}`}
        >
          End Date (Year){" "}
        </label>
        <input
          type="tel"
          id={`exp-dateEnd-${index}`}
          name="dateEnd"
          value={obj.dateEnd}
          onChange={(e) => handleExperienceInput(index, e)}
          className="appearance-none text-gray-400 focus:text-gray-600 bg-gray-100 border border-gray-300 p-2 rounded-md"
        ></input>
      </div>
    </div>
  );
}

function EducationInput({ obj, index, handleEducationInput }) {
  return (
    <>
      <div className="w-full md:w-1/2 flex flex-col pr-4 mb-4 gap-2">
        <label
          className="text-xs uppercase text-gray-600"
          htmlFor={`schoolName-${index}`}
        >
          School Name{" "}
        </label>
        <input
          type="text"
          id={`schoolName-${index}`}
          name="schoolName"
          value={obj.schoolName}
          onChange={(e) => handleEducationInput(index, e)}
          className="appearance-none text-gray-400 focus:text-gray-600 bg-gray-100 border border-gray-300 p-2 rounded-md"
        ></input>
      </div>
      <div className="w-full md:w-1/2 flex flex-col pr-4 mb-4 gap-2">
        <label
          className="text-xs uppercase text-gray-600"
          htmlFor={`degree-${index}`}
        >
          Degree{" "}
        </label>
        <input
          type="text"
          id={`degree-${index}`}
          name="degree"
          value={obj.degree}
          onChange={(e) => handleEducationInput(index, e)}
          className="appearance-none text-gray-400 focus:text-gray-600 bg-gray-100 border border-gray-300 p-2 rounded-md"
        ></input>
      </div>
      <div className="w-full md:w-1/2 flex flex-col pr-4 mb-4 gap-2">
        <label
          className="text-xs uppercase text-gray-600"
          htmlFor={`areaOfStudy-${index}`}
        >
          Area of Study{" "}
        </label>
        <input
          type="text"
          id={`areaOfStudy-${index}`}
          name="areaOfStudy"
          value={obj.areaOfStudy}
          onChange={(e) => handleEducationInput(index, e)}
          className="appearance-none text-gray-400 focus:text-gray-600 bg-gray-100 border border-gray-300 p-2 rounded-md"
        ></input>
      </div>
      <div className="w-full md:w-1/2 flex flex-col pr-4 mb-4 gap-2">
        <label
          className="text-xs uppercase text-gray-600"
          htmlFor={`edu-dateStart-${index}`}
        >
          Start Date (Year){" "}
        </label>
        <input
          type="tel"
          id={`edu-dateStart-${index}`}
          name="dateStart"
          value={obj.dateStart}
          onChange={(e) => handleEducationInput(index, e)}
          className="appearance-none text-gray-400 focus:text-gray-600 bg-gray-100 border border-gray-300 p-2 rounded-md"
        ></input>
      </div>
      <div className="w-full md:w-1/2 flex flex-col pr-4 mb-4 gap-2">
        <label
          className="text-xs uppercase text-gray-600"
          htmlFor={`edu-dateEnd-${index}`}
        >
          End Date (Year){" "}
        </label>
        <input
          type="tel"
          id={`edu-dateEnd-${index}`}
          name="dateEnd"
          value={obj.dateEnd}
          onChange={(e) => handleEducationInput(index, e)}
          className="appearance-none text-gray-400 focus:text-gray-600 bg-gray-100 border border-gray-300 p-2 rounded-md"
        ></input>
      </div>
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
    <div className="p-12">
      <form
        onSubmit={handleSubmit}
        className="text-gray-700 max-w-screen-md mx-auto"
      >
        <fieldset className="flex flex-wrap flex-row mb-12" id="generalInfo">
          <legend className="text-xl font-semibold mb-6">
            General Information
          </legend>
          <div className="w-full md:w-1/2 flex flex-col pr-4 mb-4 gap-2">
            <label
              className="text-xs uppercase text-gray-600"
              htmlFor="firstName"
            >
              First Name{" "}
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formGeneralInfo.firstName}
              onChange={handleGeneralInfoInput}
              className="appearance-none text-gray-400 focus:text-gray-600 bg-gray-100 border border-gray-300 p-2 rounded-md"
            ></input>
          </div>
          <div className="w-full md:w-1/2 flex flex-col pr-4 mb-4 gap-2">
            <label
              className="text-xs uppercase text-gray-600"
              htmlFor="lastName"
            >
              Last Name{" "}
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formGeneralInfo.lastName}
              onChange={handleGeneralInfoInput}
              className="appearance-none text-gray-400 focus:text-gray-600 bg-gray-100 border border-gray-300 p-2 rounded-md"
            ></input>
          </div>
          <div className="w-full md:w-1/2 flex flex-col pr-4 mb-4 gap-2">
            <label
              className="text-xs uppercase text-gray-600"
              htmlFor="position"
            >
              Position{" "}
            </label>
            <input
              type="text"
              id="position"
              name="position"
              value={formGeneralInfo.position}
              onChange={handleGeneralInfoInput}
              className="appearance-none text-gray-400 focus:text-gray-600 bg-gray-100 border border-gray-300 p-2 rounded-md"
            ></input>
          </div>
          <div className="w-full md:w-1/2 flex flex-col pr-4 mb-4 gap-2">
            <label className="text-xs uppercase text-gray-600" htmlFor="phone">
              Phone{" "}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formGeneralInfo.phone}
              onChange={handleGeneralInfoInput}
              className="appearance-none text-gray-400 focus:text-gray-600 bg-gray-100 border border-gray-300 p-2 rounded-md"
            ></input>
          </div>
          <div className="w-full md:w-1/2 flex flex-col pr-4 mb-4 gap-2">
            <label className="text-xs uppercase text-gray-600" htmlFor="email">
              Email{" "}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formGeneralInfo.email}
              onChange={handleGeneralInfoInput}
              className="appearance-none text-gray-400 focus:text-gray-600 bg-gray-100 border border-gray-300 p-2 rounded-md"
            ></input>
          </div>
        </fieldset>

        <fieldset className="flex flex-wrap flex-row mb-12" id="experience">
          <legend className="text-xl font-semibold mb-6">Experience</legend>
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

        <fieldset className="flex flex-wrap flex-row mb-12" id="education">
          <legend className="text-xl font-semibold mb-6">Education</legend>
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
          className="cursor-pointer text-white bg-sky-500 hover:bg-sky-600 rounded-sm px-4 py-2 mr-2"
        >
          Submit
        </button>

        <button
          type="button"
          onClick={handleCancel}
          className="cursor-pointer rounded-sm px-4 py-2 hover:bg-gray-100"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
