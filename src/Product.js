import React from 'react';
import './Product.css';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useStateValue } from './StateProvider';
const Product = ({ id, title, image, price, rating }) => {
  const [{ cart }, dispatch] = useStateValue();

  console.log('cart', cart);
  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(5)
            .fill()
            .map((_, i) =>
              i + 1 <= rating ? <StarIcon /> : <StarBorderIcon />
            )}
        </div>
      </div>
      <img src={image} alt='' />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
