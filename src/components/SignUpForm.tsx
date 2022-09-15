import React, { useState, useContext } from 'react';
import { SignUpContext } from '../context/SignUpContext';
import { ShopContext } from '../context/ShopContext';

function SignUpForm() {
  const [emailInput, setEmailInput] = useState('');
  const [postalCodeInput, setPostalCodeInput] = useState('');
  const [emailError, setEmailError] = useState<String[]>([]);

  const useSignUpContext = useContext(SignUpContext);
  const useShopContext = useContext(ShopContext);

  const { setEmail, setPostalCode } = useSignUpContext;
  const { setDisplayShop } = useShopContext;

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
      <h1 className="font-serif font-bold text-5xl text-primary mb-12">
        Sign Up
      </h1>
      <form className="w-96 flex flex-col gap-6">
        <input
          className="bg-gray-100 border border-gray-200 p-3 rounded-md"
          value={emailInput}
          placeholder="Email"
          onChange={(event) => setEmailInput(event.target.value)}
          type="email"
          name="email"
          data-testid="email"
          id="email"
        />
        <input
          className="bg-gray-100 border border-gray-200 p-3 rounded-md"
          value={postalCodeInput}
          placeholder="Postal Code"
          onChange={(event) => setPostalCodeInput(event.target.value)}
          type="text"
          data-testid="postalCode"
        />
        <div className='h-12'>
          {emailError.map((error, index) => (
            <p
              className="text-red-500"
              key={index}
              data-testid="inputErrorMessage"
            >
              {error}
            </p>
          ))}
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
