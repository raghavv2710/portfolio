const InteractiveText = () => {
  const text = "Hi, I am Raghavendra";

  return (
    <div className="canyon-word">
      {text.split("").map((char, index) => (
        // Use a span for inline-flex behavior if needed, or div for block
        <div className="letter-container" key={index}>
          <div className="top-trigger" />
          <div className="bottom-trigger" />
          <span className="letter" style={{ whiteSpace: 'pre' }}>
            {char === " " ? "\u00A0" : char}
          </span>
        </div>
      ))}
    </div>
  );
};

export default InteractiveText;
