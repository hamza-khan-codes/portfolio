import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";

const links = [
    { name: "Overview", path: "/portfolio/" },
    { name: "About", path: "/portfolio/about" },
    { name: "Projects", path: "/portfolio/projects" },
    { name: "Tech Stack", path: "/portfolio/skills" },
    { name: "Contact", path: "/portfolio/contact" },
];

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="relative z-50 border-b border-border">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-10">

                <NavLink to="/" className="leading-tight">
                    <span className="block text-lg font-bold text-heading">
                        HAMZA<span className="text-accent">.</span>
                    </span>
                    <span className="text-[10px] tracking-widest text-muted">
                        SOFTWARE DEVELOPER
                    </span>
                </NavLink>

                <div className="hidden items-center gap-7 md:flex">
                    {links.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            end={link.path === "/"}
                            className={({ isActive }) =>
                                `text-xs font-medium ${isActive
                                    ? "text-accent"
                                    : "text-body hover:text-heading"
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                <div className="hidden md:block">
                    <NavLink
                        to="/portfolio/contact"
                    className="flex items-center gap-2 rounded-md bg-surface px-4 py-2 text-xs text-heading hover:bg-surface-hover"
                    >
                    Let's Talk <FiArrowUpRight />
                </NavLink>
            </div>

            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-xl text-heading md:hidden"
                aria-label="Toggle navigation"
            >
                {menuOpen ? <FiX /> : <FiMenu />}
            </button>
        </nav>

            {
        menuOpen && (
            <div className="absolute left-0 top-full w-full border-b border-border bg-surface p-5 md:hidden">
                {links.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        end={link.path === "/"}
                        onClick={() => setMenuOpen(false)}
                        className="block border-b border-border py-4 text-sm text-heading"
                    >
                        {link.name}
                    </NavLink>
                ))}
            </div>
        )
    }
        </header >
    );
}

export default Navbar;