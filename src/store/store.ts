import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/app/(feature)/cart/CartSlice';
import modalReducer from '@/app/(feature)/modal/ModalSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
