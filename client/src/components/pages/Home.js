import React from 'react';
import NYImage from '../images/NY.jpg';
import ParisImage from '../images/paris.jpg';
import TokyoImage from '../images/tokyo.jpg';

const Home = () => {
    return (
        <div>
            <header>
                <h1>Explore The World</h1>
            </header>
            <section className="banner">
                <h2>Discover Your Next Adventure</h2>
                <p>Explore the world with us</p>
            </section>

            <section className="destinations">
                <h2>Popular Destinations</h2>
                <div className="destination">
                    <img src={NYImage} alt="New York City" />
                    <h3>New York City</h3>
                    <p>Experience the vibrant energy of the Big Apple</p>
                </div>
                <div className="destination">
                    <img src={ParisImage} alt="Paris" />
                    <h3>Paris</h3>
                    <p>Discover the romance of the City of Lights</p>
                </div>
                <div className="destination">
                    <img src={TokyoImage} alt="Tokyo" />
                    <h3>Tokyo</h3>
                    <p>Immerse yourself in the unique culture of Tokyo</p>
                </div>
            </section>

            <footer className="Footer">
                <p style={{ textAlign: 'center' }}>&copy; 2024 <strong>Travel Booking</strong>. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
