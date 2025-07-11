'use client';
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";

const InteractiveText = () => {
  const text = "Hi, I am Raghavendra";
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const isMobile = useIsMobile();
  
  if (!isClient) {
    return (
      <div className="h-auto min-h-[90px] flex items-center justify-center">
        <h2 className="static-heading">
          Hi, I am <span className="name-highlight">Raghavendra</span>
        </h2>
      </div>
    );
  }

  if (isMobile) {
    return (
      <div className="h-auto min-h-[90px] flex items-center justify-center">
        <h2 className="static-heading">
          Hi, I am <span className="name-highlight">Raghavendra</span>
        </h2>
      </div>
    );
  }

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
