// "use client";
// import React, { useState, useRef } from "react";
// import ProjectCard from "./ProjectCard";
// import ProjectTag from "./ProjectTag";
// import { motion, useInView } from "framer-motion";

// const projectsData = [
//   {
//     id: 1,
//     title: "React AI StudyPlanner Website",
//     description: "Project 1 description",
//     image: "/images/projects/Studyplanner.png",
//     tag: ["All", "Web"],
//     gitUrl: "https://github.com/Nasibodula/AI_study-planner",
//     previewUrl: "https://ai-study-planner-2.onrender.com",
//   },
//   {
//     id: 2,
//     title: "TibaTech Website",
//     description: "Project 2 description",
//     image: "/images/projects/TibaTech.png",
//     tag: ["All", "Web"],
//     gitUrl: "https://github.com/Nasibodula/TibaTech",
//     previewUrl: "https://tiba-tech.vercel.app/",
//   },
//   {
//     id: 3,
//     title: "Farmer Assistance Website",
//     description: "Project 3 description",
//     image: "/images/projects/Farmer.png",
//     tag: ["All", "Web"],
//     gitUrl: "https://github.com/Nasibodula/farmer",
//     previewUrl: "https://farmer-pi.vercel.app/",
//   },
//   {
//     id: 4,
//     title: "Hospital Website",
//     description: "Project 3 description",
//     image: "/images/projects/hospital.png",
//     tag: ["All", "Web"],
//     gitUrl: "https://github.com/Nasibodula/Hospital-website",
//     previewUrl: "https://hospital-website-flame.vercel.app/",
//   },
//   {
//     id: 5,
//     title: "School Website",
//     description: "Project 4 description",
//     image: "/images/projects/school.png",
//     tag: ["All", "Web"],
//     gitUrl: "https://github.com/Nasibodula/School-Website",
//     previewUrl: "https://school-website-lime.vercel.app/",
//   },


//   {
//     id: 6,
//     title: "Weather App",
//     description: "Project 6 description",
//     image: "/images/projects/weather.png",
//     tag: ["All", "Web"],
//     gitUrl: "https://github.com/Nasibodula/Weather-App",
//     previewUrl: "https://weather-app-ruddy-phi-27.vercel.app/",
//   },
// ];

