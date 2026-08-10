import { Link } from "react-router-dom";

function StudentDashboard() {
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
            STUDENT DASHBOARD
          </p>

          <h1>
            Welcome, Student
          </h1>

          <p>
            Your cafeteria dashboard will appear here.
          </p>

        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginTop: "25px",
          }}
        >

          <Link
            to="/menu"
            className="auth-submit"
          >
            Browse Menu →
          </Link>

          <Link
            to="/cart"
            className="secondary-button"
          >
            View Cart
          </Link>

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

export default StudentDashboard;