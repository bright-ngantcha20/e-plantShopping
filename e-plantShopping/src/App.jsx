import { Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function App() {

  return (

    <div>

      <Header />

      <Routes>

        <Route
          path="/"
          element={

            <div className="landing">

              <h1>Paradise Nursery</h1>

              <p>
                Welcome to Paradise Nursery,
                your home for beautiful plants.
              </p>

              <Link to="/plants">

                <button>
                  Get Started
                </button>

              </Link>

              <AboutUs />

            </div>
          }
        />

        <Route
          path="/plants"
          element={<ProductList />}
        />

        <Route
          path="/cart"
          element={<CartItem />}
        />

      </Routes>

    </div>
  );
}

export default App;