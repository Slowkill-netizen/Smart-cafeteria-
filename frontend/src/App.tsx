import './App.css'

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <header className="navbar">
        <div className="logo">
          <span className="logo-icon">🍽️</span>
          <span>Smart Cafeteria</span>
        </div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#about">About</a>
        </nav>

        <div className="nav-actions">
          <button className="login-button">Login</button>
          <button className="register-button">Register</button>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="hero-label">SMART • FAST • SECURE</p>

            <h1>
              Order Food.
              <br />
              <span>Skip the Queue.</span>
            </h1>

            <p className="hero-description">
              Order your meals digitally, make secure payments and collect
              your food using a unique order code.
            </p>

            <div className="hero-buttons">
              <button className="primary-button">
                Browse Today's Menu
              </button>

              <button className="secondary-button">
                How It Works
              </button>
            </div>
          </div>

          <div className="hero-card">
            <div className="food-icon">🍛</div>
            <h3>Today's Special</h3>
            <p>Fresh meals ready for you</p>

            <div className="food-details">
              <span>Fast service</span>
              <span>✓ Secure</span>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="how-it-works" id="how-it-works">
          <div className="section-heading">
            <p>HOW IT WORKS</p>
            <h2>Three simple steps</h2>
            <span>
              From ordering to collecting your meal, everything is simple.
            </span>
          </div>

          <div className="steps">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Choose Your Food</h3>
              <p>
                Browse the available meals and add the food you want to your
                order.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Pay Securely</h3>
              <p>
                Confirm your order and make your payment through the available
                payment method.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Collect Your Food</h3>
              <p>
                Receive a unique order code and present it when collecting
                your meal.
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="about" id="about">
          <div>
            <p className="section-label">WHY SMART CAFETERIA?</p>
            <h2>A better way to manage school meals.</h2>
          </div>

          <p>
            Our system is designed to reduce long queues, improve payment
            tracking, reduce food collection errors and give the cafeteria
            better control over orders and sales.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="logo">
          <span className="logo-icon">🍽️</span>
          <span>Smart Cafeteria</span>
        </div>

        <p>Making campus meals simpler.</p>

        <span>© 2026 Smart Cafeteria</span>
      </footer>
    </div>
  )
}

export default App