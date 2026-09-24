const Projects = ({ projects }) => {
  if (!projects || projects.length === 0) return null;

  return (
    <section className="mb-6">
      <h2 className="text-lg font-bold uppercase border-b-2 border-gray-300 pb-1 mb-3">
        Projects
      </h2>

      {projects.map((project) => (
        <div key={project.id} className="mb-5">
          <h3 className="font-bold">{project.projectName}</h3>

          <p className="text-sm text-gray-500 mb-2">{project.techStack}</p>

          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {project.bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm mt-2 inline-block"
            >
              Live Project
            </a>
          )}
        </div>
      ))}
    </section>
  );
};

export default Projects;
