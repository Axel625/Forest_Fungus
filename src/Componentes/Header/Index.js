import React from "react";
import { BsFillBasketFill } from "react-icons/bs";
import logo from "../../img/logo.png"
import { ProductosLista } from "../Productos/Index";

export const Header = () => {
    return (
        <header>
            <div className="menu">
            </div>
            <a href="#">
                <div className="logo">
                    <img src={logo} alt="logo" width={150} />
                </div>
            </a>
            <ul>
                <li>
                    <a href="Productos">Galletas</a>
                </li>
            </ul>
            <div className="CART">
                <BsFillBasketFill name="CART">
                    <a href="../Productos">
                    </a>
                </BsFillBasketFill>
            </div>
        </header>
    )


}