import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import AddToCartButton from './AddToCartButton';
import { TypeShopItem } from '../types';
import ShopItemModal from './ShopItemModal';
interface ShopItemProps {
  item: TypeShopItem;
}

function ShopItem(props: ShopItemProps) {
  const [displayModal, setDisplayModal] = useState(false);

  const {
    item: { name, price, description, image },
  } = props;

  const formatter = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
  });

  return (
    <React.Fragment>
      <div className="basis-[30%] flex flex-col justify-between text-black bg-white p-5 rounded-lg shadow-lg">
        <div>
          <div className="w-full aspect-square bg-gray-200 p-3 mb-3 rounded-lg">
            <img
              src={image}
              alt={`${name} - Product Image`}
              className="aspect-square w-full"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between mb-6">
            <div className="basis-8/12">
              <h1 className="font-sans font-medium text-xl">{name}</h1>
            </div>
            <div className="basis-4/12 text-right">
              <button
                className="text-primary hover:text-primaryDark"
                onClick={() => setDisplayModal(true)}
              >
                More Info
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <span className="text-lg text-zinc-500">
            {formatter.format(price)}
          </span>
          <div className="basis-8/12">
            <AddToCartButton item={props.item} />
          </div>
        </div>
      </div>
      {displayModal && (
        <ShopItemModal item={props.item} setDisplayModal={setDisplayModal} />
      )}
    </React.Fragment>
  );
}

export default ShopItem;
