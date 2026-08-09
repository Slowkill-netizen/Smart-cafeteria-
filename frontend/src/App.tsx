import './App.css'
import cafeteriaFood from './assets/cafeteria-food.jpg'

function App() {
  return (
    <div className="app">

      {/* ================= NAVIGATION ================= */}
      <header className="navbar">

        <div className="brand">
          <div className="brand-image">
            <img src={cafeteriaFood} alt="JOOUST cafeteria meal" />
          </div>

          <div className="brand-text">
            <h2>JOOUST</h2>
            <span>SMART CAFETERIA</span>
          </div>
        </div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#about">About</a>
        </nav>

        <div className="nav-actions">
          <button className="login-button">
            Login
          </button>

          <button className="register-button">
            Register
          </button>
        </div>

      </header>


      {/* ================= HERO ================= */}
      <main>

        <section className="hero" id="home">

          <div className="hero-content">

            <p className="university-label">
              JARAMOGI OGINGA ODINGA UNIVERSITY
              <br />
              OF SCIENCE AND TECHNOLOGY
            </p>

            <p className="system-label">
              SMART CAFETERIA SYSTEM
            </p>

            <h1>
              Your Campus Meals,
              <br />
              <span>Made Smarter.</span>
            </h1>

            <p className="hero-description">
              Order your meals digitally, make secure payments
              and collect your food using a verified order code —
              reducing unnecessary queues and improving cafeteria
              accountability.
            </p>

            <div className="hero-buttons">

              <button className="primary-button">
                View Today's Menu
              </button>

              <button className="secondary-button">
                How It Works
              </button>

            </div>

          </div>


          {/* FOOD IMAGE */}
          <div className="hero-food">

            <div className="food-image-wrapper">

              <img
                src={cafeteriaFood}
                alt="Meal served at the JOOUST cafeteria"
              />

              <div className="food-badge">
                <strong>Fresh Meals</strong>
                <span>Ready to Order</span>
              </div>

            </div>

          </div>

        </section>


        {/* ================= HOW IT WORKS ================= */}

        <section
          className="how-it-works"
          id="how-it-works"
        >

          <div className="section-heading">

            <p>SMART DINING</p>

            <h2>
              From order to collection,
              <br />
              everything is simple.
            </h2>

            <span>
              A faster and more accountable way for JOOUST
              students to get their meals.
            </span>

          </div>


          <div className="steps">

            <div className="step-card">

              <div className="step-number">
                01
              </div>

              <h3>
                Choose Your Food
              </h3>

              <p>
                Browse the available cafeteria meals and
                add what you want to your order.
              </p>

            </div>


            <div className="step-card">

              <div className="step-number">
                02
              </div>

              <h3>
                Pay Securely
              </h3>

              <p>
                Confirm your order and make your payment
                through the available payment method.
              </p>

            </div>


            <div className="step-card">

              <div className="step-number">
                03
              </div>

              <h3>
                Collect Your Food
              </h3>

              <p>
                Present your unique order verification
                code when your meal is ready.
              </p>

            </div>

          </div>

        </section>


        {/* ================= ABOUT ================= */}

        <section
          className="about"
          id="about"
        >

          <div>

            <p className="section-label">
              WHY SMART CAFETERIA?
            </p>

            <h2>
              Built for a smarter
              campus dining experience.
            </h2>

          </div>

          <p>
            The JOOUST Smart Cafeteria system is designed
            to reduce long queues, improve payment tracking,
            minimize food collection errors and give the
            cafeteria better control over orders and sales.
          </p>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-brand">

          <div className="footer-logo">
            <img
              src={cafeteriaFood}
              alt="Smart Cafeteria"
            />
          </div>

          <div>
            <strong>JOOUST SMART CAFETERIA</strong>

            <p>
              Oasis of Knowledge
            </p>
          </div>

        </div>

        <p>
          © 2026 JOOUST Smart Cafeteria System
        </p>

      </footer>

    </div>
  )
}

export default App