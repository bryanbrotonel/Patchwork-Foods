import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { TypeShopItem } from '../types';
import ShopItem from '../components/ShopItem';

import productData from '../data/products.json';
import ShopCart from '../components/ShopCart';

import { IoHeart } from 'react-icons/io5';

import Logo from '../assets/images/Logo.svg';

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
      <ShopItem
        key={id}
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
    );
  });

  return (
    <div>
      <div className="flex flex-row justify-evenly my-16">
        <div className="basis-7/12">
          <div className="mb-12 space-y-8">
            <img src={Logo} className="w-80 max-w-lg" />
            <h1 className="text-lg font-sans font-medium text-black">
              Create your healthy meal kit with our fresh ingredients and easy to follow recipes.
            </h1>
          </div>
          <div>
            <div className="flex flex-wrap gap-y-12 justify-between items-stretch">
              {productGrid}
            </div>
          </div>
        </div>
        <div className="sticky top-24 basis-1/4 md:basis-96 max-h-[50rem]">
          <ShopCart items={items} total={formatter.format(total)} />
        </div>
      </div>
      <div>
        <h1 className="font-sans font-medium text-[#FFA35C] text-center mb-8">
          Made with&nbsp;
          <div className="inline-block text-primary align-text-top">
            <IoHeart />
          </div>
          &nbsp;by&nbsp;
          <a className="hover:text-primary" href="https://bryanbrotonel.live/">
            Bryan Brotonel
          </a>
        </h1>
      </div>
    </div>
  );
}

export default Shop;
