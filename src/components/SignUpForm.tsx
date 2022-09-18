import React, { useState, useContext } from 'react';
import { SignUpContext } from '../context/SignUpContext';
import { ShopContext } from '../context/ShopContext';

function SignUpForm() {
  const useSignUpContext = useContext(SignUpContext);
  const useShopContext = useContext(ShopContext);

  const { email, postalCode, setEmail, setPostalCode } = useSignUpContext;
  const { setDisplayShop } = useShopContext;

  const [emailInput, setEmailInput] = useState(email);
  const [postalCodeInput, setPostalCodeInput] = useState(postalCode);
  const [emailError, setEmailError] = useState('');
  const [postalCodeError, setPostalCodeError] = useState('');

  const onFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const validForm = validateForm(emailInput, postalCodeInput);
    if (validForm) {
      setEmail(emailInput);
      setPostalCode(postalCodeInput);

      console.log('email', emailInput);
      console.log('postalCode', postalCodeInput);
      setDisplayShop(true);
    }
  };

  const validateForm = (emailInput: String, postalCodeInput: String) => {
    let emailErrorMessage = '';
    let postalCodeErrorMessage = '';

    // Validate email
    if (emailInput === '') {
      emailErrorMessage = 'Email is required';
    } else if (!emailInput.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      emailErrorMessage = 'Email is invalid';
    }

    // Validate postal code
    if (postalCodeInput === '') {
      postalCodeErrorMessage = 'Postal Code is required';
    } else if (
      !postalCodeInput.match(
        /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i
      )
    ) {
      postalCodeErrorMessage = 'Postal Code is invalid';
    }

    if (emailErrorMessage || postalCodeErrorMessage) {
      setEmailError(emailErrorMessage);
      setPostalCodeError(postalCodeErrorMessage);
      return false;
    }

    return true;
  };

  return (
    <div>
      <h1 className="font-serif font-bold text-5xl text-primary mb-12">
        Sign Up
      </h1>
      <form
        onSubmit={(e) => onFormSubmit(e)}
        className="w-96 flex flex-col gap-6"
      >
        <input
          className={`inputField ${emailError && 'border-red-500'}`}
          value={emailInput}
          placeholder="Email"
          onChange={(event) => setEmailInput(event.target.value)}
          type="email"
          data-testid="email"
        />
        <input
          className={`inputField ${postalCodeError && 'border-red-500'}`}
          value={postalCodeInput}
          placeholder="Postal Code"
          onChange={(event) => setPostalCodeInput(event.target.value)}
          type="text"
          data-testid="postalCode"
        />
        <div className="h-12">
          <div className="text-red-500">
            {emailError !== '' && <p>{emailError}</p>}
            {postalCodeError !== '' && <p>{postalCodeError}</p>}
          </div>
        </div>
        <input
          type="submit"
          value="Sign Up"
          onClick={(e) => onFormSubmit(e)}
          className="py-2 px-3 font-sans font-medium text-xl bg-primary hover:bg-primaryDark text-white rounded-lg hover:cursor-pointer"
          data-testid="submit"
        />
      </form>
    </div>
  );
}

export default SignUpForm;
