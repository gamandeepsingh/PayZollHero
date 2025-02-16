import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      gsap.set(cursor, { x, y });
      gsap.to(follower, {
        duration: 0.5,
        x,
        y,
      });
    };

    // Click animation
    const handleClick = () => {
      // Animate cursor on click
      gsap.to(cursor, {
        scale: 0.5,
        duration: 0.15,
        opacity: 0.5,
        onComplete: () => {
          gsap.to(cursor, {
            scale: 1,
            opacity: 1,
            duration: 0.15,
          });
        },
      });

      // Animate follower on click
      gsap.to(follower, {
        scale: 0.8,
        duration: 0.15,
        opacity: 0.5,
        onComplete: () => {
          gsap.to(follower, {
            scale: 1,
            opacity: 1,
            duration: 0.15,
          });
        },
      });
    };

    const handleMouseOver = () => {
      gsap.to([cursor, follower], {
        scale: 2,
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to([cursor, follower], {
        scale: 1,
        duration: 0.3,
      });
    };

    // Add event listeners
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("click", handleClick);

    const elements = document.querySelectorAll("a, button,li, [data-cursor]");
    elements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseOver);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("click", handleClick);
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseOver);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 bg-white/20 rounded-full pointer-events-none z-[9998] mix-blend-difference"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
};

export default CustomCursor;
