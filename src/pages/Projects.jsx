import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/portfolio";

function Projects() {
    return (
        <section className="py-10">
            <SectionHeading
                eyebrow="PORTFOLIO / SELECTED WORK"
                title="Projects & Case Studies"
                description="Exploring ideas through practical applications and modern software development."
            />

            <div className="space-y-6">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;