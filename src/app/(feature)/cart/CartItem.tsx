import { cartItemProps } from './cartItems';
import Image from 'next/image';
import { MinusIcon, PlusIcon } from '@/app/components/parts/HeroIcons';
import { decrease, increase, removeItem } from './CartSlice';
import { useAppDispatch } from '@/app/hooks/store';

const CartItem = ({ id, img, title, price, amount }: cartItemProps) => {
  const dispatch = useAppDispatch();
  return (
    <article className="cart-item">
      <Image src={img} alt="" width={200} height={200} priority={true} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">{Number(price).toLocaleString()}円</h4>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          削除
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={() => dispatch(increase(id))}>
          <PlusIcon />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease(id));
          }}
        >
          <MinusIcon />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
