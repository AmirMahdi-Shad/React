import { BiTrash } from "react-icons/bi";

const Product = ({ product, onDelete, onInCrement, onDeCrement, change }) => {
  const numberConcator = (Number) => {
    Number += "";
    Number = Number.replace(",", "");
    let x = Number.split(".");
    let y = x[0];
    let z = x.length > 1 ? "." + x[1] : "";
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(y)) y = y.replace(rgx, `${"$1"}${","}${"$2"}`);
    return y + z;
  };
  return (
    <div class="card w-72 md:w-96 m-10 bg-base-100 shadow-xl">
      <figure>
        <img src={`${process.env.PUBLIC_URL}${product.img}`} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{product.title}</h2>
        <p class="font-iranYekanR">
          {numberConcator(product.price * product.quantity)} ریال
        </p>
        <div class="card-actions justify-center"></div>
        <div class="btn-group mt-2 justify-center">
          <button
            class={
              product.quantity > 1
                ? "btn"
                : "btn text-white bg-red-600 hover:bg-red-500"
            }
            onClick={onDeCrement}
          >
            {product.quantity > 1 ? "«" : <BiTrash />}
          </button>
          <button class="btn">{product.quantity}</button>
          <button class="btn" onClick={onInCrement}>
            »
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
