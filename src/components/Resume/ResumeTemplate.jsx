import Header from "./Header";
import Summary from "./Summary";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Certifications from "./Certifications";
import Languages from "./Languages";

const ResumeTemplate = ({ resumeData }) => {
  if (!resumeData) {
    return (
      <div className="flex items-center justify-center h-full border rounded-lg bg-white p-8">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-700">
            Resume Preview
          </h2>
          <p className="text-gray-500 mt-2">
            Click <strong>Convert Resume</strong> to generate your ATS-optimized
            resume.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      id="resume-preview"
      className="bg-white p-8 rounded-lg shadow-md border max-w-4xl mx-auto"
    >
      <Header personalInfo={resumeData.personalInfo} />

      <Summary summary={resumeData?.summary} />

      <Skills skills={resumeData.skills} />

      <Experience experience={resumeData.experience} />

      <Projects projects={resumeData.projects} />

      <Education education={resumeData.education} />

      <Certifications certifications={resumeData.certifications} />

      <Languages languages={resumeData.languages} />
    </div>
  );
};

export default ResumeTemplate;
