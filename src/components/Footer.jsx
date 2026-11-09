import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiArrowUpRight } from "react-icons/fi";

function Footer() {
    return (
        <footer className="border-t border-border bg-surface-dark">
            <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 py-8 sm:flex-row sm:items-center lg:px-10">

                <div>
                    <p className="text-sm font-bold text-heading">
                        HAMZA<span className="text-accent">.</span>
                    </p>

                    <p className="mt-2 text-xs text-muted">
                        Building useful digital experiences.
                    </p>

                    <p className="mt-2 text-[10px] text-muted">
                        © 2026 Hamza. All rights reserved.
                    </p>
                </div>

                <div className="flex items-center gap-6 text-xs text-muted">
                    <Link to="/portfolio/about">About</Link>
                    <Link to="/portfolio/projects">Projects</Link>
                    <Link to="/portfolio/contact">Contact</Link>
                </div>

                <div className="flex gap-5 text-lg text-muted">
                    <a href="https://github.com/hamza-khan-codes">
                        <FiGithub />
                    </a>

                    <a href="https://linkedin.com">
                        <FiLinkedin />
                    </a>

                    <a href="#top">
                        <FiArrowUpRight />
                    </a>
                </div>
            </div>
        </footer >
    );
}

export default Footer;