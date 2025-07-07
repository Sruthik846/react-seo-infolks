import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CursorGradient = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const moveSVG = (e) => {
      gsap.to(svgRef.current, {
        x: e.clientX - 800, // Adjust to keep it very close
        y: e.clientY - 400,
        duration: 0.2, // Faster response
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveSVG);

    return () => {
      window.removeEventListener("mousemove", moveSVG);
    };
  }, []);

  return (
    
    <img
      ref={svgRef}
      src="/mouseGradient.svg" // Ensure the correct path to the SVG
      alt="Cursor Effect"
      style={{
        position: "fixed",
        width: "100%", // Adjust for better fit
        height: "100%",
        pointerEvents: "none",
        zIndex: 25,
        // filter: "blur(30px)",
      }}
    />

  //   <div
  //   ref={svgRef}
  //   className="pointer-events-none fixed z-30 w-[1600px] h-[800px] overflow-visible"
  //   style={{
  //     top: 0,
  //     left: 0,
  //     background: "transparent",
  //   }}
  // >
  //   {/* Purple Ellipse */}
  //   <div className="absolute w-[1000px] h-[400px] bg-[#8349FF] opacity-40 blur-[150px] rotate-[10deg] left-0 top-0" />

  //   {/* Teal Ellipse */}
  //   <div className="absolute w-[800px] h-[400px] bg-[#18a3a3] opacity-40 blur-[150px] rotate-[40deg] left-[30%] top-[10%]" />

  //   {/* Pink Ellipse */}
  //   <div className="absolute w-[600px] h-[300px] bg-[#c01e88] opacity-40 blur-[100px] rotate-[-40deg] left-[20%] top-[60%]" />
  // </div>
  );
};

export default CursorGradient;
