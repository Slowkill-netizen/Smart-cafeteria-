import { Link } from "react-router-dom";
import "./StudentLogin.css";

import adminFood from "../assets/Login/admin-food.jpg";


// ==========================================================
// ADMIN LOGIN
// ==========================================================

function AdminLogin() {
  return (

    <div className="auth-page">


      {/* ====================================================
          ADMIN IMAGE
      ==================================================== */}

      <div className="login-food-image">

        <img
          src={adminFood}
          alt="JOOUST Smart Cafeteria"
        />

      </div>


      {/* ====================================================
          ADMIN LOGIN CARD
      ==================================================== */}

      <div className="auth-card">


        {/* ==================================================
            BRAND
        ================================================== */}

        <div className="auth-brand">

          <div className="auth-logo">
            J
          </div>

          <div className="auth-brand-text">

            <strong>
              JOOUST
            </strong>

            <span>
              SMART CAFETERIA
            </span>

          </div>

        </div>


        {/* ==================================================
            HEADING
        ================================================== */}

        <div className="auth-heading">

          <p className="auth-label">
            ADMIN PORTAL
          </p>

          <h1>
            Admin Login
          </h1>

          <p>
            Login to manage the cafeteria system.
          </p>

        </div>


        {/* ==================================================
            LOGIN FORM
        ================================================== */}

        <form className="auth-form">


          {/* ================================================
              ADMIN EMAIL
          ================================================= */}

          <div className="form-group">

            <label htmlFor="admin-email">
              Admin Email
            </label>

            <input
              id="admin-email"
              type="email"
              placeholder="Enter admin email"
              autoComplete="email"
              required
            />

          </div>


          {/* ================================================
              PASSWORD
          ================================================= */}

          <div className="form-group">

            <label htmlFor="admin-password">
              Password
            </label>

            <input
              id="admin-password"
              type="password"
              placeholder="Enter password"
              autoComplete="current-password"
              required
            />

          </div>


          {/* ================================================
              LOGIN BUTTON
          ================================================= */}

          <button
            type="submit"
            className="auth-submit"
          >

            <span>
              Login
            </span>

            <span>
              →
            </span>

          </button>

        </form>


        {/* ==================================================
            STUDENT LOGIN
        ================================================== */}

        <div className="admin-login-link">

          <span>
            Are you a student?
          </span>

          <Link to="/student-login">
            Student Login
          </Link>

        </div>


        {/* ==================================================
            BACK HOME
        ================================================== */}

        <Link
          to="/"
          className="back-home"
        >
          ← Back to Home
        </Link>


      </div>

    </div>
  );
}


// ==========================================================
// DEFAULT EXPORT
// ==========================================================

export default AdminLogin;