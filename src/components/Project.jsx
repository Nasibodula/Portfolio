"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React AI StudyPlanner Website",
    description: "Project 1 description",
    image: "/images/projects/Studyplanner.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Nasibodula/AI_study-planner",
    previewUrl: "https://ai-study-planner-2.onrender.com",
  },
  {
    id: 2,
    title: "TibaTech Website",
    description: "Project 2 description",
    image: "/images/projects/TibaTech.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Nasibodula/TibaTech",
    previewUrl: "https://tiba-tech.vercel.app/",
  },
  {
    id: 3,
    title: "Farmer Assistance Website",
    description: "Project 3 description",
    image: "/images/projects/Farmer.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Nasibodula/farmer",
    previewUrl: "https://farmer-pi.vercel.app/",
  },
  {
    id: 4,
    title: "Hospital Website",
    description: "Project 3 description",
    image: "/images/projects/hospital.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Nasibodula/Hospital-website",
    previewUrl: "https://hospital-website-flame.vercel.app/",
  },
  {
    id: 5,
    title: "School Website",
    description: "Project 4 description",
    image: "/images/projects/school.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Nasibodula/School-Website",
    previewUrl: "https://school-website-lime.vercel.app/",
  },


  {
    id: 6,
    title: "Weather App",
    description: "Project 6 description",
    image: "/images/projects/weather.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Nasibodula/Weather-App",
    previewUrl: "https://weather-app-ruddy-phi-27.vercel.app/",
  },
];

const Projects = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
