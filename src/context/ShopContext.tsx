import React, { createContext, ReactNode, useState } from 'react';

interface AppContextInterface {
  items: {};
  setItems: (items: {}) => void;
  total: number;
  setTotal: (total: number) => void;
  displayShop: boolean;
  setDisplayShop: (displayShop: boolean) => void;
}

const initialAppContext: AppContextInterface = {
  items: [],
  setItems: () => {},
  total: 0,
  setTotal: () => {},
  displayShop: true,
  setDisplayShop: () => {},
};

export const ShopContext =
  createContext<AppContextInterface>(initialAppContext);

export const ShopContextProvider = (props: { children: ReactNode }) => {
  const [items, setItems] = useState(initialAppContext.items);
  const [total, setTotal] = useState(initialAppContext.total);
  const [displayShop, setDisplayShop] = useState(initialAppContext.displayShop);

  const itemsContextValue = React.useMemo(
    () => ({ items, setItems }),
    [items]
    );
    const totalContextValue = React.useMemo(() => ({ total, setTotal }), [total]);
  const displayShopContextValue = React.useMemo(
    () => ({ displayShop, setDisplayShop }),
    [displayShop]
  );

  return (
    <ShopContext.Provider
      value={{
        ...itemsContextValue,
        ...displayShopContextValue,
        ...totalContextValue,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};
