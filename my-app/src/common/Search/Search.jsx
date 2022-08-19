import React, { useState } from "react";
import { useProductsActions } from "../../components/Providers/ProductsProvider";

const Search = ({ filter }) => {
  const dispatch = useProductsActions();
  const [value, setValue] = useState();

  const changeHandler = (e) => {
    dispatch({ type: "filter", selectedOption: filter });
    dispatch({ type: "search", e: e.target.value });
    setValue(e.target.value);
  };

  return (
    <div className="flex justify-center items-center w-[40rem]">
      <input
        className="m-5 input input-bordered w-full max-w-xs"
        type="text"
        placeholder="Search For ..."
        onChange={changeHandler}
        value={value}
      />
    </div>
  );
};

export default Search;
