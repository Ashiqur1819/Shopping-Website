import PropTypes from "prop-types";

const Product = ({ product, handleAddToCartBtn }) => {
  const {
    product_name,
    product_price,
    product_details,
    product_img,
    is_available,
  } = product;

  return (
    <div>
      <div className="border mb-4 p-4 rounded-md ">
        <img
          src={product_img}
          className="w-full h-52 object-cover object-top border rounded-md "
          alt=""
        />
        <h2 className="text-xl font-bold mt-4">{product_name}</h2>
        <p className="text-gray-600 font-semibold">Price: ${product_price}</p>
        <p className="text-gray-500 mt-2">{product_details}</p>
        <p className="font-semibold text-lg mt-2">
          {is_available ? "In Stock" : "Not Available"}
        </p>
        <div className="mt-4">
          <button
            onClick={() => handleAddToCartBtn(product)}
            className="bg-cyan-600 px-4 py-2 rounded-md text-white font-semibold"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.array,
  handleAddToCartBtn: PropTypes.func,
};

export default Product;
