import { useProducts } from "../Providers/ProductsProvider";
const NavBar = () => {
  const products = useProducts();
  const totalCount = products.filter((p) => p.quantity > 0).length;
  return (
    <header className="w-full bg-[#efefef] pt-5 h-16 text-center flex justify-center items-center">
      <h1 className="text-2xl mb-4">Shopping App</h1>
      <span className="w-6 h-6 bg-purple-200 text-purple-700 flex justify-center items-center rounded-full ml-3">
        {totalCount}
      </span>
    </header>
  );
};

export default NavBar;
