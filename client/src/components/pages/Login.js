import { fetchData } from "../../main.js"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Login = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        Email: '',
        Password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData("/user/login", user, "POST")
            .then((data) => {
                if (!data.message) {
                    localStorage.setItem('user', JSON.stringify(data));
                    navigate('/');
                    window.location.reload();
                } else {
                    setErrorMessage(data.message);
                }
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    }

    const { Email, Password } = user;

    const [errorMessage, setErrorMessage] = useState(null);

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        setErrorMessage(null);
    }

    return (
        <div>
            <div className="container mt-4" style={{ width: '50%', padding: '10px' }}>
                <Helmet>
                    <title>Hotel - Login</title>
                </Helmet>
                <form onSubmit={handleSubmit} className="card mx-auto" style={{ padding: '20px' }}>
                    <div className="mb-3">
                        <h2 className="text-center">User Login</h2>
                        <input
                            type="text"
                            className="form-control"
                            id="Email"
                            name='Email'
                            value={Email}
                            placeholder="Email"
                            onChange={onChange}
                            required />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            name='Password'
                            id="Password"
                            value={Password}
                            onChange={onChange}
                            placeholder="Password"
                            required />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
                </form>
            </div>
            <footer className="Footer">
                <p style={{ textAlign: 'center' }}>&copy; 2024 <strong>Travel Booking</strong>. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default Login;
