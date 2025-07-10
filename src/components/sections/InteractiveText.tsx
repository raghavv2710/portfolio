const InteractiveText = () => {
  const text = "Hi, I am Raghavendra";

  return (
    <div className="canyon-word">
      {text.split("").map((char, index) => {
        if (char === " ") {
          return <div key={index} className="w-3" />;
        }

        const isNamePart = index >= 9; // "Raghavendra" starts from 10th character (index 9)

        return (
          <div
            className={`letter-container ${isNamePart ? "name-highlight" : ""}`}
            key={index}
          >
            <div className="top-trigger" />
            <div className="bottom-trigger" />
            <span className="letter">{char}</span>
          </div>
        );
      })}
    </div>
  );
};

export default InteractiveText;
