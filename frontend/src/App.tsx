import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import './App.css'

import Menu from './pages/Menu'
import Cart from './pages/Cart'

import { CartProvider } from './context/CartContext'


// ==========================================
// HOME / LANDING PAGE
// ==========================================

function Home() {
  return (
    <div className="home-page">

      {/* ====================================
          NAVIGATION
      ==================================== */}

      <nav className="navbar">

        <div className="nav-logo">
          JOOUST
        </div>

        <div className="nav-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/menu">
            Menu
          </Link>

          <Link to="/cart">
            Cart
          </Link>

        </div>

      </nav>


      {/* ====================================
          HERO SECTION
      ==================================== */}

      <section className="hero">

        <div className="hero-content">

          <p className="hero-label">
            JARAMOGI OGINGA ODINGA UNIVERSITY
            OF SCIENCE AND TECHNOLOGY
          </p>

          <h1>
            Welcome to
            <br />
            JOOUST Smart Cafeteria
          </h1>

          <p className="hero-description">
            Order your favourite meals conveniently,
            avoid long queues, and enjoy a faster
            cafeteria experience.
          </p>

          <Link
            to="/menu"
            className="hero-button"
          >
            View Today's Menu
          </Link>

        </div>

      </section>


      {/* ====================================
          FEATURES
      ==================================== */}

      <section className="features">

        <div className="feature-card">

          <div className="feature-icon">
            🍽️
          </div>

          <h2>
            Easy Ordering
          </h2>

          <p>
            Browse available meals and place your
            order before reaching the cafeteria.
          </p>

        </div>


        <div className="feature-card">

          <div className="feature-icon">
            ⚡
          </div>

          <h2>
            Save Time
          </h2>

          <p>
            Reduce waiting time and avoid unnecessary
            queues during busy meal periods.
          </p>

        </div>


        <div className="feature-card">

          <div className="feature-icon">
            🔐
          </div>

          <h2>
            Secure Orders
          </h2>

          <p>
            Every order will have a unique digital
            identity for secure collection.
          </p>

        </div>

      </section>


      {/* ====================================
          CALL TO ACTION
      ==================================== */}

      <section className="home-cta">

        <h2>
          Hungry?
        </h2>

        <p>
          Check what's available today and
          place your order.
        </p>

        <Link
          to="/menu"
          className="hero-button"
        >
          Browse Menu
        </Link>

      </section>


      {/* ====================================
          FOOTER
      ==================================== */}

      <footer className="footer">

        <p>
          © 2026 JOOUST Smart Cafeteria
        </p>

        <p>
          Jaramogi Oginga Odinga University
          of Science and Technology
        </p>

      </footer>

    </div>
  )
}


// ==========================================
// MAIN APP
// ==========================================

function App() {

  return (

    <BrowserRouter>

      {/* ====================================
          CART PROVIDER
          
          Everything inside this provider
          can access the shopping cart.
      ==================================== */}

      <CartProvider>

        <Routes>

          {/* HOME */}

          <Route
            path="/"
            element={<Home />}
          />


          {/* MENU */}

          <Route
            path="/menu"
            element={<Menu />}
          />


          {/* CART */}

          <Route
            path="/cart"
            element={<Cart />}
          />

        </Routes>

      </CartProvider>

    </BrowserRouter>

  )
}


export default App