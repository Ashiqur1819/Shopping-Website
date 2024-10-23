import Cart from "../Cart/Cart";
import Details from "../Details/Details";
import PropTypes from "prop-types";

const Carts = ({ handlerActiveBtn, active, addToCart, handleRemoveCart }) => {
  return (
    <div className="border p-3 rounded-md">
      <div className="flex gap-24">
        <div>
          <button
            onClick={() => handlerActiveBtn(true)}
            className={
              active
                ? "bg-purple-500 px-6 py-2 font-semibold rounded-md text-white"
                : "border px-6 py-2 font-semibold rounded-md"
            }
          >
            Cart
          </button>
        </div>
        <div>
          <button
            onClick={() => handlerActiveBtn(false)}
            className={
              active
                ? "border px-6 py-2 font-semibold rounded-md"
                : "bg-purple-500 px-6 py-2 font-semibold rounded-md text-white"
            }
          >
            Details
          </button>
        </div>
      </div>

      <div className="mt-6">
        {addToCart.map((cart, index) =>
          active ? (
            <Cart
              addToCart={cart}
              key={index}
              handleRemoveCart={handleRemoveCart}
            ></Cart>
          ) : (
            <Details addToCart={cart} key={index}></Details>
          )
        )}
      </div>
    </div>
  );
};

Carts.propTypes = {
  handlerActiveBtn: PropTypes.func,
  active: PropTypes.array,
  addToCart: PropTypes.array,
  handleRemoveCart: PropTypes.func,
};

export default Carts;
