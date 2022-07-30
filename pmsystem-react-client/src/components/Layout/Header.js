import React, { useState, useEffect } from 'react'
import UserServices from "../../services/UserServices"
import { Link } from 'react-router-dom';

function Header() {
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user = UserServices.getCurrentUser();

        if (user) {
            setCurrentUser(user);
        }
    }, []);

    const logOut = () => {
        UserServices.logout();
    };
    return (
        <nav className="navbar navbar-expand-sm navbar-dark mb-4">
            <div className="container">

                <Link className="navbar-brand" to="/">
                    Project Management System
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="mobile-nav">
                    <ul className="navbar-nav mr-auto">
                        {currentUser && (<li className="nav-item">
                            <Link className="nav-link" to="/dashboard">
                                Dashboard
                            </Link>
                        </li>)}
                    </ul>

                    <ul className="navbar-nav ml-auto">
                        {currentUser ? (
                            <div className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a href="/" className="nav-link" onClick={logOut}>
                                        Logout
                                    </a>
                                </li>
                            </div>
                        ) : (
                            <div className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link to={"/register"} className="nav-link">
                                        Sign up
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/login"} className="nav-link">
                                        Login
                                    </Link>
                                </li>

                            </div>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
