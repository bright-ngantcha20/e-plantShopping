import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = {
  Aromatic: [
    {
      id: 1,
      name: "Snake Plant",
      price: 25,
      image:
        "https://images.unsplash.com/photo-1593691509543-c55fb32e5c54",
    },
    {
      id: 2,
      name: "Spider Plant",
      price: 20,
      image:
        "https://images.unsplash.com/photo-1512428559087-560fa5ceab42",
    },
  ],

  Medicinal: [
    {
      id: 3,
      name: "Aloe Vera",
      price: 18,
      image:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    },
    {
      id: 4,
      name: "Monstera",
      price: 35,
      image:
        "https://images.unsplash.com/photo-1463154545680-d59320fd685d",
    },
  ],

  Decorative: [
    {
      id: 5,
      name: "Peace Lily",
      price: 30,
      image:
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
    },
    {
      id: 6,
      name: "Cactus",
      price: 15,
      image:
        "https://images.unsplash.com/photo-1459156212016-c812468e2115",
    },
  ],
};

const ProductList = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  return (
    <div className="products">

      {Object.entries(plants).map(
        ([category, plantList]) => (
          <div key={category}>
            <h2>{category} Plants</h2>

            <div className="category-section">
              {plantList.map((plant) => {
                const added = cartItems.find(
                  (item) => item.id === plant.id
                );

                return (
                  <div
                    className="card"
                    key={plant.id}
                  >
                    <img
                      src={plant.image}
                      alt={plant.name}
                      width="200"
                    />

                    <h3>{plant.name}</h3>

                    <p>${plant.price}</p>

                    <button
                      disabled={added}
                      onClick={() =>
                        dispatch(addItem(plant))
                      }
                    >
                      {added
                        ? "Added"
                        : "Add To Cart"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ProductList;
