import React, { useEffect } from "react";
import Lenis from "lenis";
import { motion, useScroll, useSpring } from "framer-motion";

const SmoothScroll = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, anchors: true });
    let raf;
    const loop = (t) => { lenis.raf(t); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);

    const glow = document.getElementById("cursor-glow");
    const move = (e) => {
      if (glow) glow.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
    };
    window.addEventListener("mousemove", move);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1 origin-left bg-gradient-to-r from-cyan-400 to-cyan-900 z-50" />
      <div id="cursor-glow" className="pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-3xl z-0 hidden md:block" />
      {children}
    </>
  );
};

export default SmoothScroll;