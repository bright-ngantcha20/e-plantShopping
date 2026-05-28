import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [

  {
    id: 1,
    name: "Snake Plant",
    price: 25,
    category: "Aromatic",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5c54"
  },

  {
    id: 2,
    name: "Aloe Vera",
    price: 18,
    category: "Medicinal",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
  },

  {
    id: 3,
    name: "Peace Lily",
    price: 30,
    category: "Decorative",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735"
  },

  {
    id: 4,
    name: "Spider Plant",
    price: 20,
    category: "Aromatic",
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42"
  },

  {
    id: 5,
    name: "Cactus",
    price: 15,
    category: "Decorative",
    image: "https://images.unsplash.com/photo-1459156212016-c812468e2115"
  },

  {
    id: 6,
    name: "Monstera",
    price: 35,
    category: "Medicinal",
    image: "https://images.unsplash.com/photo-1463154545680-d59320fd685d"
  }
];

const ProductList = () => {

  const dispatch = useDispatch();

  const cartItems = useSelector(
    state => state.cart.items
  );

  return (

    <div className="products">

      {plants.map((plant) => {

        const added = cartItems.find(
          item => item.id === plant.id
        );

        return (

          <div className="card" key={plant.id}>

            <img
              src={plant.image}
              alt={plant.name}
            />

            <h3>{plant.name}</h3>

            <p>${plant.price}</p>

            <p>{plant.category}</p>

            <button
              disabled={added}
              onClick={() =>
                dispatch(addToCart(plant))
              }
            >
              {added ? "Added" : "Add To Cart"}
            </button>

          </div>
        );
      })}

    </div>
  );
};

export default ProductList;