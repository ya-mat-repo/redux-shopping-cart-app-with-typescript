'use client';

import React from 'react';
import { CartIcon } from './HeroIcons';
import { useAppSelector } from '@/app/hooks/store';

const Navbar = () => {
  const { amount } = useAppSelector((store) => store.cart);
  return (
    <nav>
      <div className="nav-center">
        <h3>Udummy</h3>
        <div className="nav-container">
          <CartIcon />
        </div>
        <div className="amount-container">
          <p className="total-amount">{amount}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
