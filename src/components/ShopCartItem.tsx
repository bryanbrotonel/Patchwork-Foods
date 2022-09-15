import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { TypeCartItem } from '../types';
import ItemQuantityField from './ItemQuantityField';

function ShopCartItem(props: { item: TypeCartItem }) {
  const { item } = props;
  const { id, name, price, quantity, image } = item;

  const formatter = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
  });

  return (
    <div className="flex gap-8 text-sm">
      <div className="basis-2/5 h-fit aspect-square bg-gray-200 p-2 rounded-md">
        <img
          src={image}
          alt={`${name} - Product Image`}
          className="aspect-square w-full"
        />
      </div>
      <div className="basis-3/5 text-lg">
        <div className="mb-4 text-end">
          <h1 className="font-medium mb-2">{name}</h1>
          <span className='text-zinc-500'>{formatter.format(price)}</span>
        </div>
        <div className="flex flex-row justify-end">
          <ItemQuantityField item={item} />
        </div>
      </div>
    </div>
  );
}

export default ShopCartItem;
