import React, { useEffect, useRef, useState } from "react";
import { animate, motion } from "framer-motion";

const CATS = [
  {
    id: "01", tag: "FRONTEND ENGINEERING", title: "Frontend & UI Craft",
    summary: "Responsive, accessible interfaces with clean component structure and smooth motion.",
    telemetry: "6 live projects · React",
    skills: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript ES6+", "React", "Framer Motion"],
  },
  {
    id: "02", tag: "BACKEND & APIs", title: "Backend & REST APIs",
    summary: "Server-side logic and REST endpoints that connect the frontend to real data.",
    telemetry: "Node · Express · MongoDB",
    skills: ["Node.js", "Express", "MongoDB", "REST APIs", "Nodemailer", "Authentication"],
  },
  {
    id: "03", tag: "FULL-STACK APPS", title: "End-to-End Web Apps",
    summary: "Taking an idea from UI to database to deployment, including installable PWAs.",
    telemetry: "MERN · PWA · Atlas sync",
    skills: ["MERN Stack", "React + Vite", "PWA", "MongoDB Atlas", "Auth flows", "Third-party APIs"],
  },
  {
    id: "04", tag: "DATA & MACHINE LEARNING", title: "Data Science in Python",
    summary: "Cleaning, analysing and modelling data to support decisions, not just dashboards.",
    telemetry: "DataCamp Associate Data Scientist",
    skills: ["Python", "Pandas", "Data Analysis", "Visualization", "Machine Learning"],
  },
  {
    id: "05", tag: "DESIGN TO CODE", title: "UI/UX & Visual Design",
    summary: "Layout, typography and interaction design, then built as working interfaces.",
    telemetry: "Design · Prototype · Ship",
    skills: ["Wireframing", "Prototyping", "Visual Design", "Adobe Illustrator", "Design Systems"],
  },
  {
    id: "06", tag: "WORKFLOW & DEPLOYMENT", title: "Git & Shipping",
    summary: "Version control and continuous deployment so work reaches users quickly.",
    telemetry: "GitHub · Vercel · Render",
    skills: ["Git", "GitHub", "Branching & PRs", "Vercel", "Render", "Debugging"],
  },
];

const N = CATS.length;
const STEP = 360 / N;

