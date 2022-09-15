import React, { useContext } from 'react';
import { ShopContext } from './context/ShopContext';
import Shop from './pages/Shop';
import SignUp from './pages/SignUp';

function App() {
  const useShopContext = useContext(ShopContext);

  return (
    <div className="h-full w-full bg-background">
     {useShopContext.displayShop ? <Shop /> : <SignUp />}
    </div>
  );
}

export default App;
