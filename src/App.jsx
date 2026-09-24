import { useRef, useState } from "react";
import "./components/Resume/ResumeTemplate.css";
import {
  analyzeResumeApi,
  uploadResumeApi,
  updateResumeApi,
} from "./api/resumeApi";
import ResultCard from "./components/ResultCard";
import "./index.css";
import LeftPanel from "./components/LeftPanel";
import ResumeTemplate from "./components/Resume/ResumeTemplate";
import { useReactToPrint } from "react-to-print";

// const dummyResume = {
//   personalInfo: {
//     name: "Amar Singh Chauhan",
//     title: "Frontend Full Stack Developer",
//     email: "amarchauhan06232@gmail.com",
//     phone: "+91-7983779331",
//     location: "Noida, India",
//     website: "",
//     linkedin: "",
//     github: "",
//   },
//   summary:
//     "Frontend-focused Full Stack Developer with experience in React, Next.js, Node.js and TypeScript.",
//   skills: {
//     frontend: ["React", "Next.js", "TypeScript"],
//     backend: ["Node.js", "Express"],
//     database: ["MongoDB"],
//     tools: ["Git", "Postman"],
//     concepts: [],
//   },
//   experience: [],
//   projects: [],
//   education: [],
//   certifications: [],
//   languages: [],
// };

function App() {
  const resumeRef = useRef(null);
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [resumeData, setResumeData] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState("");
  // const [resumeData, setResumeData] = useState(null);
  const [converting, setConverting] = useState(false);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setUploadedFileName(file.name);
    }
  };

  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: "Resume",
  });

  const handleUploadResume = async () => {
    if (!selectedFile) {
      setError("Please select a resume PDF first.");
      return;
    }

    try {
      setError("");
      setUploading(true);

      const response = await uploadResumeApi(selectedFile);

      if (response.success) {
        setResumeText(response.data.extractedText || "");
      } else {
        setError(response.message || "Failed to upload resume.");
      }
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          err.message ||
          "Failed to upload resume.",
      );
    } finally {
      setUploading(false);
    }
  };

  const handleAnalyze = async () => {
    setError("");
    setResult(null);

    if (!resumeText.trim() || !jobDescription.trim()) {
      setError("Please provide both resume text and job description.");
      return;
    }

    try {
      setLoading(true);

      const response = await analyzeResumeApi({
        resumeText,
        jobDescription,
      });

      if (response.success) {
        setResult(response.data);
      } else {
        setError(response.message || "Something went wrong.");
      }
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          err.message ||
          "Failed to analyze resume.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleConvertResume = async () => {
    if (!resumeText.trim() || !jobDescription.trim()) {
      setError("Please provide both resume text and job description.");
      return;
    }

    try {
      setConverting(true);

      const response = await updateResumeApi({
        resumeText,
        jobDescription,
      });

      if (response.success) {
        setResumeData(response.data);
      } else {
        setError(response.message || "Failed to rewrite resume.");
      }
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          err.message ||
          "Failed to rewrite resume.",
      );
    } finally {
      setConverting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100  border  border-red-500 p-8">
      <div className="grid grid-cols-12 gap-6">
        {/* Left */}

        <div className="col-span-4">
          <LeftPanel
            resumeText={resumeText}
            setResumeText={setResumeText}
            jobDescription={jobDescription}
            setJobDescription={setJobDescription}
            uploadedFileName={uploadedFileName}
            handleFileChange={handleFileChange}
            handleUploadResume={handleUploadResume}
            handleAnalyze={handleAnalyze}
            uploading={uploading}
            loading={loading}
            error={error}
          />
        </div>

        {/* Right */}

        <div className="col-span-8 rounded-lg shadow-lg p-6 bg-white">
          <h2 className="text-2xl font-bold mb-6">ATS Resume Analysis</h2>

          {!result && (
            <p className="text-gray-500">
              Upload a resume and analyze it to see your ATS score.
            </p>
          )}

          {result && (
            <>
              <ResultCard result={result} />

              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleConvertResume}
                  disabled={converting}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
                >
                  {converting
                    ? "Generating Resume..."
                    : "Convert to ATS Resume"}
                </button>
              </div>
            </>
          )}

          {resumeData && (
            <div className="mt-8 border-t pt-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold mb-6">Resume Preview</h2>

                <button
                  className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition"
                  // onClick={() => {
                  //   // We'll connect this later
                  //   alert("Download feature coming soon 🚀");
                  // }}
                  onClick={handlePrint}
                >
                  Download Resume
                </button>
              </div>
              <div ref={resumeRef}>
                <ResumeTemplate resumeData={resumeData} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
