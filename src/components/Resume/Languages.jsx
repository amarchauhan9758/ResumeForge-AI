const Languages = ({ languages }) => {
  if (!languages || languages.length === 0) return null;

  return (
    <section className="mb-6">
      <h2 className="text-lg font-bold uppercase border-b-2 border-gray-300 pb-1 mb-3">
        Languages
      </h2>

      <div className="flex flex-wrap gap-2">
        {languages.map((language, index) => (
          <span
            key={index}
            className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm"
          >
            {language}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Languages;
