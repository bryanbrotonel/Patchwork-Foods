import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { TypeCartItem, TypeShopItem } from '../types';

interface ShopItemProps {
  item: TypeShopItem;
}

function ShopItem(props: ShopItemProps) {
  const [itemQuantity, setItemQuantity] = React.useState(0);
  const useShopContext = useContext(ShopContext);
  const { items, setItems, total, setTotal } = useShopContext;

  const addProduct = (id: number, name: string, price: string) => {
    if (id in items) {
      var updatedCart: TypeCartItem = { ...items };
      var updatedQuantity = updatedCart[id].quantity + 1;

      updatedCart[id].quantity = updatedQuantity;

      setItemQuantity(updatedQuantity);
      setItems(updatedCart);
      setTotal(total + parseInt(price));
    } else {
      const newCartItem = {
        id: id,
        name: name,
        price: price,
        quantity: 1,
      } as TypeCartItem;

      setItemQuantity(1);
      setItems({ ...items, [id]: newCartItem });
      setTotal(total + parseFloat(price));
    }
  };

  const {
    item: { id, name, price, description, image },
  } = props;
  return (
    <div>
      <div className="bg-slate-200 text-black rounded shadow-md">
        <img src={image} alt="" className="h-24 w-auto" />
        <h1>{name}</h1>
        <p>${price}</p>
        <p>{description}</p>
      </div>
      <button
        onClick={() => addProduct(id, name, price)}
        className="w-full bg-orange-300 p-2 mt-4 rounded"
      >
        {itemQuantity > 0 ? `-  ${itemQuantity} +` : 'Add to cart'}
      </button>
    </div>
  );
}

export default ShopItem;
