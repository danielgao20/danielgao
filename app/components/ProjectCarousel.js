"use client";

import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Sage",
    description: "An intelligent legal workbench that helps lawyers streamline workflows, organize documents, and surface insights faster — Notion for lawyers.",
    imageUrl: "/sage.jpg",
    projectUrl: "https://hellosage.app/"
  },
  {
    title: "Glance",
    description: "An automated documentation platform that keeps teams effortlessly aligned by eliminating inefficiencies in communication and knowledge-sharing.",
    imageUrl: "/glance.jpg",
    projectUrl: "https://glance-landing.vercel.app/"
  },
  {
    title: "AMANDA",
    description: "Inspired by Baymax, a virtual medical assistant that detects urgent skin conditions and provides treatment plans, built to improve access to basic healthcare.",
    imageUrl: "/amanda.jpg",
    projectUrl: "https://devpost.com/software/amanda-o1eg2a"
  },
  {
    title: "Claude Cortex",
    description: "USC x Anthropic Claude Hackathon. A secure, multi-agent reasoning engine powered by Anthropic’s Claude API that helps users think more deeply, from more angles — in seconds.",
    imageUrl: "/claude-cortex.jpg",
    projectUrl: "https://devpost.com/software/claude-cortex"
  },
  {
    title: "Intervene",
    description: "USC x 8VC Llama Stack Challenge 1st Place Winner. Intervene is an on-device autonomous desktop agent that takes over repetitive digital workflows.",
    imageUrl: "/intervene.jpg",
    projectUrl: "https://www.producthunt.com/products/intervene"
  },
  {
    title: "Keepsake",
    description: "An estate planning platform that helps attorneys turn complex legal documents into interactive family portals, making it easier for clients to understand, manage, and pass down their legacies.",
    imageUrl: "/keepsake.jpg",
    projectUrl: "https://hellokeepsake.com/"
  }
];

export default function ProjectCarousel() {
  const scrollRef = useRef(null);
  const [showArrows, setShowArrows] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Check scroll position for fade/arrow logic
  const checkScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const { scrollLeft, scrollWidth, offsetWidth } = container;
    const AT_START_THRESHOLD = 4;
    const AT_END_THRESHOLD = 4;

    // If not overflowing, never show fades/arrows
    if (scrollWidth <= offsetWidth + 1) {
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }

    // At start
    setCanScrollLeft(Math.abs(scrollLeft) > AT_START_THRESHOLD);

    // At end
    setCanScrollRight(Math.abs(scrollLeft + offsetWidth - scrollWidth) > AT_END_THRESHOLD);
  };

  useEffect(() => {
    checkScroll();
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      container.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  // Smooth scroll handler
  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = container.offsetWidth * 0.8; // scroll by 80% of container width
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Show arrows on hover
  const handleMouseEnter = () => setShowArrows(true);
  const handleMouseLeave = () => setShowArrows(false);

  return (
    <div className="relative w-full" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Fade overlays */}
      <div className={`pointer-events-none absolute left-0 top-0 h-full w-32 z-20 bg-gradient-to-r from-gray-100 dark:from-gray-900 to-transparent transition-opacity duration-300 hidden sm:block ${canScrollLeft ? 'opacity-100' : 'opacity-0'}`} />
      <div className={`pointer-events-none absolute right-0 top-0 h-full w-32 z-20 bg-gradient-to-l from-gray-100 dark:from-gray-900 to-transparent transition-opacity duration-300 hidden sm:block ${canScrollRight ? 'opacity-100' : 'opacity-0'}`} />

      {/* Left arrow */}
      <button
        aria-label="Scroll left"
        className={`absolute left-2 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/80 dark:bg-gray-900/80 rounded-full shadow hover:bg-white dark:hover:bg-gray-800 transition-opacity duration-300 hidden md:block ${showArrows && canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => scroll("left")}
        style={{ pointerEvents: showArrows && canScrollLeft ? "auto" : "none" }}
      >
        <FaChevronLeft size={24} />
      </button>
      {/* Carousel container */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory py-2 px-1 sm:px-3 no-scrollbar bg-gray-100 dark:bg-gray-900"
        style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}
        tabIndex={0}
      >
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="min-w-[220px] max-w-[260px] w-full lg:min-w-[240px] lg:max-w-[280px] flex-shrink-0 snap-center"
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
      {/* Right arrow */}
      <button
        aria-label="Scroll right"
        className={`absolute right-2 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/80 dark:bg-gray-900/80 rounded-full shadow hover:bg-white dark:hover:bg-gray-800 transition-opacity duration-300 hidden md:block ${showArrows && canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => scroll("right")}
        style={{ pointerEvents: showArrows && canScrollRight ? "auto" : "none" }}
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
}
