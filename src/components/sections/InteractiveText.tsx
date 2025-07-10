const InteractiveText = () => {
  const text = "Hi, I am Raghavendra";

  return (
    <div className="canyon-word">
      {text.split("").map((char, index) => {
        if (char === " ") {
          return <div key={index} className="w-2" />;
        }
        return (
          <div className="letter-container" key={index}>
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
