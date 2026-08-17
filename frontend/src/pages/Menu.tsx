import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

import blackCoffee from '../assets/food/breakfast/black-coffee.jpg'
import blackTea from '../assets/food/breakfast/black-tea.jpg'
import chapati from '../assets/food/breakfast/chapati.jpg'
import cocoa from '../assets/food/breakfast/cocoa.jpg'
import friedEggs from '../assets/food/breakfast/fried-eggs.jpg'
import mandazi from '../assets/food/breakfast/mandazi.jpg'
import whiteCoffee from '../assets/food/breakfast/white-coffee.jpg'
import whiteTea from '../assets/food/breakfast/white-tea.jpg'

// ==========================================================
// LUNCH IMAGES
// ==========================================================

import ugali from '../assets/food/lunch/ugali.jpg'
import rice from '../assets/food/lunch/rice.jpg'
import fries from '../assets/food/lunch/fries.jpg'
import pilau from '../assets/food/lunch/pilau.jpg'
import chapatiLunch from '../assets/food/lunch/chapati.jpg'

import beef from '../assets/food/lunch/beef.jpg'
import fish from '../assets/food/lunch/fish.jpg'
import cabbage from '../assets/food/lunch/cabbage.jpg'
import chicken from '../assets/food/lunch/chicken.jpg'
import kales from '../assets/food/lunch/kales.jpg'

import kienyeji from '../assets/food/lunch/kienyeji.jpg'
import greenGrams from '../assets/food/lunch/green-grams.jpg'
import beans from '../assets/food/lunch/beans.jpg'
import omena from '../assets/food/lunch/omena.jpg'
import potatoes from '../assets/food/lunch/potatoes.jpg'

// ==========================================================
// DINNER IMAGES
// ==========================================================

import dinnerUgali from '../assets/food/dinner/ugali.jpg'
import dinnerRice from '../assets/food/dinner/rice.jpg'
import dinnerFries from '../assets/food/dinner/fries.jpg'
import dinnerPilau from '../assets/food/dinner/pilau.jpg'
import dinnerChapati from '../assets/food/dinner/chapati.jpg'

import dinnerBeef from '../assets/food/dinner/beef.jpg'
import dinnerFish from '../assets/food/dinner/fish.jpg'
import dinnerCabbage from '../assets/food/dinner/cabbage.jpg'
import dinnerChicken from '../assets/food/dinner/chicken.jpg'
import dinnerKales from '../assets/food/dinner/kales.jpg'

import dinnerKienyeji from '../assets/food/dinner/kienyeji.jpg'
import dinnerGreenGrams from '../assets/food/dinner/green-grams.jpg'
import dinnerBeans from '../assets/food/dinner/beans.jpg'
import dinnerOmena from '../assets/food/dinner/omena.jpg'
import dinnerPotatoes from '../assets/food/dinner/potatoes.jpg'

// ==========================================================
// DRINKS IMAGES
// ==========================================================

// HOT DRINKS
import drinksBlackTea from '../assets/food/drinks/black-tea.jpg'
import drinksWhiteTea from '../assets/food/drinks/white-tea.jpg'
import drinksCocoa from '../assets/food/drinks/cocoa.jpg'
import drinksBlackCoffee from '../assets/food/drinks/black-coffee.jpg'
import drinksWhiteCoffee from '../assets/food/drinks/white-coffee.jpg'

// COLD DRINKS
import freshJuice from '../assets/food/drinks/fresh-juice.jpg'
import soda from '../assets/food/drinks/soda.jpg'
import mineralWater from '../assets/food/drinks/mineral-water.jpg'

import {
  useCart,
  type Category,
  type Meal,
} from '../context/CartContext'


// ==========================================================
// MENU ITEM TYPE
// ==========================================================

type MenuItem = Meal & {
  section: string
  image?: string
}


// ==========================================================
// MENU COMPONENT
// ==========================================================

