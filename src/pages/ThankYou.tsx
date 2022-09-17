import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { SignUpContext } from '../context/SignUpContext';

import {GiPartyPopper} from 'react-icons/gi';

function ThankYou() {
  const useShopContext = useContext(ShopContext);
  const useSignUpContext = useContext(SignUpContext);

  const { setDisplayThankYou, setItems, setTotal } = useShopContext;
  const { email } = useSignUpContext;

  const formatter = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
  });

  const onContinueShopping = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log('Continue Shopping');
    setDisplayThankYou(false);
    setItems({});
    setTotal(0);
  };

  return (
    <div className="w-screen h-screen grid place-content-center pb-24 container">
      <div className="min-w-fit max-w-2xl space-y-10 mb-8 text-center bg-white shadow-md rounded-3xl px-12 py-6">
        <div className="space-y-3">
          <div className="text-7xl w-fit mx-auto text-primary">
            <GiPartyPopper />
          </div>
          <h1 className="text-5xl font-bold font-serif text-gray-800">
            Thank You!
          </h1>
          <p className="text-slate-500">
            Your confirmation email has been sent to {email}
          </p>
        </div>
        <button
          onClick={(e) => onContinueShopping(e)}
          className="bg-primary hover:bg-primaryDark text-white rounded-md py-2 px-4"
        >
          Back to Shop
        </button>
      </div>
    </div>
  );
}

export default ThankYou;
