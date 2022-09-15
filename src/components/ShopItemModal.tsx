import React from 'react';
import { TypeShopItem } from '../types';
import AddToCartButton from './AddToCartButton';

interface ModalProps {
  item: TypeShopItem;
  setDisplayModal: (value: boolean) => void;
}

function ShopItemModal(props: ModalProps) {
  const {
    item: { name, image, description },
    setDisplayModal,
  } = props;

  return (
    <div className="fixed inset-0 w-full h-full bg-black/70 z-50">
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-row bg-white rounded">
          <div className="basis-1/2">
            <img src={image} alt={`${name} - Image`} />
          </div>
          <div className="basis-1/2 container">
            <h1>{name}</h1>
            <p>{description}</p>
            <AddToCartButton item={props.item} />
            <button onClick={() => setDisplayModal(false)}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopItemModal;
