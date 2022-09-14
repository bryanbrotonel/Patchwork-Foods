/**
 * @jest-environment jsdom
 */

import React from 'react';
import { expect } from '@jest/globals';
import { act, render, fireEvent } from '@testing-library/react';
import SignUpForm from '../components/SignUpForm';
import '@testing-library/jest-dom/extend-expect';

test('Verify form input error message', async () => {
  const signUp = render(<SignUpForm />);

  const emailInput = (await signUp.getByTestId('email')) as HTMLInputElement;
  const postalCodeInput = (await signUp.getByTestId(
    'postalCode'
  )) as HTMLInputElement;
  const submitButton = await signUp.getByTestId('submit');

  act(() => {
    submitButton.click();
  });

  var errorMessage = signUp.getAllByTestId('inputErrorMessage');

  expect(errorMessage.length).toBe(2);
  expect(errorMessage[0].textContent).toBe('Email is required');
  expect(errorMessage[1].textContent).toBe('Postal Code is required');

  act(() => {
    fireEvent.change(emailInput, { target: { value: 'badEmail' } });
    fireEvent.change(postalCodeInput, { target: { value: 'A1A1A1A' } });
    fireEvent(submitButton, new MouseEvent('click', { bubbles: true }));
  });

  errorMessage = signUp.getAllByTestId('inputErrorMessage');

});
