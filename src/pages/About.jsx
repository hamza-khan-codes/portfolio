import { FiCode, FiTarget, FiBookOpen } from "react-icons/fi";

const values = [
    {
        icon: FiCode,
        title: "Engineering Mindset",
        description: "Writing clean, maintainable and reusable code.",
    },
    {
        icon: FiTarget,
        title: "Problem Solving",
        description: "Breaking complex problems into simple solutions.",
    },
    {
        icon: FiBookOpen,
        title: "Continuous Learning",
        description: "Exploring modern technologies and improving every day.",
    },
];

function About() {
    return (
        <section className="py-10">
            <p className="text-[10px] uppercase tracking-widest text-accent">
                ABOUT ME / BACKGROUND
            </p>

            <h1 className="mt-5 max-w-3xl text-4xl font-semibold text-heading md:text-6xl">
                Turning curiosity into meaningful digital experiences.
            </h1>

            <p className="mt-7 max-w-2xl text-sm leading-8 text-body">
                I'm Hamza, a developer interested in building useful
                software products. My journey started with frontend
                development, where I discovered my interest in
                programming, logical thinking and problem solving.
            </p>

            <div className="mt-16 grid gap-5 md:grid-cols-3">
                {values.map(({ icon: Icon, title, description }) => (
                    <div
                        key={title}
                        className="rounded-card border border-border bg-surface p-7"
                    >
                        <Icon className="text-2xl text-accent" />

                        <h2 className="mt-5 font-semibold text-heading">
                            {title}
                        </h2>

                        <p className="mt-3 text-sm leading-7">{description}</p>
                    </div>
                ))}
            </div>

            <div className="mt-16 rounded-card border border-border bg-surface p-8 md:p-12">
                <p className="text-[10px] uppercase tracking-widest text-accent">
                    CURRENT DIRECTION
                </p>

                <h2 className="mt-4 text-2xl font-semibold text-heading">
                    From frontend development to full-stack and AI engineering.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7">
                    My goal is to develop strong foundations in software
                    engineering, master full-stack development and
                    gradually explore artificial intelligence.
                </p>
            </div>
        </section>
    );
}

export default About;