import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

import {
  useCart,
  type Category,
  type Meal,
} from '../context/CartContext'


function Menu() {
  // ==========================================
  // ACTIVE CATEGORY
  // ==========================================

  const [activeCategory, setActiveCategory] =
    useState<Category>('Breakfast')


  // ==========================================
  // CART
  // ==========================================

  const {
    addToCart,
    cartCount,
  } = useCart()


  // ==========================================
  // MENU ITEMS
  // ==========================================

  const meals: Meal[] = [

    // ------------------------------------------
    // BREAKFAST
    // ------------------------------------------

    {
      id: 1,
      name: 'Tea & Mandazi',
      category: 'Breakfast',
      price: 70,
      description:
        'Hot tea served with fresh mandazi.',
      emoji: '☕',
    },

    {
      id: 2,
      name: 'Chapati & Tea',
      category: 'Breakfast',
      price: 100,
      description:
        'Soft chapati served with hot tea.',
      emoji: '🥞',
    },

    {
      id: 3,
      name: 'Eggs & Toast',
      category: 'Breakfast',
      price: 120,
      description:
        'Fresh eggs served with toasted bread.',
      emoji: '🍳',
    },


    // ------------------------------------------
    // LUNCH
    // ------------------------------------------

    {
      id: 4,
      name: 'Beef & Rice',
      category: 'Lunch',
      price: 150,
      description:
        'Seasoned beef served with rice and vegetables.',
      emoji: '🍛',
    },

    {
      id: 5,
      name: 'Chicken & Rice',
      category: 'Lunch',
      price: 180,
      description:
        'Tender chicken served with rice and vegetables.',
      emoji: '🍗',
    },

    {
      id: 6,
      name: 'Beef Pilau',
      category: 'Lunch',
      price: 130,
      description:
        'Aromatic Kenyan pilau served with fresh kachumbari.',
      emoji: '🍚',
    },

    {
      id: 7,
      name: 'Chapati & Beans',
      category: 'Lunch',
      price: 100,
      description:
        'Soft chapati served with well-seasoned beans.',
      emoji: '🫘',
    },


    // ------------------------------------------
    // DINNER
    // ------------------------------------------

    {
      id: 8,
      name: 'Beef Stew & Ugali',
      category: 'Dinner',
      price: 160,
      description:
        'Beef stew served with fresh ugali and vegetables.',
      emoji: '🥘',
    },

    {
      id: 9,
      name: 'Chicken & Ugali',
      category: 'Dinner',
      price: 180,
      description:
        'Chicken served with ugali and fresh vegetables.',
      emoji: '🍗',
    },

    {
      id: 10,
      name: 'Vegetable Rice',
      category: 'Dinner',
      price: 120,
      description:
        'Rice cooked with fresh seasonal vegetables.',
      emoji: '🥗',
    },


    // ------------------------------------------
    // DRINKS
    // ------------------------------------------

    {
      id: 11,
      name: 'Fresh Juice',
      category: 'Drinks',
      price: 80,
      description:
        'Freshly prepared fruit juice.',
      emoji: '🧃',
    },

    {
      id: 12,
      name: 'Soda',
      category: 'Drinks',
      price: 70,
      description:
        'Chilled soft drink.',
      emoji: '🥤',
    },

    {
      id: 13,
      name: 'Mineral Water',
      category: 'Drinks',
      price: 50,
      description:
        'Cold bottled drinking water.',
      emoji: '💧',
    },
  ]


  // ==========================================
  // FILTER MEALS
  // ==========================================

  const availableMeals = meals.filter(
    (meal) =>
      meal.category === activeCategory
  )


  // ==========================================
  // PAGE
  // ==========================================

  return (
    <div className="menu-page">

      {/* ======================================
          HEADER
      ====================================== */}

      <header className="menu-header">

        <div>

          <p className="menu-label">
            JOOUST SMART CAFETERIA
          </p>

          <h1>
            Today's Menu
          </h1>

          <p className="menu-subtitle">
            Choose a category to see the meals
            currently available.
          </p>

        </div>

      </header>


      {/* ======================================
          CATEGORY BUTTONS
      ====================================== */}

      <div className="category-buttons">

        {(
          [
            'Breakfast',
            'Lunch',
            'Dinner',
            'Drinks',
          ] as Category[]
        ).map((category) => (

          <button
            key={category}
            className={
              activeCategory === category
                ? 'active-category'
                : ''
            }
            onClick={() =>
              setActiveCategory(category)
            }
          >
            {category}
          </button>

        ))}

      </div>


      {/* ======================================
          SELECTED CATEGORY
      ====================================== */}

      <section className="category-section">

        <div className="category-heading">

          <div>

            <p>
              AVAILABLE NOW
            </p>

            <h2>
              {activeCategory}
            </h2>

          </div>

          <span>
            {availableMeals.length} items available
          </span>

        </div>


        {/* ====================================
            MEAL GRID
        ==================================== */}

        <div className="meal-grid">

          {availableMeals.map((meal) => (

            <article
              className="meal-card"
              key={meal.id}
            >

              {/* MEAL IMAGE */}

              <div className="meal-image">

                <span>
                  {meal.emoji}
                </span>

              </div>


              {/* MEAL INFORMATION */}

              <div className="meal-information">

                <div className="meal-category">
                  {meal.category}
                </div>

                <h2>
                  {meal.name}
                </h2>

                <p>
                  {meal.description}
                </p>


                {/* PRICE + ADD BUTTON */}

                <div className="meal-bottom">

                  <strong>
                    KSh {meal.price}
                  </strong>

                  <button
                    className="add-button"
                    onClick={() =>
                      addToCart(meal)
                    }
                  >
                    + Add
                  </button>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* ======================================
          FLOATING CART
      ====================================== */}

      <Link
        to="/cart"
        className="floating-cart"
      >

        <span className="cart-icon">
          🛒
        </span>


        <span className="cart-text">

          <strong>
            Cart
          </strong>

          <small>
            {cartCount} item
            {cartCount !== 1 ? 's' : ''}
          </small>

        </span>


        {cartCount > 0 && (

          <span className="cart-count">
            {cartCount}
          </span>

        )}

      </Link>

    </div>
  )
}


// ==========================================
// DEFAULT EXPORT
// ==========================================

export default Menu