import { Link } from "react-router-dom";
import "./StudentDashboard.css";


// ==========================================================
// STUDENT DASHBOARD
// ==========================================================

function StudentDashboard() {

  return (

    <div className="student-dashboard-page">


      {/* ====================================================
          TOP HEADER
      ==================================================== */}

      <header className="dashboard-topbar">

        <Link
          to="/student-dashboard"
          className="dashboard-brand"
        >

          <div className="dashboard-logo">
            J
          </div>

          <div className="dashboard-brand-text">

            <strong>
              JOOUST
            </strong>

            <span>
              SMART CAFETERIA
            </span>

          </div>

        </Link>


        <div className="dashboard-user">

          <div className="user-avatar">
            S
          </div>

          <div className="user-details">

            <strong>
              Student
            </strong>

            <span>
              Student Account
            </span>

          </div>

          <Link
            to="/"
            className="dashboard-logout"
          >
            Logout
          </Link>

        </div>

      </header>



      {/* ====================================================
          MAIN DASHBOARD
      ==================================================== */}

      <div className="dashboard-layout">


        {/* ==================================================
            SIDEBAR
        ================================================== */}

        <aside className="dashboard-sidebar">


          <p className="sidebar-label">
            MENU
          </p>


          <Link
            to="/student-dashboard"
            className="sidebar-link active"
          >
            <span>🏠</span>
            Dashboard
          </Link>


          <Link
            to="/menu"
            className="sidebar-link"
          >
            <span>🍽️</span>
            Browse Menu
          </Link>


          <Link
            to="/cart"
            className="sidebar-link"
          >
            <span>🛒</span>
            My Cart
          </Link>


          <Link
            to="/student-orders"
            className="sidebar-link"
          >
            <span>📦</span>
            My Orders
          </Link>


          <p className="sidebar-label sidebar-second-label">
            ACCOUNT
          </p>


          <Link
            to="/student-profile"
            className="sidebar-link"
          >
            <span>👤</span>
            My Profile
          </Link>


        </aside>



        {/* ==================================================
            CONTENT
        ================================================== */}

        <main className="dashboard-main">


          {/* =================================================
              WELCOME
          ================================================= */}

          <section className="dashboard-welcome">

            <div>

              <p className="dashboard-label">
                STUDENT DASHBOARD
              </p>

              <h1>
                Welcome back, Student 👋
              </h1>

              <p>
                Ready to order something delicious today?
              </p>

            </div>


            <Link
              to="/menu"
              className="dashboard-order-button"
            >
              🍽️ Order Food
            </Link>

          </section>



          {/* =================================================
              STATISTICS
          ================================================= */}

          <section className="dashboard-stats">


            <div className="stat-card">

              <div className="stat-icon">
                🛒
              </div>

              <div>

                <span>
                  Cart Items
                </span>

                <strong>
                  0
                </strong>

              </div>

            </div>


            <div className="stat-card">

              <div className="stat-icon">
                📦
              </div>

              <div>

                <span>
                  Total Orders
                </span>

                <strong>
                  0
                </strong>

              </div>

            </div>


            <div className="stat-card">

              <div className="stat-icon">
                💰
              </div>

              <div>

                <span>
                  Total Spent
                </span>

                <strong>
                  KSh 0
                </strong>

              </div>

            </div>


          </section>



          {/* =================================================
              QUICK ACTIONS
          ================================================= */}

          <section className="dashboard-section">

            <div className="section-heading">

              <div>

                <p>
                  GET STARTED
                </p>

                <h2>
                  Quick Actions
                </h2>

              </div>

            </div>


            <div className="quick-actions">


              <Link
                to="/menu"
                className="quick-action-card primary-action"
              >

                <div className="quick-action-icon">
                  🍽️
                </div>

                <div>

                  <h3>
                    Browse Menu
                  </h3>

                  <p>
                    Explore breakfast, lunch,
                    dinner and drinks.
                  </p>

                </div>

                <span>
                  →
                </span>

              </Link>


              <Link
                to="/cart"
                className="quick-action-card"
              >

                <div className="quick-action-icon">
                  🛒
                </div>

                <div>

                  <h3>
                    View Cart
                  </h3>

                  <p>
                    Review your selected meals
                    before checkout.
                  </p>

                </div>

                <span>
                  →
                </span>

              </Link>


              <Link
                to="/student-orders"
                className="quick-action-card"
              >

                <div className="quick-action-icon">
                  📦
                </div>

                <div>

                  <h3>
                    My Orders
                  </h3>

                  <p>
                    Track your previous and
                    current cafeteria orders.
                  </p>

                </div>

                <span>
                  →
                </span>

              </Link>


            </div>

          </section>



          {/* =================================================
              RECENT ORDERS
          ================================================= */}

          <section className="dashboard-section">

            <div className="section-heading">

              <div>

                <p>
                  ORDER HISTORY
                </p>

                <h2>
                  Recent Orders
                </h2>

              </div>


              <Link
                to="/student-orders"
                className="view-all"
              >
                View All →
              </Link>

            </div>


            <div className="orders-card">


              {/* ORDER 1 */}

              <div className="order-row">

                <div className="order-info">

                  <div className="order-icon">
                    🍛
                  </div>

                  <div>

                    <strong>
                      Beef & Rice
                    </strong>

                    <span>
                      Order #ORD001
                    </span>

                  </div>

                </div>


                <div className="order-date">
                  Today
                </div>


                <strong className="order-price">
                  KSh 150
                </strong>


                <span className="order-status preparing">
                  Preparing
                </span>

              </div>



              {/* ORDER 2 */}

              <div className="order-row">

                <div className="order-info">

                  <div className="order-icon">
                    ☕
                  </div>

                  <div>

                    <strong>
                      Tea & Mandazi
                    </strong>

                    <span>
                      Order #ORD002
                    </span>

                  </div>

                </div>


                <div className="order-date">
                  Yesterday
                </div>


                <strong className="order-price">
                  KSh 50
                </strong>


                <span className="order-status completed">
                  Completed
                </span>

              </div>


            </div>

          </section>


        </main>

      </div>

    </div>
  );
}


// ==========================================================
// DEFAULT EXPORT
// ==========================================================

export default StudentDashboard;