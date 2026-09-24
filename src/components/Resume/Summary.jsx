const Summary = ({ summary }) => {
  if (!summary) return null;

  return (
    <section className="mb-6">
      <h2 className="text-lg font-bold uppercase border-b-2 border-gray-300 pb-1 mb-3">
        Professional Summary
      </h2>

      <p className="text-gray-700 leading-7 text-sm">{summary}</p>
    </section>
  );
};

export default Summary;