const CoreCapabilities = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const angle = useRef(0);
  const hovering = useRef(false);
  const animating = useRef(false);
  const visible = useRef(true);
  const drag = useRef({ on: false, x: 0, a: 0, moved: 0 });
  const ctrl = useRef(null);
  const lastActive = useRef(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(([e]) => { visible.current = e.isIntersecting; }, { threshold: 0 });
    io.observe(sectionRef.current);

    const paint = () => {
      const w = window.innerWidth;
      const radiusX = w < 768 ? 140 : w < 1100 ? 330 : 440;
      CATS.forEach((_, i) => {
        const el = cardRefs.current[i];
        if (!el) return;
        let d = (((i * STEP - angle.current) % 360) + 360) % 360;
        if (d > 180) d -= 360;
        const rad = (d * Math.PI) / 180;
        const s = Math.sin(rad), c = Math.cos(rad);
        const depth = (c + 1) / 2;               // 1 = front, 0 = back
        const scale = 0.64 + depth * 0.41;
        let blur = 0, opacity = 1;
        if (depth < 0.5) {
          const b = (0.5 - depth) / 0.5;
          blur = b * 4;
          opacity = 1 - b * 0.65;
        }
        el.style.transform = `translate3d(${s * radiusX}px, ${c * -20}px, ${c * 230}px) rotateY(${-d * 0.85}deg) scale(${scale})`;
        el.style.opacity = opacity;
        el.style.filter = blur > 0 ? `blur(${blur.toFixed(1)}px)` : "none";
        el.style.zIndex = Math.round(depth * 100);
        el.style.pointerEvents = depth > 0.3 ? "auto" : "none";
      });
      const idx = Math.round((((angle.current % 360) + 360) % 360) / STEP) % N;
      if (idx !== lastActive.current) { lastActive.current = idx; setActive(idx); }
    };

    let raf, last = performance.now();
    const loop = (t) => {
      const dt = (t - last) / 1000;
      last = t;
      if (visible.current) {
        if (!hovering.current && !drag.current.on && !animating.current && !reduce) {
          angle.current = (angle.current + dt * 18) % 360;
        }
        paint();
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => { cancelAnimationFrame(raf); io.disconnect(); ctrl.current?.stop(); };
  }, []);

  const rotateTo = (i) => {
    const cur = angle.current;
    const diff = ((((i * STEP - cur) % 360) + 540) % 360) - 180; // shortest path
    ctrl.current?.stop();
    animating.current = true;
    ctrl.current = animate(0, diff, {
      duration: 0.7, ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => { angle.current = (((cur + v) % 360) + 360) % 360; },
      onComplete: () => { animating.current = false; },
    });
  };

  const onDown = (e) => {
    ctrl.current?.stop(); animating.current = false;
    drag.current = { on: true, x: e.clientX, a: angle.current, moved: 0 };
  };
  const onMove = (e) => {
    const d = drag.current;
    if (!d.on) return;
    const dx = e.clientX - d.x;
    d.moved = Math.max(d.moved, Math.abs(dx));
    angle.current = (((d.a - dx * 0.32) % 360) + 360) % 360;
  };
  const onUp = () => { drag.current.on = false; };
  const onKey = (e) => {
    if (e.key === "ArrowRight") rotateTo((lastActive.current + 1) % N);
    if (e.key === "ArrowLeft") rotateTo((lastActive.current - 1 + N) % N);
  };

  return (
    <section id="capabilities" ref={sectionRef} className="relative py-20">
      <div className="mb-4 overflow-hidden">
        <motion.h2
          initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center font-serif font-black text-4xl sm:text-6xl text-white"
        >
          Core <span className="italic font-normal text-cyan-400">Capabilities</span>
        </motion.h2>
      </div>
      <p className="text-center text-[#ADB7BE] mb-6">Drag, swipe, or use ← → to explore</p>

      <div
        tabIndex={0} role="region" aria-label="Skills carousel"
        onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerLeave={onUp}
        onKeyDown={onKey}
        className="relative h-[620px] w-full flex items-center justify-center select-none cursor-grab active:cursor-grabbing outline-none"
        style={{ perspective: "1350px", touchAction: "pan-y" }}
      >
        <div className="hidden md:block absolute left-1/2 top-1/2 w-[900px] h-[360px] rounded-full border border-dashed border-white/10 pointer-events-none"
          style={{ transform: "translate(-50%,-190px) rotateX(76deg)" }} />
        <div className="hidden md:block absolute left-1/2 top-1/2 w-[860px] h-[340px] rounded-full border border-cyan-400/10 pointer-events-none"
          style={{ transform: "translate(-50%,0) rotateX(76deg)" }} />
        <div className="absolute left-1/2 top-1/2 w-[580px] h-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

        <div className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
          {CATS.map((c, i) => (
            <div
              key={c.id}
              ref={(el) => (cardRefs.current[i] = el)}
              onMouseEnter={() => (hovering.current = true)}
              onMouseLeave={() => (hovering.current = false)}
              onClick={() => { if (drag.current.moved < 6) rotateTo(i); }}
              className="absolute inset-0 m-auto h-fit w-[340px] max-w-[84vw] rounded-2xl border border-[#33353F] bg-[#101014]/90 p-7 backdrop-blur-xl cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.9)] transition-[border-color,box-shadow] duration-300 hover:border-cyan-400/70 hover:shadow-[0_0_50px_rgba(34,211,238,0.2)] hover:!opacity-100 hover:![filter:none]"
              style={{ willChange: "transform, opacity, filter" }}
            >
              <div className="flex items-center justify-between gap-2 mb-4 font-mono">
                <span className="rounded bg-cyan-400/15 px-2 py-0.5 text-[11px] font-bold text-cyan-400">{c.id}</span>
                <span className="flex-1 truncate text-right text-[10px] tracking-widest text-[#6E6E76]">{c.tag}</span>
              </div>
              <h3 className="font-serif font-black text-2xl text-white leading-tight mb-2">{c.title}</h3>
              <p className="text-sm text-[#ADB7BE] leading-relaxed mb-4">{c.summary}</p>
              <div className="mb-5 flex items-center gap-2 rounded-lg border border-[#33353F] bg-white/[0.03] px-3 py-2 font-mono text-[11px] text-[#D0D0D0]">
                <span className="text-cyan-400">⚡</span>{c.telemetry}
              </div>
              <ul className="flex flex-wrap gap-2">
                {c.skills.map((s) => (
                  <li key={s} className="rounded-full border border-[#33353F] bg-black/40 px-3 py-1 font-mono text-[11px] text-[#ADB7BE]">{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* controls */}
      <div className="flex items-center justify-center gap-6">
        <button onClick={() => rotateTo((active - 1 + N) % N)} aria-label="Previous"
          className="editorial-link text-[#ADB7BE] hover:text-white">← Prev</button>
        <div className="flex gap-2">
          {CATS.map((c, i) => (
            <button key={c.id} onClick={() => rotateTo(i)} aria-label={c.title}
              className={`h-2 rounded-full transition-all duration-300 ${i === active ? "w-8 bg-cyan-400" : "w-2 bg-[#33353F] hover:bg-[#6E6E76]"}`} />
          ))}
        </div>
        <button onClick={() => rotateTo((active + 1) % N)} aria-label="Next"
          className="editorial-link text-[#ADB7BE] hover:text-white">Next →</button>
      </div>
    </section>
  );
};

export default CoreCapabilities;