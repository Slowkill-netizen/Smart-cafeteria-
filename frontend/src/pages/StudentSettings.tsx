import { useState } from "react";
import { Link } from "react-router-dom";
import "./StudentSettings.css";


// ==========================================================
// STUDENT SETTINGS
// ==========================================================

function StudentSettings() {

  // ========================================================
  // SETTINGS STATES
  // ========================================================

  const [orderNotifications, setOrderNotifications] =
    useState(true);

  const [paymentNotifications, setPaymentNotifications] =
    useState(true);

  const [cafeteriaAnnouncements, setCafeteriaAnnouncements] =
    useState(false);


  // ========================================================
  // PAGE
  // ========================================================

  return (

    <div className="student-settings-page">


      {/* ====================================================
          TOP HEADER
      ==================================================== */}

      <header className="settings-topbar">

        <Link
          to="/student-dashboard"
          className="settings-brand"
        >

          <div className="settings-logo">
            J
          </div>

          <div className="settings-brand-text">

            <strong>
              JOOUST
            </strong>

            <span>
              SMART CAFETERIA
            </span>

          </div>

        </Link>


        <div className="settings-user">

          <div className="settings-avatar-small">
            S
          </div>

          <div className="settings-user-details">

            <strong>
              Student
            </strong>

            <span>
              Student Account
            </span>

          </div>

          <Link
            to="/"
            className="settings-logout"
          >
            Logout
          </Link>

        </div>

      </header>



      {/* ====================================================
          PAGE LAYOUT
      ==================================================== */}

      <div className="settings-layout">


        {/* ==================================================
            SIDEBAR
        ================================================== */}

        <aside className="settings-sidebar">


          <p className="settings-sidebar-label">
            MENU
          </p>


          <Link
            to="/student-dashboard"
            className="settings-sidebar-link"
          >
            <span>🏠</span>
            Dashboard
          </Link>


          <Link
            to="/menu"
            className="settings-sidebar-link"
          >
            <span>🍽️</span>
            Browse Menu
          </Link>


          <Link
            to="/cart"
            className="settings-sidebar-link"
          >
            <span>🛒</span>
            My Cart
          </Link>


          <Link
            to="/student-orders"
            className="settings-sidebar-link"
          >
            <span>📦</span>
            My Orders
          </Link>


          <p className="settings-sidebar-label settings-account-label">
            ACCOUNT
          </p>


          <Link
            to="/student-profile"
            className="settings-sidebar-link"
          >
            <span>👤</span>
            My Profile
          </Link>


          <Link
            to="/student-settings"
            className="settings-sidebar-link settings-active"
          >
            <span>⚙️</span>
            Settings
          </Link>


        </aside>



        {/* ==================================================
            MAIN CONTENT
        ================================================== */}

        <main className="settings-main">


          {/* =================================================
              PAGE HEADING
          ================================================= */}

          <section className="settings-page-heading">

            <p>
              ACCOUNT
            </p>

            <h1>
              Settings
            </h1>

            <span>
              Manage your cafeteria account preferences
              and notifications.
            </span>

          </section>



          {/* =================================================
              ACCOUNT INFORMATION
          ================================================= */}

          <section className="settings-card">

            <div className="settings-card-heading">

              <div>

                <p>
                  ACCOUNT
                </p>

                <h2>
                  Account Information
                </h2>

              </div>

            </div>


            <div className="settings-information-grid">


              <div className="settings-information-item">

                <span>
                  Student Email
                </span>

                <strong>
                  student@jooust.ac.ke
                </strong>

              </div>


              <div className="settings-information-item">

                <span>
                  Account Type
                </span>

                <strong>
                  Student
                </strong>

              </div>


              <div className="settings-information-item">

                <span>
                  Institution
                </span>

                <strong>
                  Jaramogi Oginga Odinga
                  University of Science and Technology
                </strong>

              </div>


              <div className="settings-information-item">

                <span>
                  Account Status
                </span>

                <strong className="account-active">
                  ● Active
                </strong>

              </div>


            </div>

          </section>



          {/* =================================================
              NOTIFICATIONS
          ================================================= */}

          <section className="settings-card">


            <div className="settings-card-heading">

              <div>

                <p>
                  NOTIFICATIONS
                </p>

                <h2>
                  Notification Preferences
                </h2>

                <span>
                  Choose which updates you would like
                  to receive.
                </span>

              </div>

            </div>



            {/* ORDER NOTIFICATIONS */}

            <div className="settings-option">

              <div className="settings-option-icon">
                📦
              </div>

              <div className="settings-option-info">

                <strong>
                  Order Updates
                </strong>

                <span>
                  Receive notifications when your order
                  status changes.
                </span>

              </div>


              <button
                type="button"
                className={
                  orderNotifications
                    ? "settings-toggle toggle-on"
                    : "settings-toggle"
                }
                onClick={() =>
                  setOrderNotifications(
                    !orderNotifications
                  )
                }
              >

                <span />

              </button>

            </div>



            {/* PAYMENT NOTIFICATIONS */}

            <div className="settings-option">

              <div className="settings-option-icon">
                💳
              </div>

              <div className="settings-option-info">

                <strong>
                  Payment Notifications
                </strong>

                <span>
                  Receive updates about payments
                  and transactions.
                </span>

              </div>


              <button
                type="button"
                className={
                  paymentNotifications
                    ? "settings-toggle toggle-on"
                    : "settings-toggle"
                }
                onClick={() =>
                  setPaymentNotifications(
                    !paymentNotifications
                  )
                }
              >

                <span />

              </button>

            </div>



            {/* CAFETERIA ANNOUNCEMENTS */}

            <div className="settings-option">

              <div className="settings-option-icon">
                📢
              </div>

              <div className="settings-option-info">

                <strong>
                  Cafeteria Announcements
                </strong>

                <span>
                  Receive important cafeteria
                  announcements and updates.
                </span>

              </div>


              <button
                type="button"
                className={
                  cafeteriaAnnouncements
                    ? "settings-toggle toggle-on"
                    : "settings-toggle"
                }
                onClick={() =>
                  setCafeteriaAnnouncements(
                    !cafeteriaAnnouncements
                  )
                }
              >

                <span />

              </button>

            </div>


          </section>



          {/* =================================================
              SECURITY
          ================================================= */}

          <section className="settings-card">


            <div className="settings-card-heading">

              <div>

                <p>
                  SECURITY
                </p>

                <h2>
                  Password & Security
                </h2>

              </div>

            </div>


            <div className="settings-security-row">


              <div className="settings-option-icon">
                🔒
              </div>


              <div className="settings-option-info">

                <strong>
                  Password
                </strong>

                <span>
                  Change your student account password.
                </span>

              </div>


              <button
                type="button"
                className="settings-outline-button"
                onClick={() =>
                  alert(
                    "Password change will be connected later."
                  )
                }
              >
                Change Password
              </button>


            </div>


          </section>



          {/* =================================================
              QUICK ACCOUNT LINKS
          ================================================= */}

          <section className="settings-card">


            <div className="settings-card-heading">

              <div>

                <p>
                  ACCOUNT
                </p>

                <h2>
                  Quick Links
                </h2>

              </div>

            </div>


            <div className="settings-links">


              <Link
                to="/student-profile"
                className="settings-quick-link"
              >

                <span>
                  👤
                </span>

                <div>

                  <strong>
                    My Profile
                  </strong>

                  <small>
                    View your student information
                  </small>

                </div>

                <b>
                  →
                </b>

              </Link>


              <Link
                to="/student-dashboard"
                className="settings-quick-link"
              >

                <span>
                  🏠
                </span>

                <div>

                  <strong>
                    Dashboard
                  </strong>

                  <small>
                    Return to your student dashboard
                  </small>

                </div>

                <b>
                  →
                </b>

              </Link>


            </div>

          </section>



          {/* =================================================
              BACK
          ================================================= */}

          <Link
            to="/student-dashboard"
            className="settings-back-button"
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

export default StudentSettings;