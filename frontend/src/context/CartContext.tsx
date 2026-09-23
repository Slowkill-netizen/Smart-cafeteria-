import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";


// ======================================================
// TYPES
// ======================================================

export type Category =
  | "Breakfast"
  | "Lunch"
  | "Dinner"
  | "Drinks";


export type Meal = {
  id: number;
  name: string;
  category: Category;
  price: number;
  description: string;
  emoji: string;

  // Optional food image
  image?: string;
};


export type CartItem = Meal & {
  quantity: number;
};


// ======================================================
// CONTEXT TYPE
// ======================================================

type CartContextType = {
  cartItems: CartItem[];
  cartCount: number;
  cartTotal: number;

  addToCart: (meal: Meal) => void;
  removeFromCart: (mealId: number) => void;
  increaseQuantity: (mealId: number) => void;
  decreaseQuantity: (mealId: number) => void;
  clearCart: () => void;
};


// ======================================================
// CREATE CONTEXT
// ======================================================

const CartContext =
  createContext<CartContextType | undefined>(
    undefined
  );


// ======================================================
// CART PROVIDER
// ======================================================

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [cartItems, setCartItems] =
    useState<CartItem[]>([]);


  // ====================================================
  // ADD TO CART
  // ====================================================

  const addToCart = (meal: Meal) => {

    setCartItems((currentItems) => {

      const existingItem =
        currentItems.find(
          (item) => item.id === meal.id
        );


      // ------------------------------------------------
      // ITEM ALREADY EXISTS
      // ------------------------------------------------

      if (existingItem) {

        return currentItems.map((item) =>
          item.id === meal.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );

      }


      // ------------------------------------------------
      // NEW ITEM
      // ------------------------------------------------

      return [
        ...currentItems,
        {
          ...meal,
          quantity: 1,
        },
      ];

    });

  };


  // ====================================================
  // REMOVE ITEM COMPLETELY
  // ====================================================

  const removeFromCart = (mealId: number) => {

    setCartItems((currentItems) =>
      currentItems.filter(
        (item) => item.id !== mealId
      )
    );

  };


  // ====================================================
  // INCREASE QUANTITY
  // ====================================================

  const increaseQuantity = (mealId: number) => {

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === mealId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );

  };


  // ====================================================
  // DECREASE QUANTITY
  // ====================================================

  const decreaseQuantity = (mealId: number) => {

    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === mealId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) => item.quantity > 0
        )
    );

  };


  // ====================================================
  // CLEAR CART
  // ====================================================

  const clearCart = () => {

    setCartItems([]);

  };


  // ====================================================
  // TOTAL NUMBER OF ITEMS
  // ====================================================

  const cartCount =
    cartItems.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );


  // ====================================================
  // TOTAL PRICE
  // ====================================================

  const cartTotal =
    cartItems.reduce(
      (total, item) =>
        total +
        item.price * item.quantity,
      0
    );


  // ====================================================
  // PROVIDER
  // ====================================================

  return (

    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        cartTotal,

        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >

      {children}

    </CartContext.Provider>

  );

}


// ======================================================
// CUSTOM HOOK
// ======================================================

export function useCart() {

  const context =
    useContext(CartContext);


  if (!context) {

    throw new Error(
      "useCart must be used inside CartProvider"
    );

  }


  return context;

}