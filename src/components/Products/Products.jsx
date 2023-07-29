import "./Products.scss";
import Product from "./Product/Product";
import { useEffect } from "react";

const Products = ({ products, innerPage, headingText }) => {

    // useEffect(()=>{
    //     console.log(products[0].attributes)
    // })
  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
      {products?.map((item,id) => {
          <Product key={item.id} id={item.id} data={item.attributes} />;
        })}
      <Product />
      <Product />
      <Product />
     {/* { products.forEach(element => {
        for(let item in element){
          
        }
      })} */}
      </div>
    </div>
  );
};

export default Products;
