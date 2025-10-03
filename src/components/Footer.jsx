function Footer() {
    return (
        <footer className="bg-light text-center text-muted py-4 mt-5 border-top">
            <div className="container">
                <p className="mb-1">© {new Date().getFullYear()} Jasper.dev</p>
                <p className="mb-0">
                    Built with <span className="text-primary fw-semibold">React + Vite</span> | Styled with <span className="text-success fw-semibold">Bootstrap</span>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
