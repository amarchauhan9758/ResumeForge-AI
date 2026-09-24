const Experience = ({ experience }) => {
  if (!experience || experience.length === 0) return null;

  return (
    <section className="mb-6">
      <h2 className="text-lg font-bold uppercase border-b-2 border-gray-300 pb-1 mb-3">
        Professional Experience
      </h2>

      {experience.map((item) => (
        <div key={item.id} className="mb-5">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-base">{item.company}</h3>

            <span className="text-sm text-gray-500">{item.duration}</span>
          </div>

          <p className="text-blue-600 font-medium mb-2">{item.role}</p>

          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {item.bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;
