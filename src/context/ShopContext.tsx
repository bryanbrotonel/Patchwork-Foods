import React, { createContext, ReactNode, useState } from 'react';

interface AppContextInterface {
  cart: any[];
  setCart: (cart: any[]) => void;
  displayShop: boolean;
  setDisplayShop: (displayShop: boolean) => void;
}

const initialAppContext: AppContextInterface = {
  cart: [],
  setCart: () => {},
  displayShop: false,
  setDisplayShop: () => {},
};

export const ShopContext =
  createContext<AppContextInterface>(initialAppContext);

export const ShopContextProvider = (props: { children: ReactNode }) => {
  const [cart, setCart] = useState(initialAppContext.cart);
  const [displayShop, setDisplayShop] = useState(initialAppContext.displayShop);

  const cartContextValue = React.useMemo(() => ({ cart, setCart }), [cart]);
  const displayShopContextValue = React.useMemo(
    () => ({ displayShop, setDisplayShop }),
    [displayShop]
  );

  return (
    <ShopContext.Provider
      value={{ ...cartContextValue, ...displayShopContextValue }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};
