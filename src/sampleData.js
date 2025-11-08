const sampleGeneralInfo = {
  firstName: "Logan",
  lastName: "Baugh",
  position: "Frontend Developer",
  phone: "3189142514",
  email: "loganbaugh0423@gmail.com",
};

const sampleExperience = [
  {
    id: crypto.randomUUID(),
    companyName: "Blue Cross Blue Shield Louisiana",
    positionTitle: "Frontend Developer",
    responsibilities:
      "Lead frontend developer for stakeholder-driven web applications including myaffinityhealth.com and monroesurgical.com, implementing responsive design and modern web standards, key contributor to blueadvantage.lablue.com with additional development work on bcbsla.com and primewellhealth.com, implement and maintain WCAG Level A/AA compliance across web properties using SiteImprove accessibility auditing tools, collaborate with cross-functional teams using Azure DevOps for version control, code review, and deployment pipelines (dev → UAT → production), build mobile-first, responsive layouts using CSS Grid, Flexbox, and modern CSS techniques, bridge communication between design and development teams to ensure pixel-perfect implementation and optimal user experience",
    dateStart: 2020,
    dateEnd: null,
  },
  {
    id: crypto.randomUUID(),
    companyName: "Century Marketing Solutions",
    positionTitle: "Sr. Graphic Designer",
    responsibilities:
      "Developed responsive websites for local businesses and supported internal projects for major clients including CenturyLink and Unilever, collaborated with development team to design and implement custom web solutions for client-specific requirements, applied corporate brand guidelines across print and digital campaigns for various clients, created comprehensive branding solutions (logos, advertisements, marketing materials) for diverse client portfolio",
    dateStart: 2018,
    dateEnd: 2019,
  },
  {
    id: crypto.randomUUID(),
    companyName: "Vantage Health Plan",
    positionTitle: "Web & Graphic Design Coordinator",
    responsibilities:
      "Led frontend development for major website redesign, implementing mobile responsiveness and improved user experience, maintained and enhanced existing web properties using HTML, CSS, and JavaScript/jQuery, developed and applied corporate branding standards across print and digital materials, collaborated with stakeholders to translate business requirements into technical solutions",
    dateStart: 2018,
    dateEnd: 2016,
  },
];

const sampleEducation = [
  {
    id: crypto.randomUUID(),
    schoolName: "Louisiana Tech University",
    degree: "Bachelor of Fine Arts",
    areaOfStudy: "Communication Design",
    dateStart: 2008,
    dateEnd: 2012,
  },
];

export { sampleGeneralInfo, sampleExperience, sampleEducation };
