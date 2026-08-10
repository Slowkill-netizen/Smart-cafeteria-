import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './Cart.css'


function Cart() {

  const {
    cartItems,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart()


  // ==========================================
  // EMPTY CART
  // ==========================================

  if (cartItems.length === 0) {

    return (
      <div className="cart-page">

        <div className="empty-cart">

          <div className="empty-cart-icon">
            🛒
          </div>

          <h1>
            Your Cart is Empty
          </h1>

          <p>
            You haven't added any meals yet.
          </p>

          <Link
            to="/menu"
            className="primary-button"
          >
            Browse Today's Menu
          </Link>

        </div>

      </div>
    )
  }


  // ==========================================
  // CART WITH ITEMS
  // ==========================================

  return (

    <div className="cart-page">

      <div className="cart-container">

        {/* HEADER */}

        <div className="cart-header">

          <div>

            <p className="cart-label">
              JOOUST SMART CAFETERIA
            </p>

            <h1>
              Your Cart
            </h1>

          </div>

          <Link
            to="/menu"
            className="continue-shopping"
          >
            ← Continue Shopping
          </Link>

        </div>


        {/* CART CONTENT */}

        <div className="cart-content">


          {/* ==================================
              CART ITEMS
          ================================== */}

          <section className="cart-items">

            {cartItems.map((item) => (

              <article
                className="cart-item"
                key={item.id}
              >

                {/* FOOD IMAGE */}

                <div className="cart-item-image">

                  <span>
                    {item.emoji}
                  </span>

                </div>


                {/* FOOD DETAILS */}

                <div className="cart-item-details">

                  <span className="cart-item-category">
                    {item.category}
                  </span>

                  <h2>
                    {item.name}
                  </h2>

                  <p>
                    KSh {item.price} each
                  </p>

                </div>


                {/* QUANTITY */}

                <div className="quantity-controls">

                  <button
                    type="button"
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                  >
                    −
                  </button>

                  <strong>
                    {item.quantity}
                  </strong>

                  <button
                    type="button"
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                  >
                    +
                  </button>

                </div>


                {/* ITEM TOTAL */}

                <div className="cart-item-total">

                  <strong>
                    KSh {item.price * item.quantity}
                  </strong>

                  <button
                    type="button"
                    className="remove-button"
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                  >
                    Remove
                  </button>

                </div>

              </article>

            ))}

          </section>


          {/* ==================================
              ORDER SUMMARY
          ================================== */}

          <aside className="cart-summary">

            <h2>
              Order Summary
            </h2>


            <div className="summary-row">

              <span>
                Items
              </span>

              <span>
                {cartItems.reduce(
                  (total, item) =>
                    total + item.quantity,
                  0
                )}
              </span>

            </div>


            <div className="summary-row">

              <span>
                Subtotal
              </span>

              <span>
                KSh {cartTotal}
              </span>

            </div>


            <div className="summary-row total-row">

              <strong>
                Total
              </strong>

              <strong>
                KSh {cartTotal}
              </strong>

            </div>


            <Link
              to="/checkout"
              className="checkout-button"
            >
              Proceed to Checkout
            </Link>

          </aside>

        </div>

      </div>

    </div>
  )
}


export default Cart