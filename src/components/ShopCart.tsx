import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import ShopCartItem from './ShopCartItem';

function ShopCart(props: { items: {}; total: string }) {
  const { items, total } = props;

  const useShopContext = useContext(ShopContext);
  const { setDisplayThankYou } = useShopContext;

  const emptyCart = Object.keys(items).length === 0;

  let cartComponent = emptyCart ? (
    <div className="text-zinc-400 text-center">Your cart is empty</div>
  ) : (
    Object.values(items).map((item: any) => (
      <div key={item.id}>
        <ShopCartItem item={item} />
      </div>
    ))
  );

  const processCheckout = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setDisplayThankYou(true);
  };

  return (
    <div className="h-5/6 flex flex-col p-10 bg-white rounded-3xl shadow-lg">
      <div className="text-center mb-8">
        <h1 className="font-serif font-bold text-3xl text-primary">Cart</h1>
      </div>
      <div className="relative overflow-y-auto h-full">
        <div className="flex flex-col gap-12 grow">{cartComponent}</div>
        <div className="sticky inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white" />
      </div>
      <div className="pt-4">
        <h1 className="font-medium text-2xl text-right">Total: {total}</h1>
      </div>
      <div className="pt-4">
        <button
          onClick={(e) => processCheckout(e)}
          disabled={emptyCart}
          className="w-full rounded p-2 py-3 font-medium bg-primary hover:bg-primaryDark disabled:bg-zinc-400 text-white"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default ShopCart;
