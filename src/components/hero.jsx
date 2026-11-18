// "use client";
// import React from "react";
// import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion";
// import { Link } from 'react-router-dom';

// const Hero = () => {
//   return (
//     <section className="lg:py-16">
//       <div className="grid grid-cols-1 sm:grid-cols-12">
//       <motion.div 
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="col-span-4 place-self-center mt-4 lg:mt-0"
//         >
//           <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative mr-6">
//             <img
//               src="/images/profile2.png"
//               alt="hero image"
//               className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//               width={300}
//               height={300}
//             />
//           </div>
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
//         >
//           <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
//             {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600"> */}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-900">
//               Hello, I&apos;m{" "}
//             </span>
//             <br></br>
//             <TypeAnimation
//               sequence={[
//                 "Nasibo Dula",
//                 1000,
//                 "Web Developer",
//                 1000,
//                 "Data Scientist",
//                 1000,
//                 "UI/UX Designer",
//                 1000,
//               ]}
//               wrapper="span"
//               speed={50}
//               repeat={Infinity}
//             />
//           </h1>
//           <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
              
//           </p>
//           <div>
//               <a href="#contact"
//                  className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-cyan-400 to-cyan-900 hover:bg-slate-200 text-white">
//                 Hire Me
//              </a>
//             <a href="/"
//               className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-cyan-400 to-cyan-900 hover:bg-slate-800 text-white mt-3" >
//               <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
//                 Download CV
//               </span>
//             </a>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, animate, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const NAME = "NASIBO";

const Loader = ({ onDone }) => {
  const [n, setN] = useState(0);
  useEffect(() => {
    const c = animate(0, 100, {
      duration: 2, ease: "easeInOut",
      onUpdate: (v) => setN(Math.floor(v)),
      onComplete: () => setTimeout(onDone, 250),
    });
    return () => c.stop();
  }, [onDone]);
  return (
    <motion.div exit={{ y: "-100%" }} transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] bg-[#0a0a0c] flex items-end justify-between p-6 md:p-12">
      <span className="text-[#ADB7BE] uppercase tracking-widest text-xs">Portfolio · {new Date().getFullYear()}</span>
      <span className="font-serif font-black text-white text-[28vw] leading-none">{n}</span>
    </motion.div>
  );
};

// A layer that drifts with the cursor; higher depth = moves more
const Layer = ({ mx, my, depth, className, children }) => {
  const x = useTransform(mx, (v) => v * depth * 120);
  const y = useTransform(my, (v) => v * depth * 120);
  return <motion.div style={{ x, y }} className={className}>{children}</motion.div>;
};

const Hero = () => {
  const [done, setDone] = useState(false);
  const finish = useCallback(() => setDone(true), []);

  useEffect(() => {
    document.body.style.overflow = done ? "" : "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [done]);

  const rawX = useMotionValue(0), rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 60, damping: 20 });
  const my = useSpring(rawY, { stiffness: 60, damping: 20 });
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    rawX.set((e.clientX - r.left) / r.width - 0.5);
    rawY.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <>
      <AnimatePresence>{!done && <Loader onDone={finish} />}</AnimatePresence>

      <section onMouseMove={onMove} className="relative min-h-[92vh] overflow-hidden flex flex-col justify-between py-10">
        {/* aurora background */}
        <motion.div animate={{ x: [0, 90, 0], y: [0, 50, 0] }} transition={{ duration: 16, repeat: Infinity }}
          className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-cyan-500/20 blur-3xl" />
        <motion.div animate={{ x: [0, -70, 0], y: [0, 80, 0] }} transition={{ duration: 20, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-[26rem] h-[26rem] rounded-full bg-indigo-600/20 blur-3xl" />

        {/* top meta row */}
        <div className="relative z-20 flex justify-between text-xs uppercase tracking-widest text-[#ADB7BE]">
          <span className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
            </span>
            Open to work
          </span>
          <span>Nairobi, Kenya</span>
        </div>

        {/* stage: giant name behind, portrait in front, strokes between */}
        <div className="relative flex items-center justify-center my-8 min-h-[50vh]">
          <Layer mx={mx} my={my} depth={0.1} className="absolute inset-0 flex items-center justify-center z-0">
            <h1 className="font-serif font-black text-white/90 leading-none tracking-tighter text-[24vw] flex">
              {NAME.split("").map((c, i) => (
                <motion.span key={i} initial={{ y: 120, opacity: 0 }}
                  animate={done ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}>
                  {c}
                </motion.span>
              ))}
            </h1>
          </Layer>

          <Layer mx={mx} my={my} depth={0.2} className="absolute z-[4] w-full">
            <motion.div initial={{ width: 0 }} animate={done ? { width: "40vw" } : {}} transition={{ duration: 1, delay: 0.9 }}
              className="h-[3px] bg-gradient-to-r from-cyan-400 to-transparent ml-[8vw] -mt-16" />
          </Layer>

          <Layer mx={mx} my={my} depth={0.5} className="relative z-10">
            <motion.div initial={{ opacity: 0, y: 80, scale: 0.85 }}
              animate={done ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
              className="w-[min(62vw,340px)] aspect-[3/4]">
              <img src="/images/profile2.png" alt="Nasibo Dula" className="w-full h-full object-cover" draggable="false" />
            </motion.div>
          </Layer>
          

          <Layer mx={mx} my={my} depth={0.3} className="absolute z-[11] w-full">
            <motion.div initial={{ width: 0 }} animate={done ? { width: "26vw" } : {}} transition={{ duration: 1, delay: 1.1 }}
              className="h-[3px] bg-gradient-to-l from-cyan-400 to-transparent ml-auto mr-[8vw] mt-24" />
          </Layer>
        </div>

        {/* bottom row */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={done ? { opacity: 1, y: 0 } : {}} transition={{ delay: 1.3, duration: 0.7 }}
          className="relative z-20 flex flex-col md:flex-row gap-6 md:items-end justify-between">
          <p className="font-serif text-2xl sm:text-4xl text-white">
            <span className="italic text-cyan-400">I'm a </span>
            <TypeAnimation sequence={["Web Developer", 1200, "Data Scientist", 1200, "UI/UX Designer", 1200]}
              wrapper="span" speed={50} repeat={Infinity} />
          </p>
          <div className="flex gap-6 items-center">
            <a href="#contact" className="editorial-link text-white">Hire me</a>
            <a href="/Nasibo_Dula_CV.pdf" download className="editorial-link text-white">Download CV</a>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;