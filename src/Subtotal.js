import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
const Subtotal = () => {
  const [{ cart }, dispatch] = useStateValue();

  const total = (a, b) => a + b;
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({cart?.length} items):{' '}
              <strong>
                $
                {cart?.length
                  ? cart?.reduce((a, { price }) => a + price, 0)
                  : 0}
              </strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0} // Part of the homework
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
