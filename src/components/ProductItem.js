import React from 'react'
import { useContext } from 'react';
import CartContext from '../store/cart-content';
import ItemForm from './ItemForm';

const ProductItem = (props) => {
    const cartCtx = useContext(CartContext);
    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
            image: props.image
        })
    } 

    return (
        <div className='col-4' key={props.id} id={props.id}>
        <img src={props.image} alt={props.name}/>
                <h4>{props.name}</h4>
                <p>${props.price}</p>
                <ItemForm onAddToCart={addToCartHandler} id={props.id} />
            </div>
      );
}
 
export default ProductItem;