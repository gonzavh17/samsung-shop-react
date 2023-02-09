import React from "react";
import NavBar from "./Components/Header/NavBar/NavBar";
import ItemListContainer from "./Components/Main/ItemList/ItemListContainer";
import ItemDetailContainer from "./Components/Main/ItemDetail/ItemDetailContainer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Home from "./Components/Main/Home/Home";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Main/Cart/Cart";
import CartProvider from "./Context/Context/CustomProvider";


function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/categoria/:phoneCategory"
              element={<ItemListContainer saludo="ASASD" />}
            />
            <Route path="/products/:id" element={<ItemDetailContainer />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
