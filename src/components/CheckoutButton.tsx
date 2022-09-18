import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { SignUpContext } from '../context/SignUpContext';

import { RiLoader4Line } from 'react-icons/ri';

function CheckoutButton(props: { disabled: boolean }) {
  const [sendingEmail, setSendingEmail] = React.useState(false);

  const { disabled } = props;
  const useShopContext = useContext(ShopContext);
  const useSignInContext = useContext(SignUpContext);

  const { items, total, setDisplayThankYou } = useShopContext;
  const { email, postalCode } = useSignInContext;

  const processCheckout = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSendingEmail(true);
    sendOrderEmail().then(() => {
      setDisplayThankYou(true);
      setSendingEmail(false);
    });
  };

  const sendOrderEmail = async () => {
    await fetch('/api/.netlify/functions/orderEmail', {
      method: 'POST',
      body: JSON.stringify({ payload: { items, total, email, postalCode } }),
    });
  };

  return (
    <button
      onClick={(e) => processCheckout(e)}
      disabled={disabled || sendingEmail}
      className="w-full rounded p-2 py-3 font-medium bg-primary hover:bg-primaryDark disabled:bg-zinc-400 text-white"
    >
      {sendingEmail ? (
        <span className="space-x-1">
          <div className="inline-block align-middle">
            <RiLoader4Line className="animate-spin text-2xl" />
          </div>
          <span>Processing...</span>
        </span>
      ) : (
        'Checkout'
      )}
    </button>
  );
}

export default CheckoutButton;
