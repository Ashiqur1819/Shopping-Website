import PropTypes from "prop-types";

const Header = ({ addToCart, price }) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Shopes</h2>
        </div>
        <div>
          <ul className="flex items-center gap-6 text-lg">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6 text-lg">
          <h3 className="text-lg font-medium">Cart: {addToCart.length}</h3>
          <h2 className="text-lg font-medium">Balance: ${price}</h2>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  addToCart: PropTypes.object,
  price: PropTypes.number,
};

export default Header;
