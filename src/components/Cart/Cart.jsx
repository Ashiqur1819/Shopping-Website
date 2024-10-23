import PropTypes from "prop-types";

const Cart = ({ addToCart, handleRemoveCart }) => {
  console.log(handleRemoveCart);
  const { product_img, product_name, product_price } = addToCart;

  return (
    <div className="border p-3 rounded-md mb-3 flex items-center justify-between gap-3">
      <div className=" border p-1 rounded-md min-w-20">
        <img
          src={product_img}
          className="w-20 h-16 object-cover object-top rounded-md"
          alt=""
        />
      </div>
      <h3 className="font-semibold text-gray-950">{product_name}</h3>
      <div className="text-gray-300">|</div>
      <p className="text-gray-700 font-medium">${product_price}</p>
      <div className="text-gray-300">|</div>
      <div className="flex right-0">
        <button
          onClick={() => handleRemoveCart(product_name)}
          className="bg-red-700 px-3 py-2 rounded-md text-white font-semibold"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

Cart.propTypes = {
  addToCart: PropTypes.array,
  handleRemoveCart: PropTypes.func,
};

export default Cart;
