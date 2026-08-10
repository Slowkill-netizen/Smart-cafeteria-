import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function StudentSignup() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    // ==========================================
    // CHECK PASSWORD MATCH
    // ==========================================

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // ==========================================
    // CHECK PASSWORD LENGTH
    // ==========================================

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    // ==========================================
    // TEMPORARY FRONTEND REGISTRATION
    // ==========================================

    console.log("Student registration:", {
      fullName,
      registrationNumber,
      email,
      phone,
    });

    // ==========================================
    // SUCCESS
    // ==========================================

    setSuccess(
      "Account created successfully! Redirecting to login..."
    );

    // ==========================================
    // REDIRECT TO LOGIN
    // ==========================================

    setTimeout(() => {
      navigate("/student-login");
    }, 1500);
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        {/* ==========================================
            BRAND
        ========================================== */}

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


        {/* ==========================================
            HEADING
        ========================================== */}

        <div className="auth-heading">

          <p className="auth-label">
            STUDENT PORTAL
          </p>

          <h1>
            Create Account
          </h1>

          <p>
            Create your student account to order
            meals and manage your cafeteria orders.
          </p>

        </div>


        {/* ==========================================
            ERROR MESSAGE
        ========================================== */}

        {error && (
          <div className="auth-error">
            {error}
          </div>
        )}


        {/* ==========================================
            SUCCESS MESSAGE
        ========================================== */}

        {success && (
          <div className="auth-success">
            {success}
          </div>
        )}


        {/* ==========================================
            SIGNUP FORM
        ========================================== */}

        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

          {/* ========================================
              FULL NAME
          ======================================== */}

          <div className="form-group">

            <label htmlFor="fullName">
              Full Name
            </label>

            <input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) =>
                setFullName(e.target.value)
              }
              required
            />

          </div>


          {/* ========================================
              REGISTRATION NUMBER
          ======================================== */}

          <div className="form-group">

            <label htmlFor="registrationNumber">
              Registration Number
            </label>

            <input
              id="registrationNumber"
              type="text"
              placeholder="e.g. C01/1234/2023"
              value={registrationNumber}
              onChange={(e) =>
                setRegistrationNumber(e.target.value)
              }
              required
            />

          </div>


          {/* ========================================
              EMAIL
          ======================================== */}

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


          {/* ========================================
              PHONE
          ======================================== */}

          <div className="form-group">

            <label htmlFor="phone">
              Phone Number
            </label>

            <input
              id="phone"
              type="tel"
              placeholder="e.g. 0712345678"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
              required
            />

          </div>


          {/* ========================================
              PASSWORD
          ======================================== */}

          <div className="form-group">

            <label htmlFor="password">
              Password
            </label>

            <div className="password-input">

              <input
                id="password"
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Create a password"
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
                {showPassword ? "🙈" : "👁️"}
              </button>

            </div>

          </div>


          {/* ========================================
              CONFIRM PASSWORD
          ======================================== */}

          <div className="form-group">

            <label htmlFor="confirmPassword">
              Confirm Password
            </label>

            <div className="password-input">

              <input
                id="confirmPassword"
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
                required
              />

              <button
                type="button"
                className="show-password"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
                aria-label={
                  showConfirmPassword
                    ? "Hide password"
                    : "Show password"
                }
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </button>

            </div>

          </div>


          {/* ========================================
              CREATE ACCOUNT
          ======================================== */}

          <button
            type="submit"
            className="auth-submit"
          >
            Create Account

            <span>
              →
            </span>

          </button>

        </form>


        {/* ==========================================
            LOGIN LINK
        ========================================== */}

        <div className="auth-switch">

          <span>
            Already have a student account?
          </span>

          <Link to="/student-login">
            Login
          </Link>

        </div>


        {/* ==========================================
            ADMIN LOGIN
        ========================================== */}

        <div className="admin-login-link">

          <span>
            Cafeteria administrator?
          </span>

          <Link to="/admin-login">
            Admin Login
          </Link>

        </div>


        {/* ==========================================
            BACK HOME
        ========================================== */}

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

export default StudentSignup;