import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1"><Link to="/">FIAP Blog</Link></span>
            </div>
        </nav>
    );
}