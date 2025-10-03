import {Link} from "react-router-dom";

function Contact() {
    return (
        <section className="text-center py-4 bg-light rounded">
            <h2 className="h5 mb-3">Let’s connect</h2>
            <p className="mb-3">Open to collaboration, freelance work, and frontend opportunities.</p>
            <Link to="/contact" className="btn btn-success">Contact Me</Link>
        </section>
    );
}

export default Contact;