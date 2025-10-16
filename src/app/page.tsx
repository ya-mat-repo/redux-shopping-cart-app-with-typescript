'use client';

import { useEffect } from 'react';
import CartContainers from './(feature)/cart/CartContainers';
import Navbar from './components/parts/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals } from './(feature)/cart/CartSlice';
import Modal from './components/parts/Modal';

export default function Home() {
  const { cartItems } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
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
