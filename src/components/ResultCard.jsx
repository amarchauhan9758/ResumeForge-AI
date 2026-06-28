function ResultCard({ result }) {
  if (!result) return null;

  const {
    matchScore,
    summary,
    strengths = [],
    missingSkills = [],
    suggestions = [],
  } = result;

  return (
    <div className="result-card">
      <h2>Analysis Result</h2>

      <div className="score-box">
        <span className="score-label">Match Score</span>
        <span className="score-value">{matchScore}%</span>
      </div>

      <div className="section">
        <h3>Summary</h3>
        <p>{summary}</p>
      </div>

      <div className="section">
        <h3>Strengths</h3>
        <ul>
          {strengths.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h3>Missing Skills</h3>
        <ul>
          {missingSkills.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h3>Suggestions</h3>
        <ul>
          {suggestions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ResultCard;