import { Link } from "react-router-dom";
import "./StudentProfile.css";


// ==========================================================
// STUDENT PROFILE
// ==========================================================

function StudentProfile() {

  return (

    <div className="student-profile-page">


      {/* ====================================================
          TOP HEADER
      ==================================================== */}

      <header className="profile-topbar">

        <Link
          to="/student-dashboard"
          className="profile-brand"
        >

          <div className="profile-logo">
            J
          </div>

          <div className="profile-brand-text">

            <strong>
              JOOUST
            </strong>

            <span>
              SMART CAFETERIA
            </span>

          </div>

        </Link>


        <div className="profile-user">

          <div className="profile-avatar-small">
            S
          </div>

          <div className="profile-user-details">

            <strong>
              Student
            </strong>

            <span>
              Student Account
            </span>

          </div>

          <Link
            to="/"
            className="profile-logout"
          >
            Logout
          </Link>

        </div>

      </header>



      {/* ====================================================
          PAGE LAYOUT
      ==================================================== */}

      <div className="profile-layout">


        {/* ==================================================
            SIDEBAR
        ================================================== */}

        <aside className="profile-sidebar">

          <p className="profile-sidebar-label">
            MENU
          </p>


          <Link
            to="/student-dashboard"
            className="profile-sidebar-link"
          >
            <span>🏠</span>
            Dashboard
          </Link>


          <Link
            to="/menu"
            className="profile-sidebar-link"
          >
            <span>🍽️</span>
            Browse Menu
          </Link>


          <Link
            to="/cart"
            className="profile-sidebar-link"
          >
            <span>🛒</span>
            My Cart
          </Link>


          <Link
            to="/student-orders"
            className="profile-sidebar-link"
          >
            <span>📦</span>
            My Orders
          </Link>


          <p className="profile-sidebar-label profile-account-label">
            ACCOUNT
          </p>


          <Link
            to="/student-profile"
            className="profile-sidebar-link profile-active"
          >
            <span>👤</span>
            My Profile
          </Link>


          <Link
            to="/student-settings"
            className="profile-sidebar-link"
          >
            <span>⚙️</span>
            Settings
          </Link>

        </aside>



        {/* ==================================================
            MAIN CONTENT
        ================================================== */}

        <main className="profile-main">


          {/* =================================================
              PAGE HEADER
          ================================================= */}

          <section className="profile-page-heading">

            <div>

              <p>
                ACCOUNT
              </p>

              <h1>
                My Profile
              </h1>

              <span>
                Manage your student account information.
              </span>

            </div>

          </section>



          {/* =================================================
              PROFILE HEADER CARD
          ================================================= */}

          <section className="profile-card profile-overview">

            <div className="profile-large-avatar">
              S
            </div>


            <div className="profile-overview-info">

              <h2>
                Student
              </h2>

              <p>
                student@jooust.ac.ke
              </p>

              <span>
                JOOUST Student
              </span>

            </div>


            <button
              type="button"
              className="profile-edit-button"
            >
              Edit Profile
            </button>

          </section>



          {/* =================================================
              PERSONAL INFORMATION
          ================================================= */}

          <section className="profile-card">

            <div className="profile-card-heading">

              <div>

                <p>
                  PERSONAL INFORMATION
                </p>

                <h2>
                  Account Details
                </h2>

              </div>

            </div>


            <div className="profile-information-grid">


              {/* FULL NAME */}

              <div className="profile-information-item">

                <span>
                  Full Name
                </span>

                <strong>
                  Student
                </strong>

              </div>


              {/* EMAIL */}

              <div className="profile-information-item">

                <span>
                  Student Email
                </span>

                <strong>
                  student@jooust.ac.ke
                </strong>

              </div>


              {/* STUDENT NUMBER */}

              <div className="profile-information-item">

                <span>
                  Student Number
                </span>

                <strong>
                  Not provided
                </strong>

              </div>


              {/* PHONE */}

              <div className="profile-information-item">

                <span>
                  Phone Number
                </span>

                <strong>
                  Not provided
                </strong>

              </div>


              {/* ACCOUNT TYPE */}

              <div className="profile-information-item">

                <span>
                  Account Type
                </span>

                <strong>
                  Student
                </strong>

              </div>


              {/* UNIVERSITY */}

              <div className="profile-information-item">

                <span>
                  Institution
                </span>

                <strong>
                  JOOUST
                </strong>

              </div>

            </div>

          </section>



          {/* =================================================
              ACCOUNT SECURITY
          ================================================= */}

          <section className="profile-card">

            <div className="profile-card-heading">

              <div>

                <p>
                  SECURITY
                </p>

                <h2>
                  Account Security
                </h2>

              </div>

            </div>


            <div className="security-row">

              <div className="security-icon">
                🔒
              </div>

              <div>

                <strong>
                  Password
                </strong>

                <span>
                  Your password is securely protected.
                </span>

              </div>


              <Link
                to="/student-settings"
                className="security-button"
              >
                Change Password
              </Link>

            </div>


          </section>



          {/* =================================================
              BACK TO DASHBOARD
          ================================================= */}

          <Link
            to="/student-dashboard"
            className="profile-back-button"
          >
            ← Back to Dashboard
          </Link>


        </main>

      </div>

    </div>
  );
}


// ==========================================================
// DEFAULT EXPORT
// ==========================================================

export default StudentProfile;