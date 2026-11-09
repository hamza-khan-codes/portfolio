import { Link } from "react-router-dom";
import { FiArrowUpRight, FiMail } from "react-icons/fi";

function CTA() {
    return (
        <section className="my-20 flex flex-col justify-between gap-8 rounded-card border border-border bg-gradient-to-br from-surface to-surface-dark p-8 md:flex-row md:items-center md:p-12">

            <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-accent">
                    Have a project in mind?
                </p>

                <h2 className="mt-4 max-w-lg text-3xl font-semibold text-heading">
                    Have an ambitious platform or application in mind?
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-muted">
                    Let's turn your idea into a useful, scalable digital product.
                </p>
            </div>

            <div className="flex flex-wrap gap-3">
                <Link
                    to="/portfolio/contact"
                    className="flex items-center gap-3 rounded-md bg-accent px-5 py-4 text-sm font-bold text-background hover:bg-accent-hover"
                >
                    Schedule a Discussion <FiArrowUpRight />
                </Link>

                <a
                    href="mailto:hamzakhanlabs.com"
                    className="flex items-center gap-2 rounded-md bg-background px-5 py-4 text-sm text-heading hover:bg-surface-hover"
                >
                    Email Me <FiMail />
                </a>
            </div>
        </section>
    );
}

export default CTA;