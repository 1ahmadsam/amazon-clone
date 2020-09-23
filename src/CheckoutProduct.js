import React from 'react';
import './CheckoutProduct.css';

import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
const CheckoutProduct = ({ id, image, title, price, rating }) => {
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
              i + 1 <= rating ? <StarIcon /> : <StarBorderIcon />
            )}
        </div>
        <button>Remove from Cart</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
