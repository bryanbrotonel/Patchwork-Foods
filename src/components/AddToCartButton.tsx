import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { TypeCartItem, TypeShopItem } from '../types';

function AddToCartButton(props: { item: TypeShopItem }) {
  const useShopContext = useContext(ShopContext);
  const { items, setItems, total, setTotal } = useShopContext;

  const { id, name, price } = props.item;

  const addProduct = () => {
    if (id in items) {
      var updatedCart: { [key: number]: TypeCartItem } = { ...items };
      updatedCart[id].quantity += 1;

      setItems(updatedCart);
    } else {
      const newCartItem = {
        id: id,
        name: name,
        price: price,
        quantity: 1,
      } as TypeCartItem;

      setItems({ ...items, [id]: newCartItem });
    }
    setTotal(total + price);
  };

  return (
    <button
      onClick={addProduct}
      className="w-full bg-orange-300 hover:bg-orange-300/80 p-2 mt-4 rounded"
    >
      Add To Cart
    </button>
  );
}

export default AddToCartButton;
