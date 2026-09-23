import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./StudentLogin.css";

import loginFood from "../assets/Login/login-food.jpg";


// ==========================================================
// STUDENT LOGIN
// ==========================================================

function StudentLogin() {
  const navigate = useNavigate();

  // ========================================================
  // FORM STATES
  // ========================================================

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


  // ========================================================
  // LOGIN FUNCTION
  // ========================================================

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setError("");
    setSuccess("");


    // ======================================================
    // CHECK EMPTY FIELDS
    // ======================================================

    if (!email.trim() || !password.trim()) {
      setError(
        "Please enter your student email and password."
      );

      return;
    }


    // ======================================================
    // TEMPORARY LOGIN CREDENTIALS
    // ======================================================

    const demoEmail = "student@jooust.ac.ke";
    const demoPassword = "12345678";


    // ======================================================
    // CHECK LOGIN
    // ======================================================

    if (
      email.trim().toLowerCase() !== demoEmail ||
      password !== demoPassword
    ) {
      setError(
        "Invalid student email or password."
      );

      return;
    }


    // ======================================================
    // SUCCESSFUL LOGIN
    // ======================================================

    console.log(
      "Student login successful:",
      {
        email,
      }
    );


    setSuccess(
      "Login successful! Redirecting..."
    );


    // ======================================================
    // REDIRECT TO DASHBOARD
    // ======================================================

    setTimeout(() => {
      navigate("/student-dashboard");
    }, 800);
  };


  // ========================================================
  // PAGE
  // ========================================================

  return (
    <div className="auth-page">


      {/* ====================================================
          FOOD IMAGE
      ==================================================== */}

      <div className="login-food-image">

        <img
          src={loginFood}
          alt="Food served at JOOUST Smart Cafeteria"
        />

      </div>


      {/* ====================================================
          LOGIN CARD
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
            STUDENT PORTAL
          </p>

          <h1>
            Welcome Back
          </h1>

          <p>
            Log in to order your favourite meals
            and manage your cafeteria orders.
          </p>

        </div>


        {/* ==================================================
            ERROR MESSAGE
        ================================================== */}

        {error && (
          <div className="auth-error">
            {error}
          </div>
        )}


        {/* ==================================================
            SUCCESS MESSAGE
        ================================================== */}

        {success && (
          <div className="auth-success">
            {success}
          </div>
        )}


        {/* ==================================================
            LOGIN FORM
        ================================================== */}

        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >


          {/* ================================================
              EMAIL
          ================================================= */}

          <div className="form-group">

            <label htmlFor="email">
              Student Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your student email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />

          </div>


          {/* ================================================
              PASSWORD
          ================================================= */}

          <div className="form-group">

            <label htmlFor="password">
              Password
            </label>


            {/* PASSWORD INPUT */}

            <div className="password-input">

              <input
                id="password"
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
              />

              <button
                type="button"
                className="show-password"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
              >
                {showPassword
                  ? "🙈"
                  : "👁️"}
              </button>

            </div>


            {/* FORGOT PASSWORD */}

            <div className="forgot-password-container">

              <button
                type="button"
                className="forgot-password"
                onClick={() =>
                  setError(
                    "Password reset will be connected later."
                  )
                }
              >
                Forgot password?
              </button>

            </div>

          </div>


          {/* ================================================
              LOGIN BUTTON
          ================================================= */}

          <button
            type="submit"
            className="auth-submit"
          >
            Login

            <span>
              →
            </span>

          </button>

        </form>


        {/* ==================================================
            GOOGLE LOGIN
        ================================================== */}

        <div className="google-login">

          <div className="divider">

            <span>
              or
            </span>

          </div>


          <button
            type="button"
            className="google-button"
            onClick={() =>
              setError(
                "Google login will be connected later."
              )
            }
          >

            <span className="google-icon">
              G
            </span>

            <span>
              Continue with Google
            </span>

          </button>

        </div>


        {/* ==================================================
            SIGN UP
        ================================================== */}

        <div className="auth-switch">

          <span>
            Don't have a student account?
          </span>

          <Link to="/student-signup">
            Sign Up
          </Link>

        </div>


        {/* ==================================================
            BOTTOM ACTIONS
        ================================================== */}

        <div className="auth-bottom-actions">


          {/* ================================================
              ADMIN LOGIN
          ================================================= */}

          <div className="admin-login-link">

            <span>
              Cafeteria administrator?
            </span>

            <Link to="/admin-login">
              Admin Login
            </Link>

          </div>


          {/* ================================================
              BACK HOME
          ================================================= */}

          <Link
            to="/"
            className="back-home"
          >
            ← Back to Home
          </Link>

        </div>


      </div>

    </div>
  );
}


// ==========================================================
// DEFAULT EXPORT
// ==========================================================

export default StudentLogin;