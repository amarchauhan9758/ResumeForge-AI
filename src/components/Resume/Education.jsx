const Education = ({ education }) => {
  if (!education || education.length === 0) return null;

  return (
    <section className="mb-6">
      <h2 className="text-lg font-bold uppercase border-b-2 border-gray-300 pb-1 mb-3">
        Education
      </h2>

      {education.map((edu) => (
        <div key={edu.id} className="mb-3">
          <h3 className="font-bold">{edu.degree}</h3>

          <p className="text-gray-700">{edu.institution}</p>

          <p className="text-sm text-gray-500">{edu.duration}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;
