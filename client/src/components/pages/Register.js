import { fetchData } from "../../main.js"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Register = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        Firstname: '',
        Lastname: '',
        Email: '',
        Gender: '',
        Age: '',
        DateofBirth: '',
        Username: '',
        Password: '',
        ConfPassword: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.Password !== user.ConfPassword) {
            setErrorMessage("Passwords didn't match");
        } else {
            setErrorMessage(null);
            fetchData("/user/register", user, "POST")
                .then((data) => {
                    if (!data.message) {
                        localStorage.setItem('user', JSON.stringify(data));
                        window.alert('User Registered Sucessfully.')
                        navigate('/');
                        window.location.reload();
                    }
                })
                .catch((error) => {
                    setErrorMessage(error.message);
                });
        }
    }

    const { Firstname, Lastname, Email, Gender, Age, DateofBirth, Username, Password, ConfPassword } = user;

    const [errorMessage, setErrorMessage] = useState(null);

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        setErrorMessage(null);
    }

    return (
        <div>
            <div className="container mt-4" style={{ width: '50%', padding: '10px' }}>
                <Helmet>
                    <title>Hotel - Registration</title>
                </Helmet>
                <form onSubmit={handleSubmit} className="card mx-auto" style={{ padding: '20px' }}>
                    <div className="mb-3">
                        <h2 className="text-center">New User Registration</h2>
                        <input
                            type="text"
                            className="form-control"
                            id="Firstname"
                            name='Firstname'
                            value={Firstname}
                            placeholder="First Name"
                            onChange={onChange}
                            required />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="Lastname"
                            name='Lastname'
                            placeholder="Last Name"
                            value={Lastname}
                            onChange={onChange}
                            required />
                    </div>
                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="Email"
                            name='Email'
                            placeholder="Email"
                            value={Email}
                            onChange={onChange}
                            required />
                    </div>
                    <div className="mb-3">
                        <select
                            className="form-control"
                            id="Gender"
                            name='Gender'
                            value={Gender}
                            onChange={onChange}
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <input
                            type="number"
                            className="form-control"
                            id="Age"
                            name='Age'
                            placeholder="Age"
                            value={Age}
                            onChange={onChange}
                            required />
                    </div>
                    <div className="mb-3">
                        <input
                            type="date"
                            className="form-control"
                            id="DateofBirth"
                            name='DateofBirth'
                            placeholder="Date of Birth"
                            value={DateofBirth}
                            onChange={onChange}
                            required />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="Username"
                            name='Username'
                            value={Username}
                            placeholder="Username"
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
                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id="ConfPassword"
                            name="ConfPassword"
                            value={ConfPassword}
                            placeholder="Re-enter Password"
                            onChange={onChange}
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

export default Register;
