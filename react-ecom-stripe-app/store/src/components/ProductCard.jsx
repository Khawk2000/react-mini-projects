import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">${product.price}</p>
        {productQuantity > 0 ? (
          <>
            <form action="" className="row g-3">
              <div className="form-label">In Cart: {productQuantity}</div>
              <div className="col-sm-6 d-flex">
                <button
                  type="button"
                  className="btn btn-primary mx-2"
                  onClick={() => cart.addOneToCart(product.id)}
                >
                  +
                </button>
                <button
                  type="button"
                  className="btn btn-danger mx-2"
                  onClick={() => cart.removeOneFromCart(product.id)}
                >
                  -
                </button>
              </div>
            </form>
            <button
              className="btn btn-danger my-2"
              onClick={() => cart.deleteFromCart(product.id)}
            >
              Remove from Cart
            </button>
          </>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => cart.addOneToCart(product.id)}
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
