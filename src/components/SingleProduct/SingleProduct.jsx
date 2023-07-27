import { useContext, useState } from "react";
import { Context } from "../../utils/context";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
import prod from "../../assets/shoes.jpg"
import "./SingleProduct.scss";

const SingleProduct = () => {

    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left"><img src={prod} alt="" /></div>
                    <div className="right">
                        <span className="name">Name</span>
                        <span className="price">499</span>
                        <span className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, quis?</span>

                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span>-</span>
                                <span>5</span>
                                <span>+</span>
                            </div>
                            <button className="add-to-cart">
                                <FaCartPlus size={20} />
                                ADD TO CART
                            </button>

                        </div>
                        <span className="divider" />
                        <div className="info-item">
                            <span className="text-bold">Category :
                                <span>headphones</span>
                            </span>
                            <span className="text-bold">Share :
                                <span className="social-icons">
                                    <FaFacebookF size={16}/>
                                    <FaTwitter size={16}/>
                                    <FaInstagram size={16}/>
                                    <FaLinkedinIn size={16}/>
                                    <FaPinterest size={16}/>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <RelatedProducts/>
            </div>
        </div>
    );
};

export default SingleProduct;
