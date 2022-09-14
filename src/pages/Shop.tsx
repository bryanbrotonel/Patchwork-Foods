import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';

function Shop() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const useShopContext = useContext(ShopContext);
  const { cart, setCart } = useShopContext;

  const onFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const newItem = {
      id: cart.length + 1,
      name: name,
      price: price,
      description: description,
    };
    setCart([...cart, newItem]);
  };

  return (
    <div className="h-full flex flex-row justify-evenly mx-8 py-24">
      <div className="basis-96 md:basis-2/4 border border-red-300">
        <div>
          <h1>Shop</h1>
        </div>
        <div>
          <form className="flex flex-col w-fit" action="">
            <input
              className="border border-black px-2"
              value={id}
              placeholder="ID"
              onChange={(event) => setId(event.target.value)}
              type="text"
            />
            <input
              className="border border-black px-2"
              value={name}
              placeholder="Name"
              onChange={(event) => setName(event.target.value)}
              type="text"
            />
            <input
              className="border border-black px-2"
              value={price}
              placeholder="Price"
              onChange={(event) => setPrice(event.target.value)}
              type="number"
            />
            <input
              className="border border-black px-2"
              value={description}
              placeholder="Description"
              onChange={(event) => setDescription(event.target.value)}
              type="text"
            />
            <input
              type="submit"
              value="Submit"
              onClick={(e) => onFormSubmit(e)}
              className="border border-black py-1 px-3 hover:cursor-pointer hover:bg-black hover:text-white"
              data-testid="submit"
            />
          </form>
        </div>
      </div>
      <div className="relative basis-96 md:basis-1/4 h-full flex flex-col border border-black p-6">
        <div className="text-center mb-4 w-full border border-black">
          <h1>Cart</h1>
        </div>
        <div className="relative overflow-auto h-full">
          <div className="flex flex-col gap-3 grow">
            {cart.map((item) => (
              <div className="text-black bg-blue-100 p-4" key={item.id}>
                <p>ID: {item.id}</p>
                <p>Name: {item.name}</p>
                <p>Price: {item.price}</p>
                <p>Description: {item.description}</p>
              </div>
            ))}
          </div>
          <div className="sticky inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white" />
        </div>
        <div className="py-4">
          <h1>Total: </h1>
        </div>
      </div>
    </div>
  );
}

export default Shop;
