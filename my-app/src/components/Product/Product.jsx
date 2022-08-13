import { BiTrash } from "react-icons/bi";

const Product = ({ product, onDelete, onInCrement, onDeCrement, change }) => {
  return (
    <div className="m-4 p-4 border-1 border-gray-400 rounded-lg w-58 sm:w-[60rem] flex  flex-col  sm:flex-row justify-around items-center bg-[#fff]">
      <p>product name : {product.name} course</p>
      <p>
        product price :
        <span className="font-bold">{product.price * product.quantity}</span>$
      </p>
      <input
        className="text-purple-600 p-1  border border-purple-500 rounded-md"
        type="text"
        onChange={change}
        value={product.name}
      />
      <button
        onClick={onDeCrement}
        className="bg-purple-200 border border-purple-700 rounded-md py-1 px-2 text-purple-600 w-8 h-8 flex justify-center items-center text-2xl"
      >
        {product.quantity > 1 ? "-" : <BiTrash />}
      </button>
      <span className="bg-purple-200 text-purple-700 w-6 h-6 rounded-full flex justify-center items-center">
        {product.quantity}
      </span>
      <button
        className="bg-purple-200 border border-purple-700 w-8 h-8  flex justify-center items-center  rounded-md  text-purple-600 text-2xl"
        onClick={onInCrement}
      >
        +
      </button>
      <button
        onClick={onDelete}
        className="bg-[#f00e0e] rounded-sm sha px-2 text-white shadow-2xl shadow-[#f00e0e] h-7"
      >
        <BiTrash />
      </button>
    </div>
  );
};

export default Product;
