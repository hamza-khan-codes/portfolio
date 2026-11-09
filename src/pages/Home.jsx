import { FiArrowUpRight, FiGithub, FiLinkedin } from "react-icons/fi";

import { Link } from "react-router-dom";

import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import StatCard from "../components/StatCard";
import CTA from "../components/CTA";

import { projects } from "../data/portfolio";

const technologies = [
    "React.js",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "Firebase",
    "Git",
];

function Home() {
    return (
        <>
            {/* HERO */}
            <section className="flex min-h-[540px] flex-col justify-center py-16">

                <div className="mb-8 flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-accent shadow-glow" />

                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
                        Available for opportunities · Hyderabad, Pakistan
                    </p>
                </div>

                <h1 className="max-w-4xl text-4xl font-semibold leading-[1.15] tracking-tight text-heading sm:text-5xl lg:text-6xl">
                    Building refined web platforms and fluid native mobile apps.
                </h1>

                <p className="mt-7 max-w-2xl text-sm leading-7 text-body">
                    I'm Hamza, a frontend developer passionate about
                    creating modern digital experiences. I focus on
                    React.js, scalable interfaces and thoughtful user
                    experiences.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                        to="/portfolio/projects"
                        className="flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-xs font-bold text-background hover:bg-accent-hover"
                    >
                        View Selected Work <FiArrowUpRight />
                    </Link>

                    <Link
                        to="/portfolio/about"
                        className="flex items-center gap-2 rounded-md bg-surface px-5 py-3 text-xs font-medium text-heading hover:bg-surface-hover"
                    >
                        Explore My Story <FiArrowUpRight />
                    </Link>
                </div>

                <div className="mt-8 flex gap-5">
                    <a
                        href="https://github.com/hamza-khan-codes"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="text-lg text-muted hover:text-accent"
                    >
                        <FiGithub />
                    </a>

                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="text-lg text-muted hover:text-accent"
                    >
                        <FiLinkedin />
                    </a>
                </div>
            </section>

            {/* TECHNOLOGY STRIP */}
            <section className="mb-28">
                <p className="mb-5 text-[10px] uppercase tracking-widest text-muted">
                    TECH STACK / TOOLS
                </p>

                <div className="flex flex-wrap gap-3">
                    {technologies.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full border border-border bg-surface px-4 py-2 text-[11px] text-body"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </section>

            {/* PROJECTS */}
            <section>
                <SectionHeading
                    eyebrow="Selected Work"
                    title="Engineered Case Studies"
                    description="A collection of digital products, experiments and applications built with modern technologies."
                />

                <div className="space-y-5">
                    {projects.slice(0, 2).map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>

                <Link
                    to="/portfolio/projects"
                    className="mt-8 inline-flex items-center gap-2 text-xs font-semibold text-accent hover:text-heading"
                >
                    Explore All Projects <FiArrowUpRight />
                </Link>
            </section>

            {/* STATS */}
            <section className="my-28 grid gap-5 md:grid-cols-3">
                <StatCard
                    number="3"
                    suffix="+"
                    title="PROJECTS BUILT"
                    description="Practical applications built to solve real-world problems."
                />

                <StatCard
                    number="7"
                    suffix="+"
                    title="TECHNOLOGIES"
                    description="Working with modern frontend and backend technologies."
                />

                <StatCard
                    number="100"
                    suffix="%"
                    title="LEARNING FOCUSED"
                    description="Committed to continuous learning and improving engineering skills."
                />
            </section>

            {/* CTA */}
            <CTA />
        </>
    );
}

export default Home;