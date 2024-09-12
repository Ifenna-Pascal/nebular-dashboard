const ProgressBar = ({ progress }: { progress: number }) => {
    // Calculate the stroke dash offset based on progress
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = (1 - progress / 100) * circumference;
  
    return (
      <div className="progress-circle-container">
        <svg
          className="progress-circle"
          width="100"
          height="100"
          viewBox="0 0 100 100"
        >
          <circle
            className="progress-circle-background"
            cx="50"
            cy="50"
            r={radius}
            strokeWidth="10"
          />
          <circle
            className="progress-circle-progress"
            cx="50"
            cy="50"
            r={radius}
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            alignmentBaseline="middle"
            className="progress-circle-text"
          >
            {progress}%
          </text>
        </svg>
      </div>
    );
  };
export default ProgressBar;