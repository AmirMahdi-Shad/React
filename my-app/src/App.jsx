import React, { useState } from "react";
import ProductList from "./components/ProductList/ProductList";
import NavBar from "./components/NavBar/NavBar";
// import TabBar from "./components/TabBar/TabBar";
import Wrapper from "./components/Hoc/Wrapper";
import ProductsProvider from "./components/Providers/ProductsProvider";

const App = () => {
  return (
    <>
      <ProductsProvider>
        <NavBar />
        <div className="flex flex-col justify-center items-center">
          <ProductList />
        </div>
      </ProductsProvider>
    </>
  );
};

export default Wrapper(
  App,
  "container h-full bg-gray-300 min-w-full font-sans"
);
