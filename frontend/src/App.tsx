import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import "./App.css";

import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

import StudentLogin from "./pages/StudentLogin";
import StudentSignup from "./pages/StudentSignup";
import StudentDashboard from "./pages/StudentDashboard";
import AdminLogin from "./pages/AdminLogin";

import { CartProvider } from "./context/CartContext";


// ==========================================================
// HOME / LANDING PAGE
// ==========================================================

function Home() {

  // ========================================================
  // TYPEWRITER EFFECT
  // ========================================================

  const fullText = "Welcome to the JOOUST Smart Cafeteria";

  const [typedText, setTypedText] = useState("");

  // ========================================================
  // PROFILE DROPDOWN
  // ========================================================

  const [profileOpen, setProfileOpen] = useState(false);


  useEffect(() => {

    let currentIndex = 0;

    const typingInterval = setInterval(() => {

      if (currentIndex < fullText.length) {

        setTypedText(
          fullText.substring(0, currentIndex + 1)
        );

        currentIndex++;

      } else {

        clearInterval(typingInterval);

      }

    }, 75);


    return () => {
      clearInterval(typingInterval);
    };

  }, []);


  return (
    <div className="home-page">

      {/* ====================================================
          NAVIGATION BAR
      ==================================================== */}

      <header className="navbar">

        {/* LOGO */}

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
            type="button"
            className="nav-icon-button"
            aria-label="Search"
            title="Search"
          >
            🔍
          </button>


          {/* PROFILE */}

          <div className="profile-wrapper">

            <button
              type="button"
              className="profile-button"
              onClick={() => setProfileOpen(!profileOpen)}
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
                  Choose how you want to access the cafeteria.
                </p>


                {/* STUDENT LOGIN */}

                <Link
                  to="/student-login"
                  className="dropdown-button student-login"
                  onClick={() => setProfileOpen(false)}
                >
                  Student Login
                </Link>


                {/* ADMIN LOGIN */}

                <Link
                  to="/admin-login"
                  className="dropdown-button admin-login"
                  onClick={() => setProfileOpen(false)}
                >
                  Admin Login
                </Link>


                {/* STUDENT SIGN UP */}

                <Link
                  to="/student-signup"
                  className="dropdown-button signup-button"
                  onClick={() => setProfileOpen(false)}
                >
                  Student Sign Up
                </Link>

              </div>

            )}

          </div>


          {/* CART */}

          <Link
            to="/cart"
            className="cart-nav-button"
            title="Shopping Cart"
            aria-label="Shopping Cart"
          >
            🛒
          </Link>

        </nav>

      </header>


      {/* ====================================================
          MAIN CONTENT
      ==================================================== */}

      <main>

        {/* ==================================================
            HERO
        ================================================== */}

        <section className="hero-section">

          {/* WELCOME HEADING */}

          <div className="welcome-heading">

            <h1 className="typing-title">

              {typedText}

              <span className="typing-cursor">
                |
              </span>

            </h1>

          </div>


          {/* HERO BOX */}

          <div className="hero-box">

            {/* LEFT SIDE */}

            <div className="hero-left">

              <p className="hero-label">
                SMART CAFETERIA
              </p>


              <h2 className="hero-slogan">

                Fresh Meals.
                <br />

                <span>
                  Good Mood.
                </span>

              </h2>


              <p className="hero-description">

                Welcome to the JOOUST Smart Cafeteria —
                a simple and convenient way to order your
                favourite meals, pay securely and enjoy.

              </p>


              {/* BUTTONS */}

              <div className="hero-buttons">

                <Link
                  to="/menu"
                  className="primary-button"
                >
                  View Menu
                  <span>
                    →
                  </span>
                </Link>


                <a
                  href="#how-it-works"
                  className="secondary-button"
                >
                  How It Works
                </a>

              </div>


              {/* TRUST */}

              <div className="hero-trust">

                <div className="trust-item">

                  <span className="trust-icon">
                    ✓
                  </span>

                  <span>
                    Fresh Meals
                  </span>

                </div>


                <div className="trust-item">

                  <span className="trust-icon">
                    ✓
                  </span>

                  <span>
                    Secure Payment
                  </span>

                </div>


                <div className="trust-item">

                  <span className="trust-icon">
                    ✓
                  </span>

                  <span>
                    Quick Collection
                  </span>

                </div>

              </div>

            </div>


            {/* RIGHT SIDE - IMAGE */}

            <div className="hero-right">

              <div className="food-image-wrapper">

                <img
                  src="/food-hero.jpg"
                  alt="Fresh cafeteria meal"
                  className="hero-food-image"
                />

              </div>

            </div>

          </div>


          {/* FLOATING DECORATIONS */}

          <div className="floating-shape shape-one">
            ✦
          </div>


          <div className="floating-shape shape-two">
            ✦
          </div>


          <div className="floating-shape shape-three">
            🍃
          </div>

        </section>


        {/* ==================================================
            HOW IT WORKS
        ================================================== */}

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

            <span>
              From your phone to your plate in
              just a few simple steps.
            </span>

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
                Browse the available meals,
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
                without unnecessary waiting.
              </p>

            </div>

          </div>

        </section>


        {/* ==================================================
            ABOUT
        ================================================== */}

        <section
          className="about-section"
          id="about"
        >

          <div className="about-content">

            <p className="section-label">
              ABOUT THE CAFETERIA
            </p>


            <h2>
              Better Food.
              <br />
              Better Experience.
            </h2>


            <p>
              The JOOUST Smart Cafeteria is designed
              to make getting your meals easier,
              faster and more convenient.
            </p>


            <p>
              Instead of spending valuable time
              standing in long queues, students can
              browse the menu, place their orders
              and make payments digitally.
            </p>

          </div>


          <div className="about-highlight">

            <div className="about-icon">
              ⚡
            </div>


            <h3>
              Less Waiting
            </h3>


            <p>
              More time for what matters.
            </p>

          </div>

        </section>


        {/* ==================================================
            CONTACT
        ================================================== */}

        <section
          className="contact-section"
          id="contact"
        >

          <div className="contact-card">

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


      {/* ====================================================
          FOOTER
      ==================================================== */}

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

          <span>
            f
          </span>

          <span>
            ◎
          </span>

          <span>
            in
          </span>

        </div>


        <div className="copyright">

          © 2026 JOOUST Smart Cafeteria.
          All Rights Reserved.

        </div>

      </footer>

    </div>
  );
}