// const Projects = () => {
//   const [tag, setTag] = useState("All");
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   const handleTagChange = (newTag) => {
//     setTag(newTag);
//   };

//   const filteredProjects = projectsData.filter((project) =>
//     project.tag.includes(tag)
//   );

//   const cardVariants = {
//     initial: { y: 50, opacity: 0 },
//     animate: { y: 0, opacity: 1 },
//   };

//   return (
//     <section id="projects">
//       <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
//         My Projects
//       </h2>
//       <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
//         <ProjectTag
//           onClick={handleTagChange}
//           name="All"
//           isSelected={tag === "All"}
//         />
//         <ProjectTag
//           onClick={handleTagChange}
//           name="Web"
//           isSelected={tag === "Web"}
//         />
//         <ProjectTag
//           onClick={handleTagChange}
//           name="Mobile"
//           isSelected={tag === "Mobile"}
//         />
//       </div>
//       <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
//         {filteredProjects.map((project, index) => (
//           <motion.li
//             key={index}
//             variants={cardVariants}
//             initial="initial"
//             animate={isInView ? "animate" : "initial"}
//             transition={{ duration: 0.3, delay: index * 0.4 }}
//           >
//             <ProjectCard
//               key={project.id}
//               title={project.title}
//               description={project.description}
//               imgUrl={project.image}
//               gitUrl={project.gitUrl}
//               previewUrl={project.previewUrl}
//             />
//           </motion.li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default Projects;


import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import StarBorder from "./StarBorder";

// TODO: check each stack and description below and make them accurate for your projects
const projects = [
  {
    id: "001", title: "React AI StudyPlanner", stack: "React / AI / Render",
    description: "A study planning app that turns your subjects and deadlines into a schedule you can follow.",
    image: "/images/projects/Studyplanner.png",
    gitUrl: "https://github.com/Nasibodula/AI_study-planner",
    previewUrl: "https://ai-study-planner-2.onrender.com",
  },
  {
    id: "002", title: "TibaTech Website", stack: "React / Tailwind CSS / Vercel",
    description: "A responsive website for a health-technology brand, built to present its services clearly.",
    image: "/images/projects/TibaTech.png",
    gitUrl: "https://github.com/Nasibodula/TibaTech",
    previewUrl: "https://tiba-tech.vercel.app/",
  },
  {
    id: "003", title: "Farmer Assistance", stack: "React / Tailwind CSS / Vercel",
    description: "A web platform that gives farmers practical information and tools in one place.",
    image: "/images/projects/Farmer.png",
    gitUrl: "https://github.com/Nasibodula/farmer",
    previewUrl: "https://farmer-pi.vercel.app/",
  },
  {
    id: "004", title: "Hospital Website", stack: "React / Tailwind CSS / Vercel",
    description: "A clean, accessible hospital website covering services, departments and contact details.",
    image: "/images/projects/hospital.png",
    gitUrl: "https://github.com/Nasibodula/Hospital-website",
    previewUrl: "https://hospital-website-flame.vercel.app/",
  },
  {
    id: "005", title: "School Website", stack: "React / Tailwind CSS / Vercel",
    description: "A school website that presents programmes, news and admissions information.",
    image: "/images/projects/school.png",
    gitUrl: "https://github.com/Nasibodula/School-Website",
    previewUrl: "https://school-website-lime.vercel.app/",
  },
  {
    id: "006", title: "Weather App", stack: "React / Weather API / Vercel",
    description: "Search any city and see current conditions and the forecast in a simple interface.",
    image: "/images/projects/weather.png",
    gitUrl: "https://github.com/Nasibodula/Weather-App",
    previewUrl: "https://weather-app-ruddy-phi-27.vercel.app/",
  },
];

const Card = ({ p, i, n, progress }) => {
  // each card shrinks a little more as later cards stack on top of it
  const target = 1 - (n - 1 - i) * 0.05;
  const scale = useTransform(progress, [i / n, 1], [1, target]);

  return (
    <div className="sticky top-0 h-screen flex items-center justify-center">
      <motion.div
        style={{ scale, top: `calc(${i} * 22px)`, transformOrigin: "top center" }}
        className="relative w-full max-w-6xl"
      >
        <StarBorder as="div" className="works-card w-full" color="#00f2fe, #4facfe, #7000ff" speed="8s">
          <div className="p-5 md:p-10 flex flex-col gap-5 md:gap-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4 md:gap-6">
                <span className="font-sans font-black text-5xl md:text-7xl leading-[0.8] text-white">{p.id}</span>
                <div>
                  <span className="block font-sans font-black uppercase text-base md:text-xl text-white">{p.title}</span>
                  <span className="block text-xs md:text-sm text-white/90">{p.stack}</span>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <a href={p.gitUrl} target="_blank" rel="noopener noreferrer" className="editorial-link text-white">Code</a>
                <StarBorder as="a" href={p.previewUrl} target="_blank" rel="noopener noreferrer"
                  className="works-btn" color="#f6d365, #fda085" speed="3s">
                  Live Project
                </StarBorder>
              </div>
            </div>

            <div className="grid md:grid-cols-[1.2fr_1fr] gap-5 md:gap-8">
              <a href={p.previewUrl} target="_blank" rel="noopener noreferrer">
                <img src={p.image} alt={p.title}
                  className="w-full h-44 sm:h-60 md:h-[340px] object-cover rounded-[24px] md:rounded-[32px] border border-white/10" />
              </a>
              <p className="self-center text-base md:text-xl leading-relaxed text-[#f0f0f0]">{p.description}</p>
            </div>
          </div>
        </StarBorder>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section id="projects" className="relative">
      {/* giant marquee header */}
      <div className="-mx-12 overflow-hidden border-y border-white/20 py-6 md:py-10 mb-10">
        <div className="works-marquee flex w-max whitespace-nowrap items-center">
          {[0, 1, 2, 3].map((b) => (
            <span key={b} aria-hidden={b > 0 ? "true" : undefined}
              className="flex items-center font-sans font-medium text-[13vw] leading-[0.8] tracking-[-0.05em] text-white">
              Selected Works
              <span className="mx-[3vw] font-light">—</span>
            </span>
          ))}
        </div>
      </div>

      {/* stacking cards */}
      <div ref={ref} className="relative">
        {projects.map((p, i) => (
          <Card key={p.id} p={p} i={i} n={projects.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
};

export default Projects;