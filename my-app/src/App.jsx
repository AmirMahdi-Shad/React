import React from "react";
import ProductList from "./components/ProductList/ProductList";
import NavBar from "./components/NavBar/NavBar";
// import TabBar from "./components/TabBar/TabBar";
import Wrapper from "./components/Hoc/Wrapper";
import ProductsProvider from "./components/Providers/ProductsProvider";
import Filter from "./components/Filter/Filter";

const App = () => {
  return (
    <>
      <ProductsProvider>
        <NavBar />
        <div className="flex flex-col justify-center items-center">
          <Filter />
          <ProductList />
          {/* <TabBar/> */}
        </div>
      </ProductsProvider>
    </>
  );
};

export default Wrapper(App, "container h-full bg min-w-full font-sans");
