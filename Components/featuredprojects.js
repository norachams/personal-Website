import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiGithub, FiLink } from "react-icons/fi";

const projects = [
  {
    title: "Caramel",
    desc: "Caramel is an all-in-one job-hunting workspace that automatically organizes your applications, tracks updates from your email, and gives you a clean, stress-free dashboard to manage your entire job search.",
    href: "https://www.oncaramel.com/",
    img: "/caramel.png",
  },
  {
    title: "Voz",
    desc: "An AI voice chat assistant web app, where you can talk to it like a real person and revisit old chats. Used Vapi API and built with TypeScript and Next.js.",
    href: "https://voz-chat.vercel.app/",
    github: "https://github.com/norachams/Voz",
    img: "/voz.png",
  },
  {
    title: "Test Farm - Ingenico",
    desc: "An automated test farm that runs device tests in parallel, with a real-time dashboard for monitoring and control. Built with Flask/Python, Appium, backend APIs, and a React/JavaScript frontend.",
    img: "/testfarm.png",
  },
];

export default function FeaturedProjectsStrip() {
  const [active, setActive] = useState(0);
  const projectCount = projects.length;
  const tilts = useMemo(
    () => projects.map((_, idx) => (idx % 2 === 0 ? -8 - idx : 8 + idx)),
    []
  );

  const handleNext = () => {
    setActive((prev) => (prev + 1) % projectCount);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + projectCount) % projectCount);
  };

  return (
    <div className="w-full pt-2 featured-slider">
      <div className="mx-auto max-w-5xl rounded-3xl border border-[#e6dec6] bg-[#fefae0] shadow-2xl featured-shell">
        <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[1.3fr_0.9fr] md:p-10 featured-grid">
          <div
            className="relative min-h-[280px] sm:min-h-[360px] md:min-h-[420px] overflow-hidden featured-visual"
            style={{ minHeight: 340 }}
          >
            <AnimatePresence initial={false}>
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="absolute inset-0 origin-bottom"
                  initial={{ opacity: 0, scale: 0.9, rotate: tilts[index] }}
                  animate={{
                    opacity: index === active ? 1 : 0.72,
                    scale: index === active ? 1 : 0.95,
                    rotate: index === active ? 0 : tilts[index],
                    y: index === active ? [0, -50, 0] : 0,
                    zIndex: index === active ? projectCount + 2 : projectCount - index,
                  }}
                  exit={{ opacity: 0, scale: 0.9, rotate: tilts[index] }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    draggable="false"
                    className="h-full w-full rounded-3xl object-cover shadow-2xl ring-1 ring-[#e6dec6]/70"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-[#283618]/55 via-transparent to-transparent" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex flex-col justify-between gap-8 featured-copy">
            <motion.div
              key={projects[active].title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="flex flex-col gap-4"
            >
              <div>
                <p className="m-0 text-[11px] uppercase tracking-[0.18em] text-[#9c5b1f]">
                  Featured project
                </p>
                <h3 className="m-0 mt-2 text-2xl font-bold leading-tight text-[#283618]">
                  {projects[active].title}
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {projects[active].href && (
                  <a
                    href={projects[active].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#606c38] px-3 py-2 text-sm font-semibold text-[#fefae0] transition-colors hover:bg-[#283618]"
                  >
                    <FiLink /> Live site
                  </a>
                )}
                {projects[active].github && (
                  <a
                    href={projects[active].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#606c38] px-3 py-2 text-sm font-semibold text-[#283618] transition-colors hover:border-[#283618] hover:text-[#9c5b1f]"
                  >
                    <FiGithub /> View code
                  </a>
                )}
              </div>

              <motion.p className="m-0 text-sm leading-relaxed text-[#283618] sm:text-base">
                {projects[active].desc.split(" ").map((word, index) => (
                  <motion.span
                    key={`${projects[active].title}-${index}`}
                    initial={{ filter: "blur(12px)", opacity: 0, y: 6 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut", delay: index * 0.02 }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>

            <div className="flex items-center justify-between">
              
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous project"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e6dec6] bg-white text-[#283618] shadow-sm transition hover:-translate-y-0.5 hover:border-[#9c5b1f]"
                >
                  <FiArrowLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next project"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e6dec6] bg-white text-[#283618] shadow-sm transition hover:-translate-y-0.5 hover:border-[#9c5b1f]"
                >
                  <FiArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
