import React, { useContext } from 'react';
import { ShopContext } from './context/ShopContext';
import Shop from './pages/Shop';
import SignUp from './pages/SignUp';

function App() {
  const useShopContext = useContext(ShopContext);

  return useShopContext.displayShop ? <Shop /> : <SignUp />;
}

export default App;
