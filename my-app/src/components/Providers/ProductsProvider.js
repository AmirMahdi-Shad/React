import React, { createContext, useContext, useReducer } from "react";
import { productsData } from "../../db/products";
import Select from 'react-select';
// createContext
const ProductsContext = createContext(0);
const ProductsContextDisPatcher = createContext();
// const initialState = [
//   { id: 1, name: "React js Course", price: 123, quantity: 1 },
//   { id: 2, name: "node js Course", price: 180, quantity: 1 },
//   { id: 3, name: "Vue js Course", price: 190, quantity: 1 },
// ];

const reducer = (state, action) => {
  // todo
  switch (action.type) {
    case "increment": {
      const index = state.findIndex((p) => p.id === action.id);
      const selectedProduct = { ...state[index] };
      selectedProduct.quantity++;

      const updatedProducts = [...state];
      updatedProducts[index] = selectedProduct;
      return updatedProducts;
    }
    case "decrement": {
      const index = state.findIndex((p) => p.id === action.id);
      const selectedProduct = { ...state[index] };
      const productsCopy = [...state];
      if (selectedProduct.quantity > 1) {
        selectedProduct.quantity--;
        productsCopy[index] = selectedProduct;
        return productsCopy;
      } else {
        return state.filter((p) => p.id !== action.id);
      }
    }
    case "edit": {
      const index = state.findIndex((p) => p.id === action.id);
      const selectedProduct = { ...state[index] };
      selectedProduct.title = action.event.target.value;

      const productsCopy = [...state];
      productsCopy[index] = selectedProduct;
      return productsCopy;
    }
    case "remove": {
      const updatedProduct = state.filter((p) => p.id !== action.id);
      return updatedProduct;
    }
    case "filter":
 // console.log(action.e.target.value);
 if(action.e.target.value === "All"){
   return productsData
 }else{
  const updatedProducts = productsData.filter((p)=> p.availableSizes.indexOf(action.e.target.value)>=0)
  return updatedProducts;
 }
    default:
      return state;
  }
};
// Component
const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, productsData);
  return (
    // provider
    <ProductsContext.Provider value={products}>
      <ProductsContextDisPatcher.Provider value={dispatch}>
        {children}
      </ProductsContextDisPatcher.Provider>
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
// export Context
export const useProducts = () => useContext(ProductsContext);
export const useProductsActions = () => {
  return useContext(ProductsContextDisPatcher);
  // const products = useContext(ProductsContext);
  // todo: using useReducer Hook instead of this
  // const removeProductHandler = (id) => {
  //   const updatedProduct = products.filter((p) => p.id !== id);
  //   setProducts(updatedProduct);
  // };
  // const inCrementHandler = (id) => {
  //   const index = products.findIndex((p) => p.id === id);
  //   const selectedProduct = { ...products[index] };
  //   selectedProduct.quantity++;

  //   const productsCopy = [...products];
  //   productsCopy[index] = selectedProduct;
  //   setProducts(productsCopy);
  // };

  // const deCrementHandler = (id) => {
  //   const index = products.findIndex((p) => p.id === id);
  //   const selectedProduct = { ...products[index] };
  //   const productsCopy = [...products];
  //   if (selectedProduct.quantity > 1) {
  //     selectedProduct.quantity--;
  //     productsCopy[index] = selectedProduct;
  //     setProducts(productsCopy);
  //   } else {
  //     setProducts(products.filter((p) => p.id !== id));
  //   }
  // };
  // const changeHandler = (e, id) => {
  //   const index = products.findIndex((p) => p.id === id);
  //   const selectedProduct = { ...products[index] };
  //   selectedProduct.name = e.target.value;

  //   const productsCopy = [...products];
  //   productsCopy[index] = selectedProduct;
  //   setProducts(productsCopy);
  // };

  //   return {
  //     removeProductHandler,
  //     inCrementHandler,
  //     deCrementHandler,
  //     changeHandler,
  //   };
};
