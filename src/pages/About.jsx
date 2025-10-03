function About() {
    return (
        <div className="container py-5">
            <section className="mb-5 text-center">
                <h1 className="display-5 fw-bold text-primary">About Me</h1>
                <p className="lead text-muted">
                    Developer. Researcher. Community Builder.
                </p>
            </section>

            <section className="mb-5">
                <h2 className="h4 text-secondary mb-3">Who I Am</h2>
                <p>
                    I'm Jasper, a junior software developer based in North Holland, blending backend experience in C# and .NET with a growing passion for frontend development. My current focus is building modular, maintainable interfaces using React, Vite, Bootstrap, and Tailwind.
                </p>
                <p>
                    I thrive on clarity, collaboration, and continuous learning. Whether I’m refining a portfolio project, drafting a professional reply, or contributing to the tech community between Hoorn and Zaandam, I bring warmth, curiosity, and a pragmatic mindset to every challenge.
                </p>
            </section>

            <section className="mb-5">
                <h2 className="h4 text-secondary mb-3">What I’m Working On</h2>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">📦 Building a frontend portfolio with React + Vite</li>
                    <li className="list-group-item">📚 Researching AI’s impact on daily life</li>
                    <li className="list-group-item">💬 Engaging with recruiters and consultants professionally</li>
                    <li className="list-group-item">🧠 Exploring maintainable UI patterns and modular design</li>
                </ul>
            </section>

            <section className="mb-5">
                <h2 className="h4 text-secondary mb-3">My Values</h2>
                <p>
                    I believe in authenticity, clear communication, and building things that matter. I enjoy connecting with others, sharing insights, and learning collaboratively. My journey is shaped by curiosity, resilience, and a genuine love for technology’s role in everyday life.
                </p>
            </section>

            <section className="text-center py-4 bg-light rounded">
                <h2 className="h5 mb-3">Let’s Connect</h2>
                <p className="mb-3">Open to collaboration, freelance work, and frontend opportunities.</p>
                <a href="https://www.linkedin.com/in/javillas/" className="btn btn-success">Reach Out</a>
            </section>
        </div>
    );
}

export default About;
