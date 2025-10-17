'use client';

import CartItem from '@/app/(feature)/cart/CartItem';
import { cartItemProps } from '@/app/(feature)/cart/cartItems';
import { openModal } from '../modal/ModalSlice';
import { useAppDispatch, useAppSelector } from '@/app/hooks/store';

const CartContainers = () => {
  const dispatch = useAppDispatch();
  const { amount, cartItems, total } = useAppSelector((store) => store.cart);
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
            合計 <span>{total.toLocaleString()}円</span>
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
