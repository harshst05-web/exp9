import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';

// 1. Home / Movies Page
const Home = () => (
  <div style={{ padding: '25px', textAlign: 'center' }}>
    <h2>🍿 Now Showing</h2>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
      <div style={{ background: '#1e293b', color: 'white', padding: '15px', borderRadius: '8px', width: '220px' }}>
        <h3>Inception</h3>
        <p>IMAX 3D</p>
        <p>Price: $12.50</p>
        <Link to="/booking" style={{ color: '#38bdf8', fontWeight: 'bold' }}>Book Seats</Link>
      </div>
      <div style={{ background: '#1e293b', color: 'white', padding: '15px', borderRadius: '8px', width: '220px' }}>
        <h3>Interstellar</h3>
        <p>4DX</p>
        <p>Price: $15.00</p>
        <Link to="/booking" style={{ color: '#38bdf8', fontWeight: 'bold' }}>Book Seats</Link>
      </div>
    </div>
  </div>
);

// 2. Booking Page
const Booking = () => (
  <div style={{ padding: '25px', textAlign: 'center' }}>
    <h2>🎟️ Confirm Cinema Ticket</h2>
    <div style={{ background: '#334155', color: 'white', display: 'inline-block', padding: '25px', borderRadius: '8px', marginTop: '15px', textAlign: 'left' }}>
      <p><strong>Movie:</strong> Inception (IMAX 3D)</p>
      <p><strong>Seats:</strong> F12, F13 (2 Tickets)</p>
      <p><strong>Showtime:</strong> Today, 7:30 PM</p>
      <p><strong>Total Amount:</strong> $25.00</p>
      <button 
        onClick={() => alert('Booking Confirmed! Enjoy your movie.')}
        style={{ background: '#22c55e', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', width: '100%' }}
      >
        Confirm & Pay $25.00
      </button>
    </div>
  </div>
);

// 3. About Cinema Page
const About = () => (
  <div style={{ padding: '25px', textAlign: 'center' }}>
    <h2>ℹ️ About CineMax Theatres</h2>
    <p>Premium cinema booking experience powered by React and GitHub Pages.</p>
  </div>
);

// Main Application Component with HashRouter
class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh', background: '#0f172a', color: 'white' }}>
          <header style={{ background: '#1e293b', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 style={{ color: '#f43f5e', margin: 0 }}>🎬 CineMax Theatres</h1>
            <nav>
              <Link to="/" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Movies</Link>
              <Link to="/booking" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Booking</Link>
              <Link to="/about" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>About</Link>
            </nav>
          </header>
          <hr style={{ borderColor: '#334155', margin: 0 }} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/booking" component={Booking} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;