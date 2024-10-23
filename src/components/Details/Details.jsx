import PropTypes from "prop-types";

const Details = ({ addToCart }) => {
  const { product_name, product_price, product_details, is_available } =
    addToCart;
  console.log(addToCart);

  return (
    <div className="border p-3 rounded-md space-y-2 mb-3">
      <h3 className="text-2xl font-semibold text-cyan-700">{product_name}</h3>
      <p className="text-gray-600">{product_details}</p>
      <p className="text-gray-700 font-semibold">{product_price}</p>
      <h4 className="font-semibold text-purple-900">
        {is_available ? "In Stock" : "Not Available"}
      </h4>
    </div>
  );
};

Details.propTypes = {
  addToCart: PropTypes.array,
};

export default Details;
