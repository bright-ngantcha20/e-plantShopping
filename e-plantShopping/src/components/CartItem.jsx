import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../redux/CartSlice";
import { Link } from "react-router-dom";

const CartItem = () => {
  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const dispatch = useDispatch();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalCost = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      <h3>Total Items: {totalItems}</h3>

      <h3>Total Cost: ${totalCost}</h3>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="cart-card"
        >
          <img
            src={item.image}
            alt={item.name}
            width="120"
          />

          <h3>{item.name}</h3>

          <p>Unit Price: ${item.price}</p>

          <p>
            Item Total: $
            {item.price * item.quantity}
          </p>

          <div>
            <button
              onClick={() =>
                dispatch(
                  incrementQuantity(item.id)
                )
              }
            >
              +
            </button>

            <span
              style={{
                margin: "0 10px",
                fontWeight: "bold",
              }}
            >
              {item.quantity}
            </span>

            <button
              onClick={() =>
                dispatch(
                  decrementQuantity(item.id)
                )
              }
            >
              -
            </button>
          </div>

          <button
            onClick={() =>
              dispatch(removeItem(item.id))
            }
          >
            Delete
          </button>
        </div>
      ))}

      <Link to="/plants">
        <button>
          Continue Shopping
        </button>
      </Link>

      <button
        onClick={() =>
          alert(
            "Checkout feature coming soon!"
          )
        }
      >
        Checkout
      </button>
    </div>
  );
};

export default CartItem;
