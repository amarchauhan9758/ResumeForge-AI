function LeftPanel({
  resumeText,
  setResumeText,
  jobDescription,
  setJobDescription,
  uploadedFileName,
  handleFileChange,
  handleUploadResume,
  handleAnalyze,
  uploading,
  loading,
  error,
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 h-fit">
      <h2 className="text-2xl font-bold mb-2">AI Resume Copilot</h2>

      <p className="text-gray-500 mb-6">
        Upload your resume and compare it against any Job Description.
      </p>

      {/* Upload Resume */}

      <div className="mb-6">
        <label className="block font-semibold mb-2">Upload Resume (PDF)</label>

        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="w-full border rounded-md p-2"
        />

        {uploadedFileName && (
          <p className="text-sm text-green-600 mt-2">
            Selected: {uploadedFileName}
          </p>
        )}

        <button
          onClick={handleUploadResume}
          disabled={uploading}
          className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          {uploading ? "Uploading..." : "Upload Resume"}
        </button>
      </div>

      {/* Resume Text */}

      <div className="mb-6">
        <label className="block font-semibold mb-2">Resume Text</label>

        <textarea
          rows={8}
          value={resumeText}
          onChange={(e) => setResumeText(e.target.value)}
          placeholder="Resume text will appear here..."
          className="w-full border rounded-md p-3 resize-none"
        />
      </div>

      {/* Job Description */}

      <div className="mb-6">
        <label className="block font-semibold mb-2">Job Description</label>

        <textarea
          rows={8}
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Paste Job Description..."
          className="w-full border rounded-md p-3 resize-none"
        />
      </div>

      {/* Error */}

      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded-md mb-4">
          {error}
        </div>
      )}

      {/* Analyze */}

      <button
        onClick={handleAnalyze}
        disabled={loading}
        className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition"
      >
        {loading ? "Analyzing..." : "Analyze Resume"}
      </button>
    </div>
  );
}

export default LeftPanel;
