import {Link} from "react-router-dom";

function Hero()  {
    return(
     <section className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">Hi, I'm Jasper 👋</h1>
        <p className="lead text-muted">
            Junior Software Developer | React & Vite Enthusiast | AI Researcher
        </p>
        <div className="d-flex justify-content-center gap-3 mt-4">
            <Link to="/projects" className="btn btn-primary">View Projects</Link>
            <a href="/cv.pdf" className="btn btn-outline-primary">Download CV</a>
        </div>
    </section>
    );
}

export default Hero;