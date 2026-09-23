import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Checkout.css";

// ==========================================================
// CHECKOUT
// ==========================================================

function Checkout() {
  // ========================================================
  // CART
  // ========================================================

  const {
    cartItems,
    cartTotal,
  } = useCart();


  // ========================================================
  // TEMPORARY STUDENT ACCOUNT DETAILS
  // ========================================================
  // Later, these details will come directly from the
  // logged-in student's account/database.

  const student = {
    name: "Student",
    email: "student@jooust.ac.ke",
    phone: "0712345678",
  };


  // ========================================================
  // PAYMENT METHOD
  // ========================================================

  const [paymentMethod, setPaymentMethod] =
    useState<"M-Pesa" | "Cash">("M-Pesa");


  // ========================================================
  // PHONE OPTION
  // ========================================================

  const [useDifferentNumber, setUseDifferentNumber] =
    useState(false);

  const [phoneNumber, setPhoneNumber] =
    useState(student.phone);


  // ========================================================
  // ORDER TYPE
  // ========================================================

  const [orderType, setOrderType] =
    useState<
      "Eat at Cafeteria" | "Take Away"
    >("Eat at Cafeteria");


  // ========================================================
  // PAYMENT MESSAGE
  // ========================================================

  const [paymentMessage, setPaymentMessage] =
    useState("");


  // ========================================================
  // EMPTY CART
  // ========================================================

  if (cartItems.length === 0) {
    return (
      <div className="checkout-page">

        <div className="checkout-empty">

          <div className="empty-cart-icon">
            🛒
          </div>

          <h1>
            Your Cart is Empty
          </h1>

          <p>
            Add some delicious meals before
            proceeding to checkout.
          </p>

          <Link
            to="/menu"
            className="checkout-menu-button"
          >
            Browse Menu →
          </Link>

        </div>

      </div>
    );
  }


  // ========================================================
  // PLACE ORDER
  // ========================================================

  const handlePlaceOrder = () => {

    // Clear any previous message
    setPaymentMessage("");


    // ======================================================
    // M-PESA
    // ======================================================

    if (paymentMethod === "M-Pesa") {

      // Basic phone validation
      const cleanPhone =
        phoneNumber.replace(/\s+/g, "");


      if (
        cleanPhone.length < 10 ||
        !/^\d+$/.test(cleanPhone)
      ) {

        setPaymentMessage(
          "Please enter a valid M-Pesa phone number."
        );

        return;
      }


      // Temporary message.
      // Actual STK Push integration will be added later.

      setPaymentMessage(
        `M-Pesa payment prompt will be sent to ${phoneNumber} for KSh ${cartTotal}.`
      );

      console.log("M-Pesa payment request:", {
        amount: cartTotal,
        phone: phoneNumber,
        orderType,
        items: cartItems,
      });

      return;
    }


    // ======================================================
    // CASH PAYMENT
    // ======================================================

    setPaymentMessage(
      "Your order has been received. Please pay at the cafeteria when collecting your meal."
    );


    console.log("Cash order:", {
      student,
      orderType,
      items: cartItems,
      total: cartTotal,
    });
  };


  // ========================================================
  // PAGE
  // ========================================================

  return (
    <div className="checkout-page">


      {/* ====================================================
          NAVIGATION
      ==================================================== */}

      <nav className="checkout-nav">

        <Link
          to="/cart"
          className="checkout-back"
        >
          ← Back to Cart
        </Link>


        <div className="checkout-brand">

          <div className="checkout-logo">
            J
          </div>

          <div>

            <strong>
              JOOUST
            </strong>

            <span>
              SMART CAFETERIA
            </span>

          </div>

        </div>

      </nav>



      {/* ====================================================
          HEADER
      ==================================================== */}

      <header className="checkout-header">

        <p>
          ORDER & PAYMENT
        </p>

        <h1>
          Checkout
        </h1>

        <span>
          Review your order and choose how you would
          like to pay.
        </span>

      </header>



      {/* ====================================================
          MAIN CONTENT
      ==================================================== */}

      <main className="checkout-container">


        {/* ==================================================
            LEFT SIDE
        ================================================== */}

        <section className="checkout-form-section">


          {/* =================================================
              STUDENT ACCOUNT
          ================================================= */}

          <div className="checkout-card">

            <div className="checkout-card-heading">

              <span className="checkout-step">
                01
              </span>

              <div>

                <h2>
                  Your Account
                </h2>

                <p>
                  Your registered account details.
                </p>

              </div>

            </div>


            <div className="student-account-box">

              <div className="student-account-avatar">
                {student.name.charAt(0)}
              </div>

              <div className="student-account-details">

                <strong>
                  {student.name}
                </strong>

                <span>
                  {student.email}
                </span>

                <span>
                  {student.phone}
                </span>

              </div>

              <Link
                to="/student-profile"
                className="edit-account"
              >
                Edit
              </Link>

            </div>

          </div>



          {/* =================================================
              ORDER PREFERENCE
          ================================================= */}

          <div className="checkout-card">

            <div className="checkout-card-heading">

              <span className="checkout-step">
                02
              </span>

              <div>

                <h2>
                  Order Preference
                </h2>

                <p>
                  How would you like to receive your meal?
                </p>

              </div>

            </div>


            <div className="order-type-options">


              {/* ============================================
                  EAT AT CAFETERIA
              ============================================ */}

              <button
                type="button"
                className={
                  orderType === "Eat at Cafeteria"
                    ? "order-option active"
                    : "order-option"
                }
                onClick={() => {
                  setOrderType("Eat at Cafeteria");
                  setPaymentMessage("");
                }}
              >

                <span className="option-icon">
                  🍽️
                </span>

                <span>

                  <strong>
                    Eat at Cafeteria
                  </strong>

                  <small>
                    Enjoy your meal at the cafeteria.
                  </small>

                </span>

              </button>



              {/* ============================================
                  TAKE AWAY
              ============================================ */}

              <button
                type="button"
                className={
                  orderType === "Take Away"
                    ? "order-option active"
                    : "order-option"
                }
                onClick={() => {
                  setOrderType("Take Away");
                  setPaymentMessage("");
                }}
              >

                <span className="option-icon">
                  🥡
                </span>

                <span>

                  <strong>
                    Take Away
                  </strong>

                  <small>
                    Collect your meal when ready.
                  </small>

                </span>

              </button>

            </div>

          </div>



          {/* =================================================
              PAYMENT METHOD
          ================================================= */}

          <div className="checkout-card">

            <div className="checkout-card-heading">

              <span className="checkout-step">
                03
              </span>

              <div>

                <h2>
                  Payment Method
                </h2>

                <p>
                  Choose how you would like to pay.
                </p>

              </div>

            </div>



            {/* ===============================================
                M-PESA
            =============================================== */}

            <button
              type="button"
              className={
                paymentMethod === "M-Pesa"
                  ? "payment-option active"
                  : "payment-option"
              }
              onClick={() => {
                setPaymentMethod("M-Pesa");
                setPaymentMessage("");
              }}
            >

              <span className="mpesa-icon">
                M
              </span>

              <span>

                <strong>
                  M-Pesa
                </strong>

                <small>
                  Receive a payment prompt on your phone.
                </small>

              </span>

              <span className="payment-radio">
                {paymentMethod === "M-Pesa"
                  ? "●"
                  : "○"}
              </span>

            </button>



            {/* ===============================================
                M-PESA PHONE AREA
            =============================================== */}

            {paymentMethod === "M-Pesa" && (

              <div className="mpesa-payment-area">

                <div className="registered-number">

                  <div>

                    <span>
                      Payment will be sent to
                    </span>

                    <strong>
                      {useDifferentNumber
                        ? "Different number"
                        : `••••••${student.phone.slice(-3)}`}
                    </strong>

                  </div>


                  <button
                    type="button"
                    onClick={() => {
                      setUseDifferentNumber(
                        !useDifferentNumber
                      );

                      setPaymentMessage("");
                    }}
                  >
                    {useDifferentNumber
                      ? "Use registered number"
                      : "Use another number"}
                  </button>

                </div>



                {/* =========================================
                    DIFFERENT NUMBER
                ========================================= */}

                {useDifferentNumber && (

                  <div className="phone-input-area">

                    <label htmlFor="mpesaPhone">
                      M-Pesa Phone Number
                    </label>

                    <input
                      id="mpesaPhone"
                      type="tel"
                      placeholder="0712345678"
                      value={phoneNumber}
                      onChange={(e) => {
                        setPhoneNumber(
                          e.target.value
                        );

                        setPaymentMessage("");
                      }}
                    />

                    <small>
                      The payment prompt will be sent
                      to this number.
                    </small>

                  </div>

                )}

              </div>

            )}



            {/* ===============================================
                CASH
            =============================================== */}

            <button
              type="button"
              className={
                paymentMethod === "Cash"
                  ? "payment-option active"
                  : "payment-option"
              }
              onClick={() => {
                setPaymentMethod("Cash");
                setPaymentMessage("");
              }}
            >

              <span className="cash-icon">
                💵
              </span>

              <span>

                <strong>
                  Cash at Cafeteria
                </strong>

                <small>
                  Pay when collecting your meal.
                </small>

              </span>

              <span className="payment-radio">
                {paymentMethod === "Cash"
                  ? "●"
                  : "○"}
              </span>

            </button>

          </div>

        </section>



        {/* ==================================================
            RIGHT SIDE — ORDER SUMMARY
        ================================================== */}

        <aside className="checkout-summary">

          <div className="summary-card">


            {/* ===============================================
                SUMMARY HEADING
            =============================================== */}

            <div className="summary-heading">

              <div>

                <p>
                  YOUR ORDER
                </p>

                <h2>
                  Order Summary
                </h2>

              </div>

              <span>
                {cartItems.length} item
                {cartItems.length !== 1
                  ? "s"
                  : ""}
              </span>

            </div>



            {/* ===============================================
                ITEMS
            =============================================== */}

            <div className="checkout-items">

              {cartItems.map((item) => (

                <div
                  className="checkout-item"
                  key={item.id}
                >

                  <div className="checkout-item-image">

                    {item.image ? (

                      <img
                        src={item.image}
                        alt={item.name}
                      />

                    ) : (

                      <span>
                        {item.emoji}
                      </span>

                    )}

                  </div>


                  <div className="checkout-item-info">

                    <strong>
                      {item.name}
                    </strong>

                    <span>
                      Qty: {item.quantity}
                    </span>

                  </div>


                  <strong className="checkout-item-price">
                    KSh {item.price * item.quantity}
                  </strong>

                </div>

              ))}

            </div>



            {/* ===============================================
                TOTAL CALCULATION
            =============================================== */}

            <div className="summary-calculation">

              <div>

                <span>
                  Subtotal
                </span>

                <strong>
                  KSh {cartTotal}
                </strong>

              </div>


              <div>

                <span>
                  Service Fee
                </span>

                <strong>
                  KSh 0
                </strong>

              </div>


              <div className="summary-total">

                <span>
                  Total
                </span>

                <strong>
                  KSh {cartTotal}
                </strong>

              </div>

            </div>



            {/* ===============================================
                PAY / PLACE ORDER BUTTON
            =============================================== */}

            <button
              type="button"
              className="place-order-button"
              onClick={handlePlaceOrder}
            >

              <span>

                {paymentMethod === "M-Pesa"
                  ? `Pay KSh ${cartTotal}`
                  : "Place Order"}

              </span>

              <span>
                →
              </span>

            </button>



            {/* ===============================================
                PAYMENT MESSAGE
            =============================================== */}

            {paymentMessage && (

              <div className="payment-message">

                <span>
                  ✓
                </span>

                <p>
                  {paymentMessage}
                </p>

              </div>

            )}



            {/* ===============================================
                SECURITY
            =============================================== */}

            <div className="checkout-security">

              <span>
                🔒
              </span>

              <p>
                Your account and order information
                is securely handled by JOOUST Smart
                Cafeteria.
              </p>

            </div>


          </div>

        </aside>

      </main>

    </div>
  );
}


// ==========================================================
// DEFAULT EXPORT
// ==========================================================

export default Checkout;