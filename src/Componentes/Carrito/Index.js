import React from "react";
import { BsFillXCircleFill } from "react-icons/bs";
import honlleta from "../../img/honlleta.png"

export const Carrito = () => {
    return (
        <div className="Carritos">
            <div className="Carrito">
                <br/>
                <div className="carrito_close">
                    <BsFillXCircleFill ></BsFillXCircleFill>
                </div>
                <h2>Su carrito</h2>
                <div className="carrito_Center">
                    <div className="carrito_item">
                        <img src={honlleta} alt="" width={200} />
                    </div>
                </div>
            </div>
        </div>
    )
}