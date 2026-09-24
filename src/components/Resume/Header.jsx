const Header = ({ personalInfo }) => {
  if (!personalInfo) return null;

  const { name, title, email, phone, location, website, linkedin, github } =
    personalInfo;

  return (
    <div className="border-b pb-6 mb-6">
      {/* Name */}
      <h1 className="text-4xl font-bold text-gray-900">{name}</h1>

      {/* Title */}
      <p className="text-xl text-blue-600 font-medium mt-1">{title}</p>

      {/* Contact Information */}
      <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
        {email && <span>📧 {email}</span>}

        {phone && <span>📞 {phone}</span>}

        {location && <span>📍 {location}</span>}
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-4 mt-3 text-sm">
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            🌐 Website
          </a>
        )}

        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
        )}

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default Header;
