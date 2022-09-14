import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { TypeCartItem, TypeShopItem } from '../types';

function ShopCartItem(props: { item: TypeCartItem }) {
  const { item } = props;
  const { id, name, price, quantity } = item;

  const useShopContext = useContext(ShopContext);
  const { items, setItems, total, setTotal } = useShopContext;

  const [quantityField, setQuantityField] = React.useState(String(quantity));

  useEffect(() => {
    setQuantityField(String(items[id as keyof typeof items]['quantity']));
  }, [items]);

  const formatter = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
  });

  const updateProduct = (newQuantity: number) => {
    if (newQuantity === 0) {
      var updatedCart: { [key: number]: TypeCartItem } = { ...items };
      delete updatedCart[id];

      setItems(updatedCart);
      setTotal(total - price * parseInt(quantityField));
    } else if (newQuantity > 0) {
      var updatedCart: { [key: number]: TypeCartItem } = { ...items };
      updatedCart[id].quantity = newQuantity;
      var productPrice = price;
      var newTotal =
        total -
        productPrice * parseInt(quantityField) +
        productPrice * newQuantity;

      setQuantityField(String(newQuantity));
      setItems(updatedCart);
      setTotal(newTotal);
    }
  };

  // Update cart when input out of focus
  const onHandleUpdate = (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();

    const inputValue = quantityField;

    // If input is empty, set quantity to 1
    if (inputValue === '') {
      updateProduct(1);
      setQuantityField('1');
    }
    // Process input as desired quantity
    else {
      const value = parseInt(inputValue);

      //  If value is a number and positive integer, update cart
      if (!Number.isNaN(value) && value >= 0) {
        updateProduct(value);
        setQuantityField(inputValue);
      } else {
        // Reset input to previous value
        setQuantityField(quantityField);
      }
    }
  };

  return (
    <div className="text-black bg-blue-100 p-4">
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Price: {formatter.format(price)}</p>
      <div className="flex flex-row justify-evenly">
        <div>
          <button onClick={() => updateProduct(parseInt(quantityField) - 1)}>
            -
          </button>
        </div>
        <div>
          <form onSubmit={(e) => onHandleUpdate(e)}>
            <input
              type="text"
              pattern="\d*" // Only allow numbers
              value={quantityField}
              onChange={(e) => setQuantityField(e.target.value)}
              onBlur={(e) => onHandleUpdate(e)}
              className="w-10 bg-transparent text-center focus:outline-none"
            />
          </form>
        </div>
        <div>
          <button onClick={() => updateProduct(parseInt(quantityField) + 1)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShopCartItem;
