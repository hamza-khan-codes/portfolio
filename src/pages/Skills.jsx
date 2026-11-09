import { skills } from "../data/portfolio";
import { FaCode } from "react-icons/fa";

function Skills() {
    return (
        <section className="py-10">
            <p className="text-[10px] uppercase tracking-widest text-accent">
                CAPABILITIES / TECHNOLOGIES
            </p>

            <h1 className="mt-5 text-4xl font-semibold text-heading md:text-6xl">
                Tools of my trade.
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7">
                Technologies and tools I use or am currently learning
                to build modern software applications.
            </p>

            <div className="mt-14 grid gap-5 md:grid-cols-2">
                {skills.map((group) => (
                    <div
                        key={group.category}
                        className="rounded-card border border-border bg-surface p-8"
                    >
                        <div className="flex items-center gap-3">
                            <FaCode className="text-accent" />

                            <h2 className="text-xs font-bold tracking-widest text-heading">
                                {group.category}
                            </h2>
                        </div>

                        <div className="mt-7 flex flex-wrap gap-3">
                            {group.items.map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-md border border-border bg-background px-4 py-3 text-xs text-body hover:border-accent hover:text-accent"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;