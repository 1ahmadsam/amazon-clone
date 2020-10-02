import React from 'react';
import './CheckoutProduct.css';

import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useStateValue } from './StateProvider';
const CheckoutProduct = ({ id, image, title, price, rating, hideButton }) => {
  const [{ cart }, dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({ type: 'REMOVE_FROM_CART', id: id });
  };

  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct__image' src={image} alt={title} />
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='checkoutProduct__rating'>
          {Array(5)
            .fill()
            .map((_, i) =>
              i + 1 <= rating ? (
                <StarIcon key={i} />
              ) : (
                <StarBorderIcon key={i} />
              )
            )}
        </div>
        {!hideButton && (
          <button onClick={removeFromCart}>Remove from Cart</button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
