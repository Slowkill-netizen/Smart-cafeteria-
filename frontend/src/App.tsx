import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import './App.css'

import Menu from './pages/Menu'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

import { CartProvider } from './context/CartContext'

import heroImg from './assets/hero.png'


// =====================================================
// HOME / LANDING PAGE
// =====================================================

function Home() {

  // ===================================================
  // TYPEWRITER EFFECT
  // ===================================================

  const fullText = 'Welcome to the JOOUST Smart Cafeteria'

  const [typedText, setTypedText] = useState('')

  const [profileOpen, setProfileOpen] = useState(false)


  useEffect(() => {

    let currentIndex = 0

    const typingInterval = setInterval(() => {

      if (currentIndex < fullText.length) {

        setTypedText(
          fullText.substring(0, currentIndex + 1)
        )

        currentIndex++

      } else {

        clearInterval(typingInterval)

      }

    }, 70)

    return () => clearInterval(typingInterval)

  }, [])


  return (

    <div className="home-page">

      {/* =================================================
          NAVIGATION BAR
      ================================================= */}

      <header className="navbar">

        {/* BRAND */}

        <Link
          to="/"
          className="brand"
        >

          <div className="brand-logo">
            J
          </div>

          <div className="brand-text">

            <strong>
              JOOUST
            </strong>

            <span>
              SMART CAFETERIA
            </span>

          </div>

        </Link>


        {/* NAVIGATION LINKS */}

        <nav className="nav-links">

          <Link
            to="/"
            className="active"
          >
            Home
          </Link>

          <Link to="/menu">
            Menu
          </Link>

          <a href="#about">
            About
          </a>

          <a href="#contact">
            Contact
          </a>


          {/* SEARCH */}

          <button
            className="nav-icon-button"
            aria-label="Search"
            title="Search"
          >
            🔍
          </button>


          {/* PROFILE */}

          <div className="profile-wrapper">

            <button
              className="profile-button"
              onClick={() =>
                setProfileOpen(!profileOpen)
              }
              aria-label="Account"
              title="Account"
            >
              👤
            </button>


            {profileOpen && (

              <div className="profile-dropdown">

                <div className="profile-dropdown-title">
                  Welcome
                </div>

                <p>
                  Sign in to manage your orders.
                </p>

                <button className="dropdown-login">
                  Login
                </button>

                <button className="dropdown-signup">
                  Sign Up
                </button>

              </div>

            )}

          </div>


          {/* CART */}

          <Link
            to="/cart"
            className="cart-nav-button"
            title="Shopping Cart"
          >
            🛒
          </Link>

        </nav>

      </header>


      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <main>


        {/* =================================================
            WELCOME HEADING
        ================================================= */}

        <section className="welcome-section">

          <h1>

            {typedText}

            <span className="typing-cursor">
              |
            </span>

          </h1>

          <div className="welcome-decoration">

            <span></span>

            <b>✦</b>

            <span></span>

          </div>

        </section>


        {/* =================================================
            HERO FOOD SECTION
        ================================================= */}

        <section className="hero-section">

          <div className="hero-box">


            {/* LEFT SIDE - TEXT */}

            <div className="hero-content">


              <p className="hero-label">
                ✧ FRESH & DELICIOUS
              </p>


              <h2 className="hero-title">

                Fresh Meals.

                <br />

                Good <span>Mood.</span>

              </h2>


              <div className="hero-divider">

                <span></span>

                <b>♥</b>

                <span></span>

              </div>


              <p className="hero-description">

                Welcome to the JOOUST Smart Cafeteria —
                a simple and convenient way to order
                your favourite meals, pay securely and enjoy.

              </p>


              {/* BUTTONS */}

              <div className="hero-buttons">

                <Link
                  to="/menu"
                  className="primary-button"
                >
                  View Menu
                  <span>→</span>
                </Link>


                <a
                  href="#how-it-works"
                  className="secondary-button"
                >
                  How It Works
                </a>

              </div>


              {/* TRUST FEATURES */}

              <div className="hero-trust">

                <div>

                  <span className="trust-icon">
                    ♧
                  </span>

                  <span>
                    Fresh Meals
                  </span>

                </div>


                <div>

                  <span className="trust-icon">
                    ♢
                  </span>

                  <span>
                    Secure Payment
                  </span>

                </div>


                <div>

                  <span className="trust-icon">
                    ◷
                  </span>

                  <span>
                    Quick Collection
                  </span>

                </div>

              </div>

            </div>


            {/* RIGHT SIDE - FOOD IMAGE */}

            <div className="hero-image-wrapper">

              <img
                src="\food-hero.jpg"
                alt="Delicious meal served at JOOUST Smart Cafeteria"
                className="hero-image"
              />

            </div>

          </div>

        </section>


        {/* =================================================
            HOW IT WORKS
        ================================================= */}

        <section
          className="how-section"
          id="how-it-works"
        >

          <div className="section-heading">

            <p>
              SIMPLE & CONVENIENT
            </p>

            <h2>
              How It Works
            </h2>

            <div className="heading-line">
              <span></span>
              <b>✦</b>
              <span></span>
            </div>

          </div>


          <div className="steps-container">


            {/* STEP 1 */}

            <div className="step-card">

              <div className="step-number">
                01
              </div>

              <div className="step-icon">
                🍽️
              </div>

              <h3>
                Make Your Order
              </h3>

              <p>
                Browse our available meals,
                choose what you want and add
                it to your cart.
              </p>

            </div>


            <div className="step-line"></div>


            {/* STEP 2 */}

            <div className="step-card">

              <div className="step-number">
                02
              </div>

              <div className="step-icon">
                💳
              </div>

              <h3>
                Make Payment
              </h3>

              <p>
                Pay securely using your preferred
                payment method and receive your
                digital order confirmation.
              </p>

            </div>


            <div className="step-line"></div>


            {/* STEP 3 */}

            <div className="step-card">

              <div className="step-number">
                03
              </div>

              <div className="step-icon">
                ⭐
              </div>

              <h3>
                Quality Service
              </h3>

              <p>
                Present your verified order and
                collect your freshly prepared meal
                without the long wait.
              </p>

            </div>

          </div>

        </section>


        {/* =================================================
            ABOUT SECTION
        ================================================= */}

        <section
          className="about-section"
          id="about"
        >

          <div className="about-image">

            <img
              src={heroImg}
              alt="JOOUST cafeteria meal"
            />

          </div>


          <div className="about-content">

            <p className="section-label">
              ABOUT US
            </p>

            <h2>
              A Better Way
              <br />
              To Enjoy Your Meals
            </h2>

            <p>

              JOOUST Smart Cafeteria is designed
              to make getting your meals easier,
              faster and more convenient.

            </p>

            <p>

              Browse the available meals, place
              your order and pay securely before
              collecting your food.

            </p>


            <Link
              to="/menu"
              className="about-button"
            >
              Explore Menu →
            </Link>

          </div>

        </section>


        {/* =================================================
            CONTACT / OPENING HOURS
        ================================================= */}

        <section
          className="contact-section"
          id="contact"
        >

          <div className="contact-card">


            {/* OPENING HOURS */}

            <div className="contact-item">

              <div className="contact-icon">
                🕐
              </div>

              <div>

                <span>
                  OPENING HOURS
                </span>

                <h3>
                  6:00 AM — 9:00 PM
                </h3>

                <p>
                  Monday — Sunday
                </p>

              </div>

            </div>


            <div className="contact-divider"></div>


            {/* CALL US */}

            <div className="contact-item">

              <div className="contact-icon">
                ☎
              </div>

              <div>

                <span>
                  CALL US
                </span>

                <h3>
                  +254 700 000 000
                </h3>

                <p>
                  We're happy to help
                </p>

              </div>

            </div>

          </div>

        </section>

      </main>


      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="footer">

        <div className="footer-brand">

          <div className="brand-logo">
            J
          </div>

          <div>

            <strong>
              JOOUST
            </strong>

            <span>
              SMART CAFETERIA
            </span>

          </div>

        </div>


        <div className="footer-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/menu">
            Menu
          </Link>

          <a href="#about">
            About
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>


        <div className="footer-social">

          <span>f</span>
          <span>◎</span>
          <span>in</span>

        </div>


        <div className="copyright">

          © 2026 JOOUST Smart Cafeteria.
          All Rights Reserved.

        </div>

      </footer>

    </div>

  )
}


// =====================================================
// MAIN APP
// =====================================================

function App() {

  return (

    <BrowserRouter>

      <CartProvider>

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/menu"
            element={<Menu />}
          />

          <Route
            path="/cart"
            element={<Cart />}
          />

          <Route
            path="/checkout"
            element={<Checkout />}
          />

        </Routes>

      </CartProvider>

    </BrowserRouter>

  )
}


export default App