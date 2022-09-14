import React from 'react';
import ShopCartItem from './ShopCartItem';

function ShopCart(props: { items: {}; total: string }) {
  const { items, total } = props;

  return (
    <div className="border border-black p-6 h-full flex flex-col">
      <div className="text-center mb-4">
        <h1>Cart</h1>
      </div>
      <div className="relative overflow-auto h-full">
        <div className="flex flex-col gap-3 grow">
          {Object.values(items).map((item: any) => (
            <div key={item.id}>
              <ShopCartItem item={item} />
            </div>
          ))}
        </div>
        <div className="sticky inset-x-0 bottom-0 h-4 bg-gradient-to-t from-white" />
      </div>
      <div className="pt-4">
        <h1 className="text-xl text-right">Total: {total}</h1>
      </div>
      <div className="pt-4">
        <button className="w-full rounded p-2 bg-green-400">Checkout</button>
      </div>
    </div>
  );
}

export default ShopCart;
