import {Link} from "react-router-dom";

function Teaser() {
    return (
        <section className="mb-5 text-start">
            <h2 className="h4 text-secondary mb-3 text-center" >About Me</h2>
            <p>
                I'm Jasper, a junior software developer based in North Holland with a strong foundation in C# and .NET, now expanding into modern frontend development with React, Vite, Bootstrap, and Tailwind. I thrive on building modular, maintainable interfaces and enjoy bridging backend reliability with frontend creativity.
            </p>
            <p>
                Beyond code, I'm deeply engaged in academic research exploring how AI can streamline everyday life. I value clarity, collaboration, and continuous learning—whether refining a portfolio project, drafting a professional reply, or contributing to the local tech community between Hoorn and Zaandam.
            </p>
            <p>
                I bring warmth, curiosity, and a pragmatic mindset to every challenge. My goal is to create meaningful digital experiences while growing as a developer and researcher in a world increasingly shaped by intelligent systems.
            </p>
            <Link to="/about" className="btn btn-outline-secondary align-content-center">Learn more</Link>
        </section>
    );
}

export default Teaser;