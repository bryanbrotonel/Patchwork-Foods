import React, { useState, useContext } from 'react';
import { SignUpContext } from '../context/SignUpContext';
import {ShopContext} from '../context/ShopContext'

function SignUpForm() {
  const [emailInput, setEmailInput] = useState('');
  const [postalCodeInput, setPostalCodeInput] = useState('');
  const [emailError, setEmailError] = useState<String[]>([]);

  const useSignUpContext = useContext(SignUpContext);
  const useShopContext = useContext(ShopContext);

  const { setEmail, setPostalCode } = useSignUpContext;
  const {setDisplayShop} = useShopContext;

  const onFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const validForm = validateForm(emailInput, postalCodeInput);
    if (validForm) {
      setEmail(emailInput);
      setPostalCode(postalCodeInput);
      setDisplayShop(true);
    }
  };

  const validateForm = (emailInput: String, postalCodeInput: String) => {
    let errors = [];

    // Validate email
    if (emailInput === '') {
      errors.push('Email is required');
    } else if (!emailInput.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      errors.push('Email is invalid');
    }

    // Validate postal code
    if (postalCodeInput === '') {
      errors.push('Postal Code is required');
    } else if (
      !postalCodeInput.match(
        /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i
      )
    ) {
      errors.push('Postal Code is invalid');
    }

    if (errors.length > 0) {
      setEmailError(errors);
      return false;
    } else {
      return true;
    }
  };

  return (
    <div>
      <form className="space-x-4">
        <input
          className="border border-black px-2"
          value={emailInput}
          placeholder="Email"
          onChange={(event) => setEmailInput(event.target.value)}
          type="email"
          name="email"
          data-testid="email"
          id="email"
        />
        <input
          className="border border-black px-2"
          value={postalCodeInput}
          placeholder="Postal Code"
          onChange={(event) => setPostalCodeInput(event.target.value)}
          type="text"
          data-testid="postalCode"
        />
        <input
          type="submit"
          value="Sign Up"
          onClick={(e) => onFormSubmit(e)}
          className="border border-black py-1 px-3 hover:cursor-pointer hover:bg-black hover:text-white"
        />
      </form>
      <div>
        {emailError.map((error, index) => (
          <p key={index}>{error}</p>
        ))}
      </div>
    </div>
  );
}

export default SignUpForm;
