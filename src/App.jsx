import { useState } from "react";
import Carts from "./components/Carts/Carts";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

const App = () => {
  const [active, setActive] = useState(true);
  const [addToCart, setAddToCart] = useState([]);
  const [price, setPrice] = useState(700);

  const handlerActiveBtn = (status) => {
    setActive(status);
  };

  const handleAddToCartBtn = (product) => {
    const validCard = addToCart.find(
      (p) => p.product_name === product.product_name
    );

    if (!validCard) {
      handleDecreasePrice(product.product_price);
      const newAddToCart = [...addToCart, product];
      setAddToCart(newAddToCart);
    } else {
      alert(`${product.product_name} already exists!`);
    }
  };

  const handleIncreasePrice = (name) => {
    const product = addToCart.find((p) => p.product_name == name);
    const { product_price } = product;
    console.log(typeof +product_price);
    console.log(typeof +price);
    setPrice((+price + +product_price).toFixed(2));
  };

  const handleDecreasePrice = (p) => {
    setPrice((price - +p).toFixed(2));
  };

  const handleRemoveCart = (name) => {
    const remainingCarts = addToCart.filter((p) => p.product_name !== name);
    setAddToCart(remainingCarts);
    handleIncreasePrice(name);
  };

  return (
    <div className="container mx-auto p-6">
      <Header price={price} addToCart={addToCart}></Header>
      <div className="grid grid-cols-5 gap-12 mt-12">
        <div className="col-span-3">
          <Products handleAddToCartBtn={handleAddToCartBtn}></Products>
        </div>
        <div className="col-span-2">
          <Carts
            addToCart={addToCart}
            active={active}
            handlerActiveBtn={handlerActiveBtn}
            handleRemoveCart={handleRemoveCart}
          ></Carts>
        </div>
      </div>
    </div>
  );
};

export default App;
