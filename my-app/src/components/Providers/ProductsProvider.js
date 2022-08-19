import React, { createContext, useContext, useReducer } from "react";
import { productsData } from "../../db/products";
import _ from "lodash";
// createContext
const ProductsContext = createContext(0);
const ProductsContextDisPatcher = createContext();

const reducer = (state, action) => {
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
    case "filter": {
      const value = action.selectedOption.value;
      if (value === "All") {
        return productsData;
      } else {
        const updatedProducts = productsData.filter((p) =>
          p.type.includes(action.selectedOption.value)
        );
        return updatedProducts;
      }
    }
    case "sort": {
      const value = action.selectedOption.value;

      const products = [...state];
      if (value === "highest") {
        return _.orderBy(products, ["price"], ["desc"]);
      }
      if (value === "lowest") {
        return _.orderBy(products, ["price"], ["asc"]);
      }
      break;
    }
    case "search": {
      const value = action.e;

      if (value === "") {
        return state;
      } else {
        return state.filter((p) =>
          p.title.toLowerCase().includes(value.toLowerCase())
        );
      }
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
};
