import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartProduct from "./CartProduct";

const NavBar = () => {
  const cart = useContext(CartContext);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const checkout = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.url) {
          window.location.assign(res.url);
        }
      });
  };

  return (
    <>
      <div className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            Ecom Store
          </a>
          <button
            className="btn btn-primary navbar-toggler d-flex justify-content-center "
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Cart ({productsCount} Items)
          </button>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Shopping Cart
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {productsCount > 0 ? (
                <>
                  <p>Items in your cart:</p>
                  {cart.items.map((currProd, idx) => (
                    <CartProduct
                      key={idx}
                      id={currProd.id}
                      quantity={currProd.quantity}
                    />
                  ))}

                  <h1>Total: ${cart.getTotalCost().toFixed(2)}</h1>

                  <button className="btn btn-success" onClick={checkout}>
                    Purchase Items
                  </button>
                </>
              ) : (
                <h1>There are no items in your cart!</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
