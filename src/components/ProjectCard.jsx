import { FiArrowUpRight } from "react-icons/fi";

function ProjectCard({ project }) {
    return (
        <article className="grid overflow-hidden rounded-card border border-border bg-surface md:grid-cols-2">

            <div className="flex flex-col justify-center p-7 md:p-10">
                <p className="text-[10px] font-bold uppercase tracking-widest text-accent">
                    {project.category}
                </p>

                <h3 className="mt-4 text-2xl font-semibold text-heading">
                    {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-body">
                    {project.description}
                </p>

                <ul className="mt-5 space-y-3">
                    {project.features.map((feature) => (
                        <li
                            key={feature}
                            className="flex items-center gap-2 text-xs text-body"
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                            {feature}
                        </li>
                    ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                        <span
                            key={item}
                            className="rounded bg-surface-dark px-3 py-1.5 text-[10px] text-muted"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                <a
                    href={project.link}
                    className="mt-7 flex items-center gap-2 text-xs font-semibold text-accent hover:text-heading"
                >
                    Explore Project <FiArrowUpRight />
                </a>
            </div>

            <div className="min-h-64 overflow-hidden bg-surface-dark p-5 md:p-7">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="h-full min-h-60 w-full rounded-lg object-cover"
                    />
                ) : (
                    <div className="flex h-full min-h-60 items-center justify-center rounded-lg border border-border bg-background">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-accent">
                                {project.shortName}
                            </div>
                            <p className="mt-3 text-xs tracking-widest text-muted">
                                PROJECT PREVIEW
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </article>
    );
}

export default ProjectCard;