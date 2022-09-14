import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { TypeShopItem } from '../types';
import ShopItem from '../components/ShopItem';

import productData from '../data/products.json';
import ShopCart from '../components/ShopCart';

function Shop() {
  const useShopContext = useContext(ShopContext);
  const { items, total } = useShopContext;

  const formatter = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
  });

  let productGrid = productData.products.map((product) => {
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
        <ShopItem
          item={
            {
              id: id,
              name: title,
              price: parseInt(price),
              image: src,
              description: description,
            } as TypeShopItem
          }
        />
      </div>
    );
  });

  return (
    <div className="flex flex-row justify-evenly my-24">
      <div className="basis-1/2">
        <div className="mb-12">
          <h1 className="text-3xl font-serif">Shop</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            repellat aliquid.
          </h2>
        </div>
        <div>
          <div className="flex flex-wrap gap-4 justify-between">
            {productGrid}
          </div>
        </div>
      </div>
      <div className="sticky top-24 basis-1/4 md:basis-80 max-h-[48rem]">
        <ShopCart items={items} total={formatter.format(total)} />
      </div>
    </div>
  );
}

export default Shop;
