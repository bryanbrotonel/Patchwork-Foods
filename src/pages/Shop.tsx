import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { CartItem } from '../types';

import productData from '../data/products.json';

function Shop() {
  const useShopContext = useContext(ShopContext);
  const { items, setItems, total, setTotal } = useShopContext;

  const formatter = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
  });

  const addProduct = (id: number, name: string, price: string) => {
    if (id in items) {
      var updatedCart: CartItem = { ...items };
      updatedCart[id].quantity += 1;
      setItems(updatedCart);
      setTotal(total + parseInt(price));
    } else {
      const newCartItem = {
        id: id,
        name: name,
        price: price,
        quantity: 1,
      };
      setItems({ ...items, [id]: newCartItem });
      setTotal(total + parseFloat(price));
    }
  };

  return (
    <div className="h-full flex flex-row justify-evenly mx-8 py-24">
      <div className="basis-96 md:basis-2/4">
        <div>
          <h1>Shop</h1>
        </div>
        <div>
          <div className="flex flex-wrap gap-4 justify-between">
            {productData.products.map((product, index) => {
              const {
                title,
                body_html,
                image: { src },
                variants,
              } = product;
              const price = variants[0].price;
              const id = variants[0].product_id;

              const description = body_html.replace(/(<([^>]+)>)/gi, '');

              return (
                <div key={id} className="basis-1/4">
                  <div className="bg-slate-300 text-black rounded shadow-md">
                    <img src={src} alt="" className="h-24 w-auto" />
                    <h1>{title}</h1>
                    <p>{formatter.format(parseInt(price))}</p>
                    <p>{description}</p>
                  </div>
                  <button
                    onClick={() => addProduct(id, title, price)}
                    className="w-full bg-orange-300 p-2 mt-4 rounded"
                  >
                    Add to cart
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="relative basis-96 md:basis-1/4 h-full flex flex-col border border-black p-6">
        <div className="text-center mb-4 w-full border border-black">
          <h1>Cart</h1>
        </div>
        <div className="relative overflow-auto h-full">
          <div className="flex flex-col gap-3 grow">
            {Object.values(items).map((item: any) => (
              <div className="text-black bg-blue-100 p-4" key={item.id}>
                <p>ID: {item.id}</p>
                <p>Name: {item.name}</p>
                <p>Price: {formatter.format(item.price)}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            ))}
          </div>
          <div className="sticky inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white" />
        </div>
        <div className="py-4">
          <h1>Total: {formatter.format(total)}</h1>
        </div>
      </div>
    </div>
  );
}

export default Shop;
