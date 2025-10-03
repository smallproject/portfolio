import {Link} from "react-router-dom";

function Teaser() {
    return (
        <section className="mb-5">
            <h2 className="h4 text-secondary mb-3">About Me</h2>
            <p>
                I’m a junior developer based in North Holland, blending backend experience in C#/.NET with a growing
                frontend toolkit. I’m passionate about building maintainable UIs and exploring how AI can streamline
                daily life.
            </p>
            <Link to="/about" className="btn btn-outline-secondary">Learn more</Link>
        </section>
    );
}

export default Teaser;