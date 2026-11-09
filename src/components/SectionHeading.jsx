function SectionHeading({ eyebrow, title, description }) {
    return (
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
                    {eyebrow}
                </p>

                <h2 className="text-3xl font-semibold tracking-tight text-heading md:text-4xl">
                    {title}
                </h2>
            </div>

            {description && (
                <p className="max-w-sm text-sm leading-6 text-muted">
                    {description}
                </p>
            )}
        </div>
    );
}

export default SectionHeading;