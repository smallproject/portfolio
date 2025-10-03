import { Link } from 'react-router-dom';
function NotFound () {
    return (
        <div className="container text-center py-5">
            <h1 className="display-4 text-danger fw-bold">404</h1>
            <p className="lead text-muted mb-4">Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" className="btn btn-primary">Go back home</Link>
        </div>
    );
};

export default NotFound;
