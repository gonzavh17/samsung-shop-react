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

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer />}
          />
           <Route
            path="/home"
            element={<Home/>}
          />
          <Route
            path="/categoria/:phoneCategory"
            element={<ItemListContainer saludo="ASASD" />}
          />
          <Route
            path="/products/:id"
            element={<ItemDetailContainer/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
