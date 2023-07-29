import { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({children}) =>{

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    // const getproducts=(products)=>{
    //     setProducts(products);
    //     console.log(products);
    // }

    // const getcategory=(category)=>{
    //     setCategories(category);
    // }

    return(
        <Context.Provider value={{
            categories,
            setProducts,
            products,
            setCategories,
        }}>
            {children}
        </Context.Provider>
    )
}

export default AppContext;