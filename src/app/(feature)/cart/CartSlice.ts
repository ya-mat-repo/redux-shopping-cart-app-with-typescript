import { createSlice } from '@reduxjs/toolkit';
import { cartItems } from './cartItems';

const initialState = {
  cartItems: cartItems,
  amount: cartItems.length,
  total: 5000,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
      state.total = 0;
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
      state.amount = state.cartItems.length;
    },
    increase: (state, action) => {
      const targetItem = state.cartItems.find((item) => item.id === action.payload);
      if (targetItem?.amount) {
        targetItem.amount += 1;
      }
    },
    decrease: (state, action) => {
      const targetItem = state.cartItems.find((item) => item.id === action.payload);
      if (targetItem?.amount) {
        targetItem.amount -= 1;
      }
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * Number(item.price);
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
