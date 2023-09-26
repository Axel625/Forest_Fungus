import React from "react";
import logo from "../../img/logo.png"
import { icons } from "react-icons";

export const Header = () => {
    return (
        <header>
            <div name="menu">
<button link="./App.js">menu</button>
            </div>
            <a href="#">
                <div className="logo">
                    <img src={logo} alt="50"/>
                </div>
            </a>
        </header>
    )
}