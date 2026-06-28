import ResumeTemplate from "../components/Resume/ResumeTemplate";

const dummyResume = {
  personalInfo: {
    name: "Amar Chauhan",
    title: "Frontend Focused Full Stack Developer",
    email: "amar@example.com",
    phone: "+91 9876543210",
    location: "Noida, India",
    github: "github.com/amar",
    linkedin: "linkedin.com/in/amar",
  },

  summary:
    "Frontend-focused Full Stack Developer with experience building scalable React, Next.js and Node.js applications.",

  skills: {
    frontend: ["React", "Next.js", "JavaScript", "TypeScript"],
    backend: ["Node.js", "Express.js"],
    database: ["MongoDB", "MySQL"],
    tools: ["Git", "Postman"],
  },

  experience: [],
  projects: [],
  education: [],
  certifications: [],
  languages: ["Hindi", "English"],
};

function ResumePreview() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="grid grid-cols-12 gap-6">
        {/* Left Panel */}

        <div className="col-span-4 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">AI Resume Copilot</h2>

          <p className="text-gray-500">
            Resume Upload controls will come here.
          </p>
        </div>

        {/* Right Panel */}

        <div className="col-span-8">
          <ResumeTemplate resumeData={dummyResume} />
        </div>
      </div>
    </div>
  );
}

export default ResumePreview;
