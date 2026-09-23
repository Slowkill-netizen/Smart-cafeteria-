import { Link, useLocation } from "react-router-dom";
import "./PaymentProcessing.css";


// ==========================================================
// PAYMENT PROCESSING
// ==========================================================

function PaymentProcessing() {

  const location = useLocation();

  // ========================================================
  // PAYMENT INFORMATION
  // ========================================================

  const paymentData = location.state || {
    amount: 0,
    phone: "0712345678",
  };


  // ========================================================
  // MASK PHONE NUMBER
  // ========================================================

  const maskedPhone =
    paymentData.phone
      ? `••••••${paymentData.phone.slice(-3)}`
      : "••••••678";


  // ========================================================
  // PAGE
  // ========================================================

  return (

    <div className="payment-processing-page">


      {/* ====================================================
          BRAND
      ==================================================== */}

      <div className="payment-brand">

        <div className="payment-logo">
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



      {/* ====================================================
          PAYMENT CARD
      ==================================================== */}

      <main className="payment-processing-card">


        {/* ==================================================
            LOADING ICON
        ================================================== */}

        <div className="payment-loader">

          <div className="loader-ring"></div>

          <span>
            M
          </span>

        </div>



        {/* ==================================================
            HEADING
        ================================================== */}

        <p className="payment-label">
          MPESA PAYMENT
        </p>

        <h1>
          Check Your Phone
        </h1>

        <p className="payment-description">

          We have sent an M-Pesa payment prompt
          to your phone.

        </p>



        {/* ==================================================
            PAYMENT DETAILS
        ================================================== */}

        <div className="payment-details">


          <div>

            <span>
              Amount
            </span>

            <strong>
              KSh {paymentData.amount}
            </strong>

          </div>


          <div>

            <span>
              Phone Number
            </span>

            <strong>
              {maskedPhone}
            </strong>

          </div>


        </div>



        {/* ==================================================
            INSTRUCTIONS
        ================================================== */}

        <div className="payment-instructions">

          <div className="instruction-number">
            1
          </div>

          <p>
            Check your phone for the M-Pesa prompt.
          </p>


          <div className="instruction-number">
            2
          </div>

          <p>
            Enter your M-Pesa PIN to approve the payment.
          </p>


          <div className="instruction-number">
            3
          </div>

          <p>
            Wait for confirmation after completing the payment.
          </p>

        </div>



        {/* ==================================================
            STATUS
        ================================================== */}

        <div className="payment-status">

          <span className="status-dot"></span>

          Waiting for payment confirmation...

        </div>



        {/* ==================================================
            BACK TO CHECKOUT
        ================================================== */}

        <Link
          to="/checkout"
          className="payment-back-button"
        >
          ← Back to Checkout
        </Link>


      </main>



      {/* ====================================================
          SECURITY
      ==================================================== */}

      <p className="payment-security">

        🔒 Secure payment powered by M-Pesa

      </p>


    </div>

  );
}


export default PaymentProcessing;