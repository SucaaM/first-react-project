import React from 'react';
import Header from './Header';
import BookingTime from './BookingTime';
import Footer from './Footer';
import './HomePage.css';

function HomePage() {
  return (
    <div>
      <Header />
      <section id="hero">
        <div className="hero-content">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQVg35P7QJ-l-90v4uZgcXJujRapY10FQo0pA77VdfcDqWCNyK7JNAFnqqczjvGPwprk&usqp=CAU" alt="Gangster Pizza Logo" />
          <h1>Gangster Pizza</h1>
          <p>Get a taste of the old-school Brooklyn pizza, made with the finest ingredients and cooked to perfection.</p>
          <a href="/booking" className="btn">Book a table</a>
        </div>
      </section>
      <BookingTime />
      <Footer />
    </div>
  );
}

export default HomePage;
