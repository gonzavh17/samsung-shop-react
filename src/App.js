import React from "react";
import NavBar from "./Components/Header/NavBar/NavBar";
import ItemListContainer from "./Components/Main/ItemList/ItemListContainer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer saludo="Bienvenidos" />}
          />
          <Route
            path="/categoria/:phoneCategory"
            element={<ItemListContainer saludo="ASASD" />}
          />
          {/* <Route path="/detail" element={<ItemDetailContainer/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
