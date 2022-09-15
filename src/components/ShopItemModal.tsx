import React, { useEffect, useRef } from 'react';
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

  // Create a ref to modal
  const modalRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Disbale scrolling when modal is open
    document.body.style.overflow = 'hidden';

    // Focus on modal when it is open
    if (modalRef.current) {
      modalRef.current.focus();
    }
    return () => {
      // Enable scrolling when modal is closed
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Close modal when user presses escape key
  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      setDisplayModal(false);
    }
  };

  return (
    <div
      className="fixed inset-0 w-full h-full bg-black/70 z-50 flex justify-center items-center"
      onClick={() => setDisplayModal(false)}
      ref={modalRef}
      tabIndex={-1}
      onKeyDown={handleKeyPress}
    >
      <div
        className="flex flex-row bg-white rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="basis-1/2 w-96 h-full bg-gray-200 p-3">
          <img
            src={image}
            alt={`${name} - Product Image`}
            className="aspect-square w-full"
          />
        </div>
        <div className="relative basis-1/2 container">
          <div className="h-full flex flex-col">
            <div className="grid place-content-end">
              <button className="p-3" onClick={() => setDisplayModal(false)}>
                X
              </button>
            </div>
            <div className="grow flex flex-col justify-between p-5">
              <div>
                <h1 className="font-sans font-semibold text-3xl">{name}</h1>
                <p className="mt-4">{description}</p>
              </div>
              <div onClick={() => setDisplayModal(false)}>
                <AddToCartButton item={props.item} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopItemModal;
