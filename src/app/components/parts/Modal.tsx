import { clearCart } from '@/app/(feature)/cart/CartSlice';
import { closeModal } from '@/app/(feature)/modal/ModalSlice';
import React from 'react';
import { useDispatch } from 'react-redux';

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>買い物かごを全て空にしますか？</h4>
        <div className="btn-container">
          <button
            className="btn confirm-btn"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            OK
          </button>
          <button className="btn clear-btn" onClick={() => dispatch(closeModal())}>
            NG
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
