/**
 * @jest-environment jsdom
 */

import React from 'react';
import { expect } from '@jest/globals';
import { render } from '@testing-library/react';
import SignUp from '../pages/SignUp';

describe('Sign Up', () => {
  test('Verify Email', async () => {
    const signUp = render(<SignUp />);
    const emailInput = signUp.getByTestId('email') as HTMLInputElement;

    expect(emailInput.value).toMatch(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  });

  test('Verify Canadian Postal Code', async () => {
    const signUp = render(<SignUp />);
    const postalCodeInput = signUp.getByTestId(
      'postalCode'
    ) as HTMLInputElement;

    expect(postalCodeInput.value).toMatch(
      /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i
    );
  });
});
