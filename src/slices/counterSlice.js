import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 1,
    productos: [],
  },

  reducers: {
    initialize: (state) => {
      state.value = 0;
    },

    increment: (state, action) => {
      
      const productId = action.payload;
      const productIndex = state.productos.findIndex(producto => producto.id === productId )
      if (productIndex >= 0) {

       const newState2 = state.productos.map(item => {
         if (item.id === productId) {
           return {
             ...item,
             cantidad: item.cantidad + 1
           }
         }
         return item

       })
        debugger
        return newState2

      }
     
      
      const newState = [
        ...state.productos,
        {
          id: productId, // product
          cantidad: 1
        }
      ]



      const xyz =  {...state,productos:[...newState]}  
      console.log(xyz)
      return xyz
    },

    decrement: (state, action) => {

      state.productos -= 1;
    },
  },
});

export const { initialize, increment, decrement } = counterSlice.actions;

export const selectCounter = (state) => state.counter.value;

export const selectProductos = (state) => state.counter.productos;


export default counterSlice.reducer;
