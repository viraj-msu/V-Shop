import { useNavigate } from "react-router-dom";
import "./Category.scss";

import pic from "../../../assets/newsletter-bg.jpeg";

const Category = ({ categories }) => {
  const navigate = useNavigate();
  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories.map((item) => (
          <div key={item.id} className="category">
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                item.attributes.img.data.attributes.url
              }
              alt="imaaggee"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
