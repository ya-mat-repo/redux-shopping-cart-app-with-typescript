'use client';

import { useDispatch, useSelector } from 'react-redux';
import CartItem from '@/app/(feature)/cart/CartItem';
import { cartItemProps, cartItems } from '@/app/(feature)/cart/cartItems';
import { openModal } from '../modal/ModalSlice';

const CartContainers = () => {
  const dispatch = useDispatch();
  const { amount, cartItems, total } = useSelector((store) => store.cart);
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>買い物かご</h2>
          <h4 className="empty-cart">何も入ってません・・・😿</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>買い物かご</h2>
      </header>
      <div>
        {cartItems.map((item: cartItemProps) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            合計 <span>{total}円</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
          全削除
        </button>
      </footer>
    </section>
  );
};

export default CartContainers;
