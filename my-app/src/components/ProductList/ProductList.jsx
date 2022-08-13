import Product from "../Product/Product";
import { useProducts, useProductsActions } from "../Providers/ProductsProvider";

const ProductList = (props) => {
  const products = useProducts();
  const dispatch = useProductsActions();
  const renderProduct = () => {
    if (products.length === 0) return <div>There is no s in cart</div>;
    return products.map((product) => (
      <Product
        product={product}
        onDelete={() => dispatch({ type: "remove", id: product.id })}
        onInCrement={() => dispatch({ type: "increment", id: product.id })}
        onDeCrement={() => dispatch({ type: "decrement", id: product.id })}
        change={(e) => dispatch({ type: "edit", id: product.id, event: e })}
      />
    ));
  };
  return (
    <div className="flex flex-col">
      {renderProduct()}
      {!products.length && <div>go to Shopping</div>}
    </div>
  );
};

export default ProductList;