// ==========================================================
// MAIN APP
// ==========================================================

function App() {

  return (

    <BrowserRouter>

      <CartProvider>

        <Routes>

          {/* ==================================================
              HOME
          ================================================== */}

          <Route
            path="/"
            element={<Home />}
          />


          {/* ==================================================
              MENU
          ================================================== */}

          <Route
            path="/menu"
            element={<Menu />}
          />


          {/* ==================================================
              CART
          ================================================== */}

          <Route
            path="/cart"
            element={<Cart />}
          />


          {/* ==================================================
              CHECKOUT
          ================================================== */}

          <Route
            path="/checkout"
            element={<Checkout />}
          />


          {/* ==================================================
              STUDENT AUTHENTICATION
          ================================================== */}

          <Route
            path="/student-login"
            element={<StudentLogin />}
          />


          <Route
            path="/student-signup"
            element={<StudentSignup />}
          />


          {/* ==================================================
              STUDENT DASHBOARD
          ================================================== */}

          <Route
            path="/student-dashboard"
            element={<StudentDashboard />}
          />


          {/* ==================================================
              ADMIN AUTHENTICATION
          ================================================== */}

          <Route
            path="/admin-login"
            element={<AdminLogin />}
          />

        </Routes>

      </CartProvider>

    </BrowserRouter>

  );
}


export default App;