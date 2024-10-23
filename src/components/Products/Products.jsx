import { useEffect, useState } from "react";
import Product from "../Product/Product";
import PropTypes from "prop-types";

const Products = ({ handleAddToCartBtn }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <div className="lg:grid grid-cols-2 gap-6">
        {products.map((product, index) => (
          <Product
            product={product}
            key={index}
            handleAddToCartBtn={handleAddToCartBtn}
          ></Product>
        ))}
      </div>
    </div>
  );
};

Products.propTypes = {
  handleAddToCartBtn: PropTypes.func,
};

export default Products;
