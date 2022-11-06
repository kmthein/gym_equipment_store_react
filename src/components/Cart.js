import React from 'react';
import { useContext } from 'react';
import CartContext from '../store/cart-content';
import Modal from './Modal';
import ProductItem from './ProductItem';
import classes from './Cart.module.css'

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const cartAddItemHandler = (item) => {
        cartCtx.addItem({...item, amount: 1});
    }

    const cartRemoveItemHandler = (id) => {
        cartCtx.removeItem(id);
      };

    const cartItem = (
        <ul className='cart-item'>
            {cartCtx.items.map((item) => (
                <li className={classes['cart-item']}>
                <div>
                <img src={item.image} alt={item.name} className='cart-img' />
                  <span>{item.name}</span>
                  <div className={classes.summary}>
                    <span className={classes.price}>${item.price}</span>
                    <span className={classes.amount}>x {item.amount}</span>
                  </div>
                </div>
                <div className={classes.actions}>
                  <button onClick={cartRemoveItemHandler.bind(null, item.id)}>−</button>
                  <button onClick={cartAddItemHandler.bind(null, item)}>+</button>
                </div>
              </li>
            ))}
        </ul>
    )
    
    return (
        <Modal onHideCart={props.onHideCart}>
        <div>
            {cartItem}
            <div className='total-amount'>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
                </div>
                <div className='cart-actions'>
                <button onClick={props.onHideCart}>Close</button>
                <button>Order</button>
            </div>
        </div>
        </Modal>
    )
} 

export default Cart;