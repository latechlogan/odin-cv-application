export default function CVDisplay({
  generalInfo,
  experience,
  education,
  toggleEditMode,
}) {
  function GeneralInfoSection() {
    return (
      <div>
        <h1 className="text-4xl font-semibold my-4">
          {generalInfo.firstName} {generalInfo.lastName}
        </h1>
        <p className="text-lg font-semibold">{generalInfo.position}</p>
        <p>
          {generalInfo.phone}&ensp;•&ensp;{generalInfo.email}
        </p>
      </div>
    );
  }

  function ExperienceSection() {
    return (
      <div>
        <h2 className="text-3xl font-semibold mb-4">Experience</h2>
        {experience.map((obj) => (
          <div key={obj.id} className="mb-8 last:mb-0">
            <h3 className="font-semibold text-lg">{obj.companyName}</h3>
            <p className="mb-4">
              <span className="font-semibold">{obj.positionTitle}</span>
              &ensp;|&ensp;{obj.dateStart}
              {obj.dateEnd ? <>&ndash;{obj.dateEnd}</> : "\u2013Present"}
            </p>
            <p>{obj.responsibilities}</p>
          </div>
        ))}
      </div>
    );
  }

  function EducationSection() {
    return (
      <div>
        <h2 className="text-3xl font-semibold mb-4">Education</h2>
        {education.map((obj) => (
          <div key={obj.id} className="mb-4">
            <h3 className="font-semibold text-lg">{obj.schoolName}</h3>
            <p>
              {obj.degree}, {obj.areaOfStudy}&ensp;|&ensp;{obj.dateStart}
              {obj.dateEnd ? <>&ndash;{obj.dateEnd}</> : "\u2013Present"}
            </p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="text-gray-700 bg-gray-100 p-12">
      <div className="p-8 pb-12 bg-white grid grid-template-cols-1 grid-template-rows-3 gap-8 max-w-screen-md mx-auto shadow-xl rounded-sm relative">
        <button
          onClick={toggleEditMode}
          className="bg-gray-100 border-1 border-gray-400 rounded-sm px-4 py-1 absolute top-12 right-12"
        >
          Edit
        </button>
        <GeneralInfoSection />
        <ExperienceSection />
        <EducationSection />
      </div>
    </div>
  );
}
