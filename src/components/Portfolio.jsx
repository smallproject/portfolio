import {Link} from "react-router-dom";

function Portfolio() {
    return (
        <section className="mb-5">
            <h2 className="h4 text-secondary mb-3">Featured Projects</h2>
            <div className="row">
                {/* Replace with dynamic cards later */}
                <div className="col-md-4 mb-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">React Portfolio</h5>
                            <p className="card-text">Modular, responsive portfolio built with React + Vite.</p>
                            <a href="https://github.com/yourusername/react-portfolio"
                               className="btn btn-sm btn-primary">GitHub</a>
                        </div>
                    </div>
                </div>
                {/* Add more cards as needed */}
            </div>
            <div className="text-end mt-2">
                <Link to="/projects" className="btn btn-link">See all projects →</Link>
            </div>
        </section>
    );
}

export default Portfolio;