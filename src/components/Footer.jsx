// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
//       <div className="container p-12 flex justify-between">
//         <span>LOGO</span>
//         <p className="text-slate-600">All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { motion } from "framer-motion";

const WORD = "NASIBO";

const Footer = () => (
  <footer className="relative z-10 bg-[#0a0a0c] text-white px-6 md:px-12 pt-20 pb-6 border-t border-[#33353F]">
    <div className="flex flex-col lg:flex-row justify-between gap-14 pb-12 border-b border-[#33353F]">
      <div className="lg:w-2/5">
        <h2 className="font-serif font-black tracking-tighter leading-none text-7xl md:text-8xl flex overflow-hidden">
          {WORD.split("").map((c, i) => (
            <motion.span key={i} initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}>{c}</motion.span>
          ))}
          <span className="text-cyan-400">.</span>
        </h2>
        <p className="mt-6 text-[#ADB7BE] max-w-sm">
          Nasibo builds full-stack web apps <em className="font-serif italic text-white">that people rely on</em>, and backs them with data.
        </p>
        <div className="flex gap-4 mt-6">
          {[["https://github.com/nasibodula", "github-icon.svg", "GitHub"],
            ["https://linkedin.com/in/nasibo-dula-chudo-8a1296241", "linkedin-icon.svg", "LinkedIn"]].map(([href, icon, label]) => (
            <motion.a key={label} href={href} aria-label={label} whileHover={{ y: -4 }} className="opacity-70 hover:opacity-100">
              <img src={icon} alt={label} className="h-7 w-7" />
            </motion.a>
          ))}
        </div>
      </div>

      <div className="flex gap-16 md:gap-24">
        <div className="flex flex-col gap-3">
          <h3 className="font-sans text-xs font-bold uppercase tracking-[0.2em] mb-2">Explore</h3>
          <a className="editorial-link text-[#ADB7BE] hover:text-white" href="#about">About</a>
          <a className="editorial-link text-[#ADB7BE] hover:text-white" href="#capabilities">Capabilities</a>
          <a className="editorial-link text-[#ADB7BE] hover:text-white" href="#projects">Projects</a>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-sans text-xs font-bold uppercase tracking-[0.2em] mb-2">Contact</h3>
          <a className="editorial-link text-[#ADB7BE] hover:text-white normal-case tracking-normal text-sm" href="mailto:nasibochudo@gmail.com">nasibochudo@gmail.com</a>
          <a className="editorial-link text-[#ADB7BE] hover:text-white" href="#contact">Get in touch</a>
        </div>
      </div>
    </div>

    <div className="flex flex-col sm:flex-row justify-between gap-3 pt-6 text-sm text-[#6E6E76]">
      <p>© {new Date().getFullYear()} Nasibo Dula. All rights reserved.</p>
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="editorial-link text-[#6E6E76] hover:text-white">Back to top ↑</button>
    </div>
  </footer>
);

export default Footer;