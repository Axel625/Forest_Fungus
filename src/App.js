import React from "react";
import { BsFillBasketFill } from "react-icons/bs";
import { Header } from "./Componentes/Header/Index";
import { Carrito } from "./Componentes/Carrito/Index";
import { AboutUs } from "./Componentes/AboutUs/Index";

function App() {
  return (
    
    <div className="App">
      <Header />
      <br/><br/><br/><br/><br/>
      <AboutUs/>
      <Carrito />
    </div>
    
  )
}

export default App;

