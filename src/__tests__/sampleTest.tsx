/**
 * @jest-environment jsdom
 */

import React from 'react';
import { expect } from '@jest/globals';
import { render } from '@testing-library/react';
import SignUp from '../pages/SignUp';

test('test', async () => {
  const test = await render(<SignUp />);
  const element = test.getByText('Sign Up');
  expect(element).toBeTruthy();
});
