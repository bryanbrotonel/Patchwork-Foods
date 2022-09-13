import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { SignUpContextProvider } from './context/SignUpContext';
import { ShopContextProvider } from './context/ShopContext';

import './index.scss';

const root = createRoot(document.getElementById('app')!);

root.render(
  <SignUpContextProvider>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </SignUpContextProvider>
);
