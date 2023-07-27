import { useNavigate } from "react-router-dom";
import "./Category.scss";

import pic from "../../../assets/newsletter-bg.jpeg"


const Category = ({ categories }) => {
    const navigate = useNavigate();
    return (
        <div className="shop-by-category">
           <div className="categories">
            {categories.data.map((item) => (

                <div key={item.id} className="category">
                    <img src={ProcessingInstruction.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.url } alt="" />
                </div>
            ))}
                {/* <div className="category">
                    <img src={pic} alt="" />
                </div>
                <div className="category">
                    <img src={pic} alt="" />
                </div>
                <div className="category">
                    <img src={pic} alt="" />
                </div> */}
           </div>
        </div>
    );
};

export default Category;