function Menu() {

  // ========================================================
  // ACTIVE CATEGORY
  // ========================================================

  const [activeCategory, setActiveCategory] =
    useState<Category>('Breakfast')


  // ========================================================
  // TYPEWRITER EFFECT
  // ========================================================

  const fullText = "Today's Menu"

  const [typedText, setTypedText] = useState('')


  useEffect(() => {

    let currentIndex = 0

    const typingInterval = setInterval(() => {

      if (currentIndex < fullText.length) {

        setTypedText(
          fullText.substring(0, currentIndex + 1)
        )

        currentIndex++

      } else {

        clearInterval(typingInterval)

      }

    }, 100)


    return () => {
      clearInterval(typingInterval)
    }

  }, [])


  // ========================================================
  // CART
  // ========================================================

  const {
    addToCart,
    cartCount,
  } = useCart()


  // ========================================================
  // MENU ITEMS
  // ========================================================

  const meals: MenuItem[] = [

    // ======================================================
    // BREAKFAST — TEA & COFFEE
    // ======================================================

    {
      id: 1,
      name: 'Black Tea',
      category: 'Breakfast',
      section: 'Tea & Coffee',
      price: 30,
      description: 'Freshly prepared hot black tea.',
      emoji: '☕',
      image: blackTea,
    },

    {
      id: 2,
      name: 'White Tea',
      category: 'Breakfast',
      section: 'Tea & Coffee',
      price: 40,
      description: 'Hot tea prepared with fresh milk.',
      emoji: '☕',
      image: whiteTea,
    },

    {
      id: 3,
      name: 'Cocoa',
      category: 'Breakfast',
      section: 'Tea & Coffee',
      price: 50,
      description: 'Warm and creamy cocoa drink.',
      emoji: '🥛',
      image: cocoa,
    },

    {
      id: 4,
      name: 'Black Coffee',
      category: 'Breakfast',
      section: 'Tea & Coffee',
      price: 40,
      description: 'Freshly brewed hot black coffee.',
      emoji: '☕',
      image: blackCoffee,
    },

    {
      id: 5,
      name: 'White Coffee',
      category: 'Breakfast',
      section: 'Tea & Coffee',
      price: 50,
      description: 'Hot coffee prepared with fresh milk.',
      emoji: '☕',
      image: whiteCoffee,
    },


    // ======================================================
    // BREAKFAST — ACCOMPANIMENTS
    // ======================================================

    {
      id: 6,
      name: 'Mandazi',
      category: 'Breakfast',
      section: 'Accompaniments',
      price: 20,
      description: 'Freshly prepared soft mandazi.',
      emoji: '🥯',
      image: mandazi,
    },

    {
      id: 7,
      name: 'Chapati',
      category: 'Breakfast',
      section: 'Accompaniments',
      price: 30,
      description: 'Soft and freshly prepared chapati.',
      emoji: '🫓',
      image: chapati,
    },

    {
      id: 8,
      name: 'Fried Eggs',
      category: 'Breakfast',
      section: 'Accompaniments',
      price: 40,
      description: 'Fresh eggs fried to perfection.',
      emoji: '🍳',
      image: friedEggs,
    },


    // ======================================================
// LUNCH — MAIN MEALS
// ======================================================

{
  id: 9,
  name: 'Ugali',
  category: 'Lunch',
  section: 'Main Meals',
  price: 30,
  description:
    'Freshly prepared soft Kenyan ugali.',
  emoji: '🍚',
  image: ugali,
},

{
  id: 10,
  name: 'Rice',
  category: 'Lunch',
  section: 'Main Meals',
  price: 40,
  description:
    'Freshly cooked plain rice.',
  emoji: '🍚',
  image: rice,
},

{
  id: 11,
  name: 'Fries',
  category: 'Lunch',
  section: 'Main Meals',
  price: 80,
  description:
    'Crispy golden fries prepared fresh.',
  emoji: '🍟',
  image: fries,
},

{
  id: 12,
  name: 'Pilau',
  category: 'Lunch',
  section: 'Main Meals',
  price: 80,
  description:
    'Aromatic Kenyan pilau prepared with special spices.',
  emoji: '🍛',
  image: pilau,
},

{
  id: 13,
  name: 'Chapati',
  category: 'Lunch',
  section: 'Main Meals',
  price: 30,
  description:
    'Soft and freshly prepared chapati.',
  emoji: '🫓',
  image: chapatiLunch,
},


// ======================================================
// LUNCH — ACCOMPANIMENTS
// ======================================================

{
  id: 14,
  name: 'Beef',
  category: 'Lunch',
  section: 'Accompaniments',
  price: 100,
  description:
    'Well-seasoned tender beef stew.',
  emoji: '🥩',
  image: beef,
},

{
  id: 15,
  name: 'Fish',
  category: 'Lunch',
  section: 'Accompaniments',
  price: 120,
  description:
    'Freshly prepared fish served with a tasty seasoning.',
  emoji: '🐟',
  image: fish,
},

{
  id: 16,
  name: 'Cabbage',
  category: 'Lunch',
  section: 'Accompaniments',
  price: 30,
  description:
    'Freshly cooked cabbage.',
  emoji: '🥬',
  image: cabbage,
},

{
  id: 17,
  name: 'Chicken',
  category: 'Lunch',
  section: 'Accompaniments',
  price: 120,
  description:
    'Tender chicken prepared with flavorful seasoning.',
  emoji: '🍗',
  image: chicken,
},

{
  id: 18,
  name: 'Kales',
  category: 'Lunch',
  section: 'Accompaniments',
  price: 30,
  description:
    'Freshly cooked sukuma wiki.',
  emoji: '🥬',
  image: kales,
},

{
  id: 19,
  name: 'Kienyeji',
  category: 'Lunch',
  section: 'Accompaniments',
  price: 100,
  description:
    'Traditional Kenyan kienyeji vegetables.',
  emoji: '🥬',
  image: kienyeji,
},

{
  id: 20,
  name: 'Green Grams',
  category: 'Lunch',
  section: 'Accompaniments',
  price: 50,
  description:
    'Well-cooked green grams prepared with fresh ingredients.',
  emoji: '🫘',
  image: greenGrams,
},

{
  id: 21,
  name: 'Beans',
  category: 'Lunch',
  section: 'Accompaniments',
  price: 50,
  description:
    'Well-seasoned and freshly cooked beans.',
  emoji: '🫘',
  image: beans,
},

{
  id: 22,
  name: 'Omena',
  category: 'Lunch',
  section: 'Accompaniments',
  price: 100,
  description:
    'Traditional Kenyan omena prepared with fresh ingredients.',
  emoji: '🐟',
  image: omena,
},

{
  id: 23,
  name: 'Potatoes',
  category: 'Lunch',
  section: 'Accompaniments',
  price: 50,
  description:
    'Freshly cooked potatoes seasoned to taste.',
  emoji: '🥔',
  image: potatoes,
},


   // ======================================================
// DINNER — MAIN MEALS
// ======================================================

{
  id: 24,
  name: 'Ugali',
  category: 'Dinner',
  section: 'Main Meals',
  price: 30,
  description:
    'Freshly prepared soft Kenyan ugali.',
  emoji: '🍚',
  image: dinnerUgali,
},

{
  id: 25,
  name: 'Rice',
  category: 'Dinner',
  section: 'Main Meals',
  price: 40,
  description:
    'Freshly cooked plain rice.',
  emoji: '🍚',
  image: dinnerRice,
},

{
  id: 26,
  name: 'Fries',
  category: 'Dinner',
  section: 'Main Meals',
  price: 80,
  description:
    'Crispy golden fries prepared fresh.',
  emoji: '🍟',
  image: dinnerFries,
},

{
  id: 27,
  name: 'Pilau',
  category: 'Dinner',
  section: 'Main Meals',
  price: 80,
  description:
    'Aromatic Kenyan pilau prepared with special spices.',
  emoji: '🍛',
  image: dinnerPilau,
},

{
  id: 28,
  name: 'Chapati',
  category: 'Dinner',
  section: 'Main Meals',
  price: 30,
  description:
    'Soft and freshly prepared chapati.',
  emoji: '🫓',
  image: dinnerChapati,
},


// ======================================================
// DINNER — ACCOMPANIMENTS
// ======================================================

{
  id: 29,
  name: 'Beef',
  category: 'Dinner',
  section: 'Accompaniments',
  price: 100,
  description:
    'Well-seasoned tender beef stew.',
  emoji: '🥩',
  image: dinnerBeef,
},

{
  id: 30,
  name: 'Fish',
  category: 'Dinner',
  section: 'Accompaniments',
  price: 120,
  description:
    'Freshly prepared fish served with tasty seasoning.',
  emoji: '🐟',
  image: dinnerFish,
},

{
  id: 31,
  name: 'Cabbage',
  category: 'Dinner',
  section: 'Accompaniments',
  price: 30,
  description:
    'Freshly cooked cabbage.',
  emoji: '🥬',
  image: dinnerCabbage,
},

{
  id: 32,
  name: 'Chicken',
  category: 'Dinner',
  section: 'Accompaniments',
  price: 120,
  description:
    'Tender chicken prepared with flavorful seasoning.',
  emoji: '🍗',
  image: dinnerChicken,
},

{
  id: 33,
  name: 'Kales',
  category: 'Dinner',
  section: 'Accompaniments',
  price: 30,
  description:
    'Freshly cooked sukuma wiki.',
  emoji: '🥬',
  image: dinnerKales,
},

{
  id: 34,
  name: 'Kienyeji',
  category: 'Dinner',
  section: 'Accompaniments',
  price: 100,
  description:
    'Traditional Kenyan kienyeji vegetables.',
  emoji: '🥬',
  image: dinnerKienyeji,
},

{
  id: 35,
  name: 'Green Grams',
  category: 'Dinner',
  section: 'Accompaniments',
  price: 50,
  description:
    'Well-cooked green grams prepared with fresh ingredients.',
  emoji: '🫘',
  image: dinnerGreenGrams,
},

{
  id: 36,
  name: 'Beans',
  category: 'Dinner',
  section: 'Accompaniments',
  price: 50,
  description:
    'Well-seasoned and freshly cooked beans.',
  emoji: '🫘',
  image: dinnerBeans,
},

{
  id: 37,
  name: 'Omena',
  category: 'Dinner',
  section: 'Accompaniments',
  price: 100,
  description:
    'Traditional Kenyan omena prepared with fresh ingredients.',
  emoji: '🐟',
  image: dinnerOmena,
},

{
  id: 38,
  name: 'Potatoes',
  category: 'Dinner',
  section: 'Accompaniments',
  price: 50,
  description:
    'Freshly cooked potatoes seasoned to taste.',
  emoji: '🥔',
  image: dinnerPotatoes,
},


   // ======================================================
// DRINKS — HOT DRINKS
// ======================================================

{
  id: 39,
  name: 'Black Tea',
  category: 'Drinks',
  section: 'Hot Drinks',
  price: 30,
  description:
    'Freshly prepared hot black tea.',
  emoji: '☕',
  image: drinksBlackTea,
},

{
  id: 40,
  name: 'White Tea',
  category: 'Drinks',
  section: 'Hot Drinks',
  price: 40,
  description:
    'Hot tea prepared with fresh milk.',
  emoji: '☕',
  image: drinksWhiteTea,
},

{
  id: 41,
  name: 'Cocoa',
  category: 'Drinks',
  section: 'Hot Drinks',
  price: 50,
  description:
    'Warm and creamy cocoa drink.',
  emoji: '🥛',
  image: drinksCocoa,
},

{
  id: 42,
  name: 'Black Coffee',
  category: 'Drinks',
  section: 'Hot Drinks',
  price: 40,
  description:
    'Freshly brewed hot black coffee.',
  emoji: '☕',
  image: drinksBlackCoffee,
},

{
  id: 43,
  name: 'White Coffee',
  category: 'Drinks',
  section: 'Hot Drinks',
  price: 50,
  description:
    'Hot coffee prepared with fresh milk.',
  emoji: '☕',
  image: drinksWhiteCoffee,
},


// ======================================================
// DRINKS — COLD DRINKS
// ======================================================

{
  id: 44,
  name: 'Fresh Juice',
  category: 'Drinks',
  section: 'Cold Drinks',
  price: 80,
  description:
    'Freshly prepared fruit juice.',
  emoji: '🧃',
  image: freshJuice,
},

{
  id: 45,
  name: 'Soda',
  category: 'Drinks',
  section: 'Cold Drinks',
  price: 70,
  description:
    'Chilled soft drink.',
  emoji: '🥤',
  image: soda,
},

{
  id: 46,
  name: 'Mineral Water',
  category: 'Drinks',
  section: 'Cold Drinks',
  price: 50,
  description:
    'Cold bottled drinking water.',
  emoji: '💧',
  image: mineralWater,
},

  ]


  // ========================================================
  // FILTER CURRENT CATEGORY
  // ========================================================

  const availableMeals = meals.filter(
    (meal) =>
      meal.category === activeCategory
  )


  // ========================================================
  // GET UNIQUE SECTIONS
  // ========================================================

  const sections = [
    ...new Set(
      availableMeals.map(
        (meal) => meal.section
      )
    ),
  ]


  // ========================================================
  // PAGE
  // ========================================================

  return (

    <div className="menu-page">


      {/* ====================================================
          TOP NAVIGATION
      ==================================================== */}

      <nav className="menu-top-nav">

        <Link
          to="/"
          className="menu-home-link"
        >
          ← Home
        </Link>


        <div className="menu-nav-brand">
          JOOUST SMART CAFETERIA
        </div>


        <Link
          to="/cart"
          className="menu-nav-cart"
        >
          🛒 Cart
        </Link>

      </nav>


      {/* ====================================================
          MENU HEADER
      ==================================================== */}

      <header className="menu-header">

        <p className="menu-label">
          JOOUST SMART CAFETERIA
        </p>


        <h1 className="menu-title">

          {typedText}

          <span className="menu-cursor">
            |
          </span>

        </h1>


        <p className="menu-subtitle">
          Choose a category to see the available meals.
        </p>

      </header>


      {/* ====================================================
          CATEGORY NAVIGATION
      ==================================================== */}

      <div className="category-navigation">

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


      {/* ====================================================
          SELECTED CATEGORY
      ==================================================== */}

      <main className="menu-content">


        {/* ==================================================
            CATEGORY INTRO
        ================================================== */}

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


        {/* ==================================================
            MENU SECTIONS
        ================================================== */}

        {sections.map((section) => {

          const sectionMeals =
            availableMeals.filter(
              (meal) =>
                meal.section === section
            )


          return (

           <section
  className={`menu-category-section ${
    section === 'Accompaniments'
      ? 'accompaniments-section'
      : ''
  }`}
  key={section}
>
              <div className="menu-section-title">

                <h3>
                  {section}
                </h3>

                <span></span>

              </div>


              {/* ============================================
                  MEAL GRID
              ============================================ */}

              <div className="meal-grid">

                {sectionMeals.map((meal) => (

                  <article
                    className="meal-card"
                    key={meal.id}
                  >


                    {/* ======================================
                        FOOD IMAGE
                    ====================================== */}

                    <div className="meal-image">

                      {meal.image ? (

                        <img
                          src={meal.image}
                          alt={meal.name}
                        />

                      ) : (

                        <span>
                          {meal.emoji}
                        </span>

                      )}

                    </div>


                    {/* ======================================
                        MEAL INFORMATION
                    ====================================== */}

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


                      {/* ==================================
                          PRICE + ADD
                      ================================== */}

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

          )

        })}

      </main>


      {/* ====================================================
          FLOATING CART
      ==================================================== */}

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


// ==========================================================
// DEFAULT EXPORT
// ==========================================================

export default Menu