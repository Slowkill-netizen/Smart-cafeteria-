import { Link } from "react-router-dom";
import "./StudentOrders.css";


// ==========================================================
// ORDER TYPE
// ==========================================================

type Order = {
  id: string;
  date: string;
  items: string;
  total: number;
  status: "Preparing" | "Ready" | "Completed";
};


// ==========================================================
// STUDENT ORDERS
// ==========================================================

function StudentOrders() {

  // ========================================================
  // TEMPORARY ORDERS
  // ========================================================
  // These are sample orders for now.
  // Later, we will replace them with orders from the database.

  const orders: Order[] = [

    {
      id: "#JO-1001",
      date: "13 Aug 2026 • 10:32 AM",
      items: "White Tea × 1, Mandazi × 2",
      total: 80,
      status: "Completed",
    },

    {
      id: "#JO-1002",
      date: "14 Aug 2026 • 12:18 PM",
      items: "Rice × 1, Beef × 1, Kales × 1",
      total: 180,
      status: "Preparing",
    },

    {
      id: "#JO-1003",
      date: "14 Aug 2026 • 1:05 PM",
      items: "Fresh Juice × 1, Chapati × 2",
      total: 140,
      status: "Ready",
    },

  ];


  // ========================================================
  // PAGE
  // ========================================================

  return (

    <div className="student-orders-page">


      {/* ====================================================
          TOP BAR
      ==================================================== */}

      <header className="orders-topbar">

        <Link
          to="/student-dashboard"
          className="orders-brand"
        >

          <div className="orders-logo">
            J
          </div>

          <div className="orders-brand-text">

            <strong>
              JOOUST
            </strong>

            <span>
              SMART CAFETERIA
            </span>

          </div>

        </Link>


        <div className="orders-user">

          <div className="orders-avatar">
            S
          </div>

          <div className="orders-user-details">

            <strong>
              Student
            </strong>

            <span>
              Student Account
            </span>

          </div>

          <Link
            to="/"
            className="orders-logout"
          >
            Logout
          </Link>

        </div>

      </header>



      {/* ====================================================
          PAGE LAYOUT
      ==================================================== */}

      <div className="orders-layout">


        {/* ==================================================
            SIDEBAR
        ================================================== */}

        <aside className="orders-sidebar">


          <p className="orders-sidebar-label">
            MENU
          </p>


          <Link
            to="/student-dashboard"
            className="orders-sidebar-link"
          >
            <span>🏠</span>
            Dashboard
          </Link>


          <Link
            to="/menu"
            className="orders-sidebar-link"
          >
            <span>🍽️</span>
            Browse Menu
          </Link>


          <Link
            to="/cart"
            className="orders-sidebar-link"
          >
            <span>🛒</span>
            My Cart
          </Link>


          <Link
            to="/student-orders"
            className="orders-sidebar-link orders-active"
          >
            <span>📦</span>
            My Orders
          </Link>


          <p className="orders-sidebar-label orders-account-label">
            ACCOUNT
          </p>


          <Link
            to="/student-profile"
            className="orders-sidebar-link"
          >
            <span>👤</span>
            My Profile
          </Link>


          <Link
            to="/student-settings"
            className="orders-sidebar-link"
          >
            <span>⚙️</span>
            Settings
          </Link>


        </aside>



        {/* ==================================================
            MAIN CONTENT
        ================================================== */}

        <main className="orders-main">


          {/* =================================================
              PAGE HEADING
          ================================================= */}

          <section className="orders-heading">

            <p>
              ORDER HISTORY
            </p>

            <h1>
              My Orders
            </h1>

            <span>
              Track your current and previous cafeteria
              orders.
            </span>

          </section>



          {/* =================================================
              ORDER SUMMARY
          ================================================= */}

          <section className="order-summary">


            <div className="summary-box">

              <span>
                Total Orders
              </span>

              <strong>
                {orders.length}
              </strong>

            </div>


            <div className="summary-box">

              <span>
                Preparing
              </span>

              <strong>
                {
                  orders.filter(
                    (order) =>
                      order.status === "Preparing"
                  ).length
                }
              </strong>

            </div>


            <div className="summary-box">

              <span>
                Ready
              </span>

              <strong>
                {
                  orders.filter(
                    (order) =>
                      order.status === "Ready"
                  ).length
                }
              </strong>

            </div>


            <div className="summary-box">

              <span>
                Completed
              </span>

              <strong>
                {
                  orders.filter(
                    (order) =>
                      order.status === "Completed"
                  ).length
                }
              </strong>

            </div>


          </section>



          {/* =================================================
              ORDERS
          ================================================= */}

          <section className="orders-card">


            <div className="orders-card-heading">

              <div>

                <p>
                  RECENT ACTIVITY
                </p>

                <h2>
                  Your Orders
                </h2>

              </div>


              <Link
                to="/menu"
                className="order-menu-button"
              >
                + New Order
              </Link>

            </div>



            {/* =================================================
                ORDER LIST
            ================================================= */}

            <div className="order-list">

              {orders.map((order) => (

                <article
                  className="order-item"
                  key={order.id}
                >


                  {/* ORDER ICON */}

                  <div className="order-icon">
                    🛍️
                  </div>


                  {/* ORDER INFORMATION */}

                  <div className="order-information">

                    <div className="order-top-line">

                      <strong>
                        {order.id}
                      </strong>

                      <span
                        className={`order-status status-${order.status.toLowerCase()}`}
                      >
                        {order.status}
                      </span>

                    </div>


                    <p className="order-date">
                      {order.date}
                    </p>


                    <p className="order-items">
                      {order.items}
                    </p>

                  </div>


                  {/* TOTAL */}

                  <div className="order-total">

                    <span>
                      Total
                    </span>

                    <strong>
                      KSh {order.total}
                    </strong>

                  </div>


                </article>

              ))}

            </div>


          </section>



          {/* =================================================
              EMPTY FUTURE MESSAGE
          ================================================= */}

          <div className="orders-note">

            <span>
              💡
            </span>

            <p>
              Your order history will automatically
              update whenever you place an order through
              the cafeteria menu.
            </p>

          </div>



          {/* =================================================
              BACK BUTTON
          ================================================= */}

          <Link
            to="/student-dashboard"
            className="orders-back-button"
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

export default StudentOrders;