import { useState } from "react";
import { analyzeResumeApi, uploadResumeApi } from "./api/resumeApi";
import ResultCard from "./components/ResultCard";
import "./index.css";
import LeftPanel from "./components/LeftPanel";

function App() {
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState("");
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

        <div className="col-span-8  rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Resume Preview</h2>

          <p className="text-gray-500">Resume preview will be shown here.</p>

          {result && (
            <div className="mt-6">
              <ResultCard result={result} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
