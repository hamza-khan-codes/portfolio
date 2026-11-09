import { useState } from "react";

import {
    FiMail,
    FiGithub,
    FiLinkedin,
    FiArrowUpRight,
} from "react-icons/fi";

function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
        const body = encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
        );

        window.location.href =
            `mailto:your-email@example.com?subject=${subject}&body=${body}`;
    };

    return (
        <section className="py-10">
            <p className="text-[10px] uppercase tracking-widest text-accent">
                CONTACT / GET IN TOUCH
            </p>

            <h1 className="mt-5 max-w-2xl text-4xl font-semibold text-heading md:text-6xl">
                Let's build something meaningful.
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7">
                Have an interesting idea, collaboration or opportunity?
                I'd be happy to hear about it.
            </p>

            <div className="mt-14 grid gap-10 md:grid-cols-2">

                <div className="space-y-5">
                    <div className="rounded-card border border-border bg-surface p-7">
                        <FiMail className="text-2xl text-accent" />

                        <h2 className="mt-5 font-semibold text-heading">
                            Email
                        </h2>

                        <p className="mt-2 text-sm text-muted">
                            your-email@example.com
                        </p>
                    </div>

                    <div className="rounded-card border border-border bg-surface p-7">
                        <h2 className="font-semibold text-heading">
                            Find me online
                        </h2>

                        <div className="mt-5 flex gap-5 text-xl text-muted">
                            <a href="https://github.com/hamza-khan-codes">
                                <FiGithub />
                            </a>

                            <a href="https://linkedin.com">
                                <FiLinkedin />
                            </a>
                        </div>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5 rounded-card border border-border bg-surface p-7"
                >
                    <div>
                        <label className="mb-2 block text-xs text-heading">
                            Your Name
                        </label>

                        <input
                            required
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="w-full rounded-md border border-border bg-background p-4 text-sm outline-none focus:border-accent"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-xs text-heading">
                            Email Address
                        </label>

                        <input
                            required
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full rounded-md border border-border bg-background p-4 text-sm outline-none focus:border-accent"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-xs text-heading">
                            Message
                        </label>

                        <textarea
                            required
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            rows={5}
                            placeholder="Tell me about your project..."
                            className="w-full resize-none rounded-md border border-border bg-background p-4 text-sm outline-none focus:border-accent"
                        />
                    </div>

                    <button
                        type="submit"
                        className="flex w-full items-center justify-center gap-2 rounded-md bg-accent p-4 text-sm font-bold text-background hover:bg-accent-hover"
                    >
                        Send Message <FiArrowUpRight />
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;