import React, { useContext, useEffect } from 'react';
import { ShopContext } from './context/ShopContext';
import Shop from './pages/Shop';
import SignUp from './pages/SignUp';
import ThankYou from './pages/ThankYou';

function App() {
  const useShopContext = useContext(ShopContext);
  const { displayShop, displayThankYou } = useShopContext;

  return (
    <div className="h-full w-full bg-background">
      {!displayShop ? <SignUp /> : displayThankYou ? <ThankYou /> : <Shop />}
    </div>
  );
}

export default App;
