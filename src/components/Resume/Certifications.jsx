const Certifications = ({ certifications }) => {
  if (!certifications || certifications.length === 0) return null;

  return (
    <section className="mb-6">
      <h2 className="text-lg font-bold uppercase border-b-2 border-gray-300 pb-1 mb-3">
        Certifications
      </h2>

      <ul className="list-disc list-inside text-gray-700 space-y-1">
        {certifications.map((certificate, index) => (
          <li key={index}>{certificate}</li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
