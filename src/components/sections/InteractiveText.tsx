const InteractiveText = () => {
  const text = "Hi, I am Raghavendra";

  return (
    <div className="canyon-word flex flex-wrap justify-center items-center gap-[4px]">
      {text.split("").map((char, index) => {
        if (char === " ") {
          return <div key={index} className="w-[16px]" />;
        }

        const isNamePart = index >= 9;

        return (
          <div
            key={index}
            className={`letter-container ${isNamePart ? "name-highlight" : ""}`}
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
