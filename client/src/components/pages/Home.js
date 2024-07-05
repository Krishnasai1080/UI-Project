import React from 'react';

const Home = () => {
    return (
        <div>
            <header>
                <h1>Explore The World</h1>
            </header>
            <section className="banner">
                <h2>Discover Your Next Adventure</h2>
                <p>Explore the world with us</p>
                <a href="#" className="btn">Get Started</a>
            </section>

            <section className="destinations">
                <h2>Popular Destinations</h2>
                <div className="destination">
                    <img src={require('../images/NY.jpg').default} alt="New York City" />
                    <h3>New York City</h3>
                    <p>Experience the vibrant energy of the Big Apple</p>
                </div>
                <div className="destination">
                    <img src={require('../images/paris.jpg').default} alt="Paris" />
                    <h3>Paris</h3>
                    <p>Discover the romance of the City of Lights</p>
                </div>
                <div className="destination">
                    <img src={require('../images/tokyo.jpg').default} alt="Tokyo" />
                    <h3>Tokyo</h3>
                    <p>Immerse yourself in the unique culture of Tokyo</p>
                </div>
            </section>

            <footer>
                <p>&copy; 2024 My Simple Web Page</p>
            </footer>
        </div>
    );
}

export default Home;
