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
    <div>
      <div className="bg-slate-200 text-black rounded shadow-md">
        <img src={image} alt="" className="h-24 w-auto" />
        <h1>{name}</h1>
        <p>{formatter.format(price)}</p>
        <p>{description}</p>
        <button onClick={() => setDisplayModal(true)}>More Info</button>
      </div>
      <div>
        <AddToCartButton item={props.item} />
      </div>
      {displayModal && (
        <ShopItemModal item={props.item} setDisplayModal={setDisplayModal} />
      )}
    </div>
  );
}

export default ShopItem;
