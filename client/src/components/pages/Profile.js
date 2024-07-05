import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Retrieve user details from local storage
        const userData = localStorage.getItem('user');
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }

    const { Firstname, Lastname, Email, Gender, Age, DateofBirth, Username } = user;

    return (
        <div>
            <div className="container mt-4" style={{ width: '50%', padding: '10px' }}>
                <Helmet>
                    <title>Hotel - Profile</title>
                </Helmet>
                <div className="card mx-auto" style={{ padding: '20px' }}>
                    <h2 className="text-center">User Profile</h2>
                    <div className="mb-3">
                        <strong>First Name:</strong> {Firstname}
                    </div>
                    <div className="mb-3">
                        <strong>Last Name:</strong> {Lastname}
                    </div>
                    <div className="mb-3">
                        <strong>Email:</strong> {Email}
                    </div>
                    <div className="mb-3">
                        <strong>Gender:</strong> {Gender}
                    </div>
                    <div className="mb-3">
                        <strong>Age:</strong> {Age}
                    </div>
                    <div className="mb-3">
                        <strong>Date of Birth:</strong> {DateofBirth}
                    </div>
                    <div className="mb-3">
                        <strong>Username:</strong> {Username}
                    </div>
                </div>
            </div>
            <footer className="Footer">
                <p style={{ textAlign: 'center' }}>&copy; 2024 <strong>Travel Booking</strong>. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default Profile;
