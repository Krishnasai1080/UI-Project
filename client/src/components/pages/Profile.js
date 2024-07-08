import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const getNote = async (id) => {
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        const response = await fetch(`http://localhost:5000/notes/getNotes?userId=${user._id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Error retrieving notes: ' + error.message);
    }
};

const Profile = () => {
    const [user, setUser] = useState(null);
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        // Retrieve user details from local storage
        const userData = localStorage.getItem('user');
        if (userData) {
            const parsedUser = JSON.parse(userData);
            setUser(parsedUser);

            // Fetch notes for the user
            getNote(parsedUser._id)
                .then(setNotes)
                .catch((error) => console.error(error.message));
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

                {/* Display Notes in Tabular Format */}
                <div className="card mx-auto mt-4" style={{ padding: '20px' }}>
                    <h2 className="text-center">User Notes</h2>
                    {notes.length > 0 ? (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Note</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {notes.map((note) => (
                                    <tr key={note._id}>
                                        <td>{new Date(note.createdAt).toLocaleString()}</td>
                                        <td>{note.NotesDetail}</td>
                                        
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No notes available.</p>
                    )}
                </div>
            </div>
            <footer className="Footer">
                <p style={{ textAlign: 'center' }}>&copy; 2024 <strong>Travel Booking</strong>. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default Profile;
