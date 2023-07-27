import React, { useContext } from "react";
import { Context } from "../../../utils/context";
import { MdClose } from "react-icons/md";
// import prod from "../../../assets/1.webp"
import prod from "../../../assets/banner-img.png";

import "./CartItem.scss";

const CartItem = () => {
    // const { cartItems, handleRemoveFromCart, handleCartProductQuantity } =
    //     useContext(Context);

    return (
        <div className="cart-products">
            <div className="cart-product">
                <div className="img-container">
                    <img src={prod} alt="" />
                </div>
                <div className="prod-details">
                    <div className="name">Product Name</div>
                    <MdClose className="close-btn"/>
                    <div className="quantity-buttons">
                        <span>-</span>
                        <span>5</span>
                        <span>+</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
