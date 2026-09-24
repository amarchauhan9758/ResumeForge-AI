const Skills = ({ skills }) => {
  if (!skills) return null;

  return (
    <section className="mb-6">
      <h2 className="text-lg font-bold uppercase border-b-2 border-gray-300 pb-1 mb-3">
        Technical Skills
      </h2>

      <div className="space-y-3">
        {Object.entries(skills).map(([category, skillList]) => {
          if (!skillList || skillList.length === 0) return null;

          return (
            <div key={category}>
              <span className="font-semibold capitalize">{category} :</span>

              <span className="text-gray-700 ml-2">{skillList.join(", ")}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
