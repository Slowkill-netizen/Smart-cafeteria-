import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useCart } from '../context/CartContext'

import './Checkout.css'


function Checkout() {

  // ==========================================
  // CART
  // ==========================================

  const {
    cartItems,
    cartTotal,
  } = useCart()


  // ==========================================
  // STUDENT DETAILS
  // ==========================================

  const [studentName, setStudentName] =
    useState('')

  const [studentNumber, setStudentNumber] =
    useState('')

  const [phoneNumber, setPhoneNumber] =
    useState('')


  // ==========================================
  // PAYMENT METHOD
  // ==========================================

  const [paymentMethod, setPaymentMethod] =
    useState('M-Pesa')


  // ==========================================
  // HANDLE CHECKOUT
  // ==========================================

  const handleCheckout = (
    event: React.FormEvent
  ) => {

    event.preventDefault()

    // Temporary for now.
    // Later this will send the order
    // to our backend.

    alert(
      'Checkout information received. Payment integration will be added next.'
    )
  }


  // ==========================================
  // EMPTY CART
  // ==========================================

  if (cartItems.length === 0) {

    return (

      <div className="checkout-page">

        <div className="checkout-empty">

          <div className="checkout-empty-icon">
            🛒
          </div>

          <h1>
            Your Cart is Empty
          </h1>

          <p>
            Add some meals before proceeding
            to checkout.
          </p>

          <Link
            to="/menu"
            className="checkout-primary-button"
          >
            Browse Menu
          </Link>

        </div>

      </div>

    )
  }


  // ==========================================
  // CHECKOUT PAGE
  // ==========================================

  return (

    <div className="checkout-page">

      <div className="checkout-container">


        {/* ====================================
            HEADER
        ==================================== */}

        <div className="checkout-header">

          <div>

            <p className="checkout-label">
              JOOUST SMART CAFETERIA
            </p>

            <h1>
              Checkout
            </h1>

            <p>
              Confirm your details before
              placing your order.
            </p>

          </div>


          <Link
            to="/cart"
            className="back-to-cart"
          >
            ← Back to Cart
          </Link>

        </div>


        {/* ====================================
            CHECKOUT CONTENT
        ==================================== */}

        <div className="checkout-content">


          {/* ==================================
              STUDENT INFORMATION
          ================================== */}

          <form
            className="checkout-form"
            onSubmit={handleCheckout}
          >

            <div className="checkout-card">

              <h2>
                Student Information
              </h2>

              <p className="section-description">
                Enter the details that will be
                associated with this order.
              </p>


              {/* STUDENT NAME */}

              <div className="form-group">

                <label htmlFor="studentName">
                  Full Name
                </label>

                <input
                  id="studentName"
                  type="text"
                  placeholder="Enter your full name"
                  value={studentName}
                  onChange={(event) =>
                    setStudentName(
                      event.target.value
                    )
                  }
                  required
                />

              </div>


              {/* STUDENT NUMBER */}

              <div className="form-group">

                <label htmlFor="studentNumber">
                  Student Registration Number
                </label>

                <input
                  id="studentNumber"
                  type="text"
                  placeholder="e.g. CICT/01/2022"
                  value={studentNumber}
                  onChange={(event) =>
                    setStudentNumber(
                      event.target.value
                    )
                  }
                  required
                />

              </div>


              {/* PHONE NUMBER */}

              <div className="form-group">

                <label htmlFor="phoneNumber">
                  M-Pesa Phone Number
                </label>

                <input
                  id="phoneNumber"
                  type="tel"
                  placeholder="e.g. 0712345678"
                  value={phoneNumber}
                  onChange={(event) =>
                    setPhoneNumber(
                      event.target.value
                    )
                  }
                  required
                />

              </div>

            </div>


            {/* ==================================
                PAYMENT METHOD
            ================================== */}

            <div className="checkout-card">

              <h2>
                Payment Method
              </h2>

              <p className="section-description">
                Select how you would like to
                pay for your order.
              </p>


              <label
                className={
                  paymentMethod === 'M-Pesa'
                    ? 'payment-option selected'
                    : 'payment-option'
                }
              >

                <input
                  type="radio"
                  name="payment"
                  value="M-Pesa"
                  checked={
                    paymentMethod === 'M-Pesa'
                  }
                  onChange={() =>
                    setPaymentMethod('M-Pesa')
                  }
                />

                <div>

                  <strong>
                    M-Pesa
                  </strong>

                  <span>
                    Pay securely using M-Pesa.
                  </span>

                </div>

              </label>


              <label
                className={
                  paymentMethod === 'Cash'
                    ? 'payment-option selected'
                    : 'payment-option'
                }
              >

                <input
                  type="radio"
                  name="payment"
                  value="Cash"
                  checked={
                    paymentMethod === 'Cash'
                  }
                  onChange={() =>
                    setPaymentMethod('Cash')
                  }
                />

                <div>

                  <strong>
                    Cash
                  </strong>

                  <span>
                    Pay at the cafeteria counter.
                  </span>

                </div>

              </label>

            </div>


            {/* ==================================
                PLACE ORDER
            ================================== */}

            <button
              type="submit"
              className="place-order-button"
            >
              Continue to Payment
            </button>

          </form>


          {/* ==================================
              ORDER SUMMARY
          ================================== */}

          <aside className="checkout-summary">

            <h2>
              Order Summary
            </h2>


            <div className="checkout-items">

              {cartItems.map((item) => (

                <div
                  className="checkout-item"
                  key={item.id}
                >

                  <div className="checkout-item-left">

                    <span className="checkout-item-emoji">
                      {item.emoji}
                    </span>

                    <div>

                      <strong>
                        {item.name}
                      </strong>

                      <small>
                        {item.quantity} × KSh {item.price}
                      </small>

                    </div>

                  </div>


                  <strong>
                    KSh {item.price * item.quantity}
                  </strong>

                </div>

              ))}

            </div>


            {/* TOTAL */}

            <div className="checkout-total">

              <span>
                Total
              </span>

              <strong>
                KSh {cartTotal}
              </strong>

            </div>


            <div className="checkout-security">

              🔐

              <p>
                Your order will receive a unique
                digital identity after payment.
              </p>

            </div>

          </aside>

        </div>

      </div>

    </div>

  )
}


export default Checkout