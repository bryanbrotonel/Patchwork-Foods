import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { TypeCartItem, TypeShopItem } from '../types';

function AddToCartButton(props: { item: TypeShopItem }) {
  const useShopContext = useContext(ShopContext);
  const { items, setItems, total, setTotal } = useShopContext;

  const { id, name, price, image } = props.item;

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
        image: image,
      } as TypeCartItem;

      setItems({ ...items, [id]: newCartItem });
    }
    setTotal(total + price);
  };

  return (
    <button
      onClick={addProduct}
      className="w-full font-medium text-white bg-primary hover:bg-primaryDark p-2 rounded-lg"
    >
      Add To Cart
    </button>
  );
}

export default AddToCartButton;
