import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "cart",
  initialState: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload; //recibe toda la info de product
      const productInCartIndex = state.findIndex(
        (item) => item.id === newProduct.id
      );

      if (productInCartIndex >= 0) {
        const newState = state.map((item) => {
          if (item.id === newProduct.id) {
            if (item.quantity <= 9) {
              return {
                ...item,
                quantity: item.quantity + 1,
              };
            }
          }
          return item;
        });

        localStorage.setItem("cart", JSON.stringify(newState));
        return newState;
      }

      const newItem = [
        ...state,
        {
          ...action.payload,
          quantity: 1,
        },
      ];

      localStorage.setItem("cart", JSON.stringify(newItem));
      return newItem;
    },

    removeFromCart: (state, action) => {
     
      const productid = action.payload; //recibe id de producto

      const newState = state.map((item) => {
        if (item.id === productid) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return false;
          }
        }
        return item;
      });

      const newStateFiltered = newState.filter((item) => item !== false);

      localStorage.setItem("cart", JSON.stringify(newStateFiltered));
      return newStateFiltered;
    },

    deleteFromCart: (state,action) => {
      const productid = action.payload; //recibe id de producto
     
      const newState = state.filter((item) => item.id !== productid);
     
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;

    },
    resetCart:(state,action)=>{
      localStorage.setItem("cart",[]);
      return initialState; 
    }
  },
  
});

export const { addToCart, removeFromCart, deleteFromCart, resetCart } = counterSlice.actions;
export const counterProductos = (state) => state.cart;
export default counterSlice.reducer;
