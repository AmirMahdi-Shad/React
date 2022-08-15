import React, { useState } from "react";
import { useProductsActions } from "../Providers/ProductsProvider";
import Select from "react-select";

const Filter = () => {
  const dispatch = useProductsActions();
  const [value, setValue] = useState();
  const [sort, setSort] = useState();
  const changeHandler = (selectedOption) => {
    dispatch({ type: "filter", selectedOption });
    dispatch({ type: "sort", selectedOption: sort });
    setValue(selectedOption);
  };
  const sortHandler = (selectedOption) => {
    dispatch({ type: "sort", selectedOption });
    setSort(selectedOption);
  };
  const options = [
    { value: "All", label: "All" },
    { value: "xs", label: "xs" },
    { value: "s", label: "s" },
    { value: "m", label: "m" },
    { value: "l", label: "l" },
    { value: "xl", label: "xl" },
    { value: "xxl", label: "xxl" },
    { value: "xxxl", label: "xxxl" },
  ];
  const sortOptions = [
    { value: "lowest", label: "lowest" },
    { value: "highest", label: "highest" },
  ];
  return (
    <div className="flex justify-between w-[50rem] m-5">
      <p>filter products based on:</p>
      <div className="flex items-center">
        <span className="block mr-4">order by</span>
        <Select
          className="w-52 mx-2"
          value={value}
          onChange={changeHandler}
          options={options}
        />
        <span className="block mr-4">sort by</span>
        <Select
          className="w-52 mx-2"
          value={sort}
          onChange={sortHandler}
          options={sortOptions}
        />
      </div>
    </div>
  );
};

export default Filter;
