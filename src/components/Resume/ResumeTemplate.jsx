function ResumeTemplate({ resumeData }) {
  return (
    <div className="bg-white shadow-xl rounded-lg p-10">
      <h1 className="text-4xl font-bold">{resumeData.personalInfo.name}</h1>

      <p className="text-lg text-gray-600 mt-2">
        {resumeData.personalInfo.title}
      </p>

      <hr className="my-6" />

      <p>Resume sections will come here...</p>
    </div>
  );
}

export default ResumeTemplate;
