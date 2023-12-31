import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
import abc from "../../../assets/main.webp";

const Banner = () => {
    return (
        <div className="hero-banner">
           <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque dolor sit quae vero iure animi deleniti quam quisquam, reiciendis veritatis.
                
                </p>
                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta v2">Shop Now</div>
                </div>
            </div>
            <img className="banner-img" src={abc} alt="" />
           </div>
        </div>
    );
};

export default Banner;
