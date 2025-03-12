import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Product } from "./Pages/Product";
import { LoginSignup } from "./Pages/LoginSignup";
import { Shop } from "./Pages/Shop";
import { ShopCategory } from "./Pages/ShopCategory"; // Corrected import path
import { Cart } from "./Pages/Cart";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/shop" element={<Shop />} />{" "}
            {/* Added route for /shop */}
            <Route path="/wigs" element={<ShopCategory category="wigs" />} />
            <Route
              path="/hair-accessories"
              element={<ShopCategory category="hair accessories" />}
            />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:productId" element={<Product />} />{" "}
            {/* Ensure this route is present */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignup />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
