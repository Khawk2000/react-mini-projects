import { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../context/CartContext";
import { getProductData } from "../productsStore";

const CartProduct = ({ id, quantity }) => {
  const cart = useContext(CartContext);
  const productData = getProductData(id);

  return (
    <>
      <h3>{productData.title}</h3>
      <p>{quantity} total</p>
      <p>${(quantity * productData.price).toFixed(2)}</p>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => cart.deleteFromCart(id)}
      >
        Remove
      </button>
      <hr />
    </>
  );
};

CartProduct.propTypes = {};

export default CartProduct;
