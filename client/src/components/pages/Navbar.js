import { Outlet, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../../main.js";


const Navbar = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
        window.location.reload();
    };

    const handleDeleteAccount = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        const del = { id: user._id }
        fetchData("/user/delete", del, "DELETE")
            .then((data) => {
                if (data.success === "Account deleted") {
                    window.alert('Account deleted')
                    localStorage.removeItem('user');
                    setIsLoggedIn(false);
                    navigate('/');
                    window.location.reload();
                }
            })
            .catch((error) => {
                window.alert(error.message);
            });

    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {!isLoggedIn && (
                                <>
                                    <li className="nav-item ">
                                        <Link className="nav-link btn" aria-current="page" to="/Register">Register</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link btn" to="/Login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link btn" to="/Reset">Reset</Link>
                                    </li>
                                </>
                            )}
                            {isLoggedIn && (
                                <>
                                   
                                    <li className="nav-item">
                                        <Link className="nav-link btn" to="/Profile">Profile</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link btn" to="/Notes">Take Notes</Link>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link btn btn-link" onClick={handleLogout}>
                                            Logout
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link btn btn-link" onClick={handleDeleteAccount}>
                                            Delete Account
                                        </button>
                                    </li>
                                    
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    );
};

export default Navbar;
