'use client';

import { useEffect } from 'react';
import CartContainers from './(feature)/cart/CartContainers';
import Navbar from './components/parts/Navbar';
import { calculateTotals } from './(feature)/cart/CartSlice';
import Modal from './components/parts/Modal';
import { useAppDispatch, useAppSelector } from './hooks/store';

export default function Home() {
  const { cartItems } = useAppSelector((state) => state.cart);
  const { isOpen } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainers />
    </main>
  );
}
