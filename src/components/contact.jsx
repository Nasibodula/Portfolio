// import React, { useState } from "react";

// const Contact = () => {
//   const [emailSubmitted, setEmailSubmitted] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = {
//       email: e.target.email.value,
//       subject: e.target.subject.value,
//       message: e.target.message.value,
//     };
//     const JSONdata = JSON.stringify(data);
//     // Replace this endpoint with your API endpoint
//     const endpoint = "/api/send";

//     const options = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSONdata,
//     };

//     const response = await fetch(endpoint, options);
//     const resData = await response.json();

//     if (response.status === 200) {
//       console.log("Message sent.");
//       setEmailSubmitted(true);
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
//     >
//       <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
//       <div className="z-10">
//         <h5 className="text-xl font-bold text-white my-2">
//           Let's Connect
//         </h5>
//         <p className="text-[#ADB7BE] mb-4 max-w-md">
//           I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
//         </p>
//         <div className="socials flex flex-row gap-2">
//           <a href="https://github.com/nasibodula">
//             <img src="github-icon.svg" alt="Github Icon" />
//           </a>
//           <a href="https://linkedin.com/in/nasibo-dula-chudo-8a1296241">
//             <img src="linkedin-icon.svg" alt="Linkedin Icon" />
//           </a>
//         </div>
//       </div>
//       <div>
//         {emailSubmitted ? (
//           <p className="text-green-500 text-sm mt-2">
//             Email sent successfully!
//           </p>
//         ) : (
//           <form className="flex flex-col" onSubmit={handleSubmit}>
//             <div className="mb-6">
//               <label
//                 htmlFor="email"
//                 className="text-white block mb-2 text-sm font-medium"
//               >
//                 Your email
//               </label>
//               <input
//                 name="email"
//                 type="email"
//                 id="email"
//                 required
//                 className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//                 placeholder="jacob@google.com"
//               />
//             </div>
//             <div className="mb-6">
//               <label
//                 htmlFor="subject"
//                 className="text-white block text-sm mb-2 font-medium"
//               >
//                 Subject
//               </label>
//               <input
//                 name="subject"
//                 type="text"
//                 id="subject"
//                 required
//                 className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//                 placeholder="Just saying hi"
//               />
//             </div>
//             <div className="mb-6">
//               <label
//                 htmlFor="message"
//                 className="text-white block text-sm mb-2 font-medium"
//               >
//                 Message
//               </label>
//               <textarea
//                 name="message"
//                 id="message"
//                 className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//                 placeholder="Let's talk about..."
//               />
//             </div>
//             <button
//               type="submit"
//               className="bg-cyan-600 hover:bg-cyan-900 text-white font-medium py-2.5 px-5 rounded-lg w-full"
//             >
//               Send Message
//             </button>
//           </form>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React from "react";
import { motion } from "framer-motion";
import { EMAIL } from "./LetsTalk";

const LINKEDIN = "https://linkedin.com/in/nasibo-dula-chudo-8a1296241";
const GITHUB = "https://github.com/nasibodula";

const ArrowUpRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
    <path d="M7 17 17 7" /><path d="M7 7h10v10" />
  </svg>
);

// letters slide up one by one when scrolled into view
const parent = (stagger, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});
const child = (y, duration) => ({
  hidden: { y, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration, ease: [0.22, 1, 0.36, 1] } },
});

const Chars = ({ text, className = "", y = "110%", duration = 1, stagger = 0.04, delay = 0 }) => (
  <motion.span
    aria-label={text}
    className={`inline-block overflow-hidden pb-[0.12em] ${className}`}
    variants={parent(stagger, delay)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }}
  >
    {text.split("").map((c, i) => (
      <motion.span key={i} aria-hidden="true" variants={child(y, duration)} className="inline-block">
        {c === " " ? "\u00A0" : c}
      </motion.span>
    ))}
  </motion.span>
);

const fade = (delay) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay, ease: "easeOut" },
});

const Contact = () => (
  <section id="contact" className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden text-center py-24">
    <div className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

    <Chars
      text="have a project in mind?"
      y="100%" duration={0.8} stagger={0.02}
      className="text-xs sm:text-sm font-medium uppercase tracking-[0.22em] text-[#ADB7BE]"
    />

    <h2 className="font-sans font-semibold lowercase leading-[0.9] tracking-[-0.07em] text-white whitespace-nowrap text-[13.5vw] md:text-[min(15vw,13rem)]">
      <Chars text="let's talk." y="120%" duration={1.3} stagger={0.07} delay={0.2} />
    </h2>

    <motion.a {...fade(0.5)} href={`mailto:${EMAIL}`} aria-label={`Email ${EMAIL}`}
      className="mt-6 border-b-[1.5px] border-current pb-1 text-base sm:text-xl font-medium text-white transition-colors duration-300 hover:text-cyan-400">
      {EMAIL}
    </motion.a>

    <motion.div {...fade(0.65)} className="mt-8 flex flex-wrap items-center justify-center gap-4">
      <a href={`mailto:${EMAIL}`}
        className="group inline-flex h-12 md:h-14 items-center gap-2 rounded-full border-2 border-white bg-white px-8 text-xs md:text-sm font-semibold tracking-[0.22em] text-[#0a0a0c] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:bg-cyan-400">
        SAY HELLO <ArrowUpRight />
      </a>
      <a href={LINKEDIN} target="_blank" rel="noreferrer"
        className="group inline-flex h-12 md:h-14 items-center gap-2 rounded-full border-2 border-white px-8 text-xs md:text-sm font-semibold tracking-[0.22em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:bg-cyan-400/15">
        LINKEDIN <ArrowUpRight />
      </a>
      <a href={GITHUB} target="_blank" rel="noreferrer"
        className="group inline-flex h-12 md:h-14 items-center gap-2 rounded-full border-2 border-[#33353F] px-8 text-xs md:text-sm font-semibold tracking-[0.22em] text-[#ADB7BE] transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:text-white">
        GITHUB <ArrowUpRight />
      </a>
    </motion.div>
  </section>
);

export default Contact;