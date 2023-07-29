import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";

import prod from "../../../assets/shoes.jpg"

const Product = ({ id, data }) => {
    const navigate = useNavigate();
    return (
        <div className="product-card">
            <div className="thumbnail">
                {/* <img src={process.env.REACT_APP_DEV_URL + data?.attributes?.img.data[0].attributes.url} alt="" /> */}
                {/* <img src={prod} alt="" /> */}
                {console.log(process.env.REACT_APP_DEV_URL + data?.img?.price)}
            </div>        
            <div className="prod-details">
                <span className="name">ABD</span>
                <span className="price">&#8377;466</span>
                {/* <span className="name">{data.title}</span>
                <span className="price">&#8377;{data.price}</span> */}
            </div>
        </div>
    );
};

export default Product;
