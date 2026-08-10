import { Link } from "react-router-dom";

function AdminLogin() {
  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-brand">
          <div className="auth-logo">
            J
          </div>

          <div className="auth-brand-text">
            <strong>JOOUST</strong>
            <span>SMART CAFETERIA</span>
          </div>
        </div>

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

        <form className="auth-form">

          <div className="form-group">
            <label htmlFor="admin-email">
              Admin Email
            </label>

            <input
              id="admin-email"
              type="email"
              placeholder="Enter admin email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="admin-password">
              Password
            </label>

            <input
              id="admin-password"
              type="password"
              placeholder="Enter password"
              required
            />
          </div>

          <button
            type="submit"
            className="auth-submit"
          >
            Login
            <span>→</span>
          </button>

        </form>

        <div className="admin-login-link">
          <span>
            Are you a student?
          </span>

          <Link to="/student-login">
            Student Login
          </Link>
        </div>

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

export default AdminLogin;