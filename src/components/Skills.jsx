function Skills() {
    return (
        <section className="mb-5">
            <h2 className="h4 text-secondary mb-3">Tech Stack</h2>
            <div className="row text-center">
                {['React', 'Vite', 'Tailwind', 'Bootstrap', 'C#', '.NET'].map((skill, i) => (
                    <div key={i} className="col-4 col-md-2 mb-3">
                        <span className="badge bg-light text-dark p-2 border">{skill}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;