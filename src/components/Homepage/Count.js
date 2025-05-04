import React, { useEffect, useState, useRef } from "react";
import ReactCountup from "react-countup";

const Count = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  useEffect(() => {
    function handleScroll() {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      ref={containerRef}
      className="bg-[#BEC7C6] w-full py-10 grid grid-cols-2 md:flex items-center justify-center gap-8 md:gap-24"
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-primary">
          {isVisible && <ReactCountup start={0} end={589} duration={3} />}+
        </h1>
        <p className="text-lg text-center">TOTAL FORM FILLED</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-primary">
          {isVisible && <ReactCountup start={0} end={519} duration={3} />}+
        </h1>
        <p className="text-lg text-center">ADMISSION DONE</p>
      </div>
      <div className="flex flex-col items-center justify-center col-span-2 md:col-span-1">
        <h1 className="text-4xl font-bold text-primary">
          {isVisible && <ReactCountup start={0} end={149} duration={4} />}+
        </h1>
        <p className="text-lg text-center">EXPERT COUNSELLOR</p>
      </div>
    </div>
  );
};

export default Count;
