import React from 'react';
import './Checkout.css';
import { getCartTotal } from './reducer';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

const Checkout = () => {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt=''
        />

        <div>
          <h2 className='checkout__title'>Shopping Cart</h2>
        </div>
      </div>
      <div className='checkout__right'>
        {/* Subtotal */}
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;