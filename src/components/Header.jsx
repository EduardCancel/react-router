import { NavLink } from 'react-router-dom';
import viteLogo from '/vite.svg';

export default function Header() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src={viteLogo} width={80} alt="Brand Logo" />
                        </a>
                        <button
                            className="navbar-toggler d-lg-none"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavId"
                            aria-controls="collapsibleNavId"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={'/'}>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={'/presentation'}>Presentation</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={'/listpost'}>Post</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
