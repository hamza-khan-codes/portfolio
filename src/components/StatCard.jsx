function StatCard({ number, suffix, title, description }) {
    return (
        <div className="rounded-card border border-border bg-surface p-6">
            <p className="text-[10px] uppercase tracking-widest text-muted">
                {title}
            </p>

            <h3 className="mt-3 text-4xl font-bold text-heading">
                {number}
                <span className="text-accent">{suffix}</span>
            </h3>

            <p className="mt-3 text-xs leading-6 text-muted">
                {description}
            </p>
        </div>
    );
}

export default StatCard;