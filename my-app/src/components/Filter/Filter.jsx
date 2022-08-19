import React, { useState } from "react";
import { useProductsActions } from "../Providers/ProductsProvider";
import SelectComponent from "../../common/Select/SelectComponent";
import Search from "../../common/Search/Search";
import { AiFillFilter } from "react-icons/ai";

const Filter = () => {
  const dispatch = useProductsActions();
  const [filter, setFilter] = useState({ value: "All", label: "All" });
  const [sort, setSort] = useState();
  const [isShow, setIsShow] = useState(false);

  const filterHandler = (selectedOption) => {
    dispatch({ type: "filter", selectedOption });
    sort && dispatch({ type: "sort", selectedOption: sort });
    setFilter(selectedOption);
  };
  const sortHandler = (selectedOption) => {
    dispatch({ type: "sort", selectedOption });
    setSort(selectedOption);
  };

  const drawerHandler = () => {
    isShow ? setIsShow(false) : setIsShow(true);
    console.log(isShow);
  };
  const darkModeHandler = () => {
    const html = document.querySelector("html");
    html.dataset.theme === "forest"
      ? (html.dataset.theme = "wireframe")
      : (html.dataset.theme = "forest");
  };
  const filterOptions = [
    { value: "All", label: "All" },
    { value: "اکسسوری", label: "اکسسوری" },
    { value: "اسپرسو ساز", label: "اسپرسو ساز" },
    { value: "قهوه", label: "قهوه" },
  ];
  const sortOptions = [
    { value: "lowest", label: "lowest" },
    { value: "highest", label: "highest" },
  ];
  return (
    <>
      {/*  */}
      <div class="drawer h-5 ">
        <button
          onClick={() => drawerHandler()}
          class="btn btn-square btn-primary m-4 fixed left-0 z-40"
        >
          <AiFillFilter className="text-2xl" />
        </button>
        <label
          onClick={() => drawerHandler()}
          for="my-drawer"
          class={`!visible !bg-opacity-40 !opacity-95 w-screen h-screen fixed z-50 ${
            !isShow && "hidden"
          }`}
        ></label>
        <ul
          class={`transition-all menu p-4 overflow-y-auto w-80 text-base-content fixed  h-screen z-50 bg-neutral left-0 top-0 ${
            !isShow && "-left-96"
          }`}
        >
          {/* <!-- Sidebar content here --> */}
          <li>
            {" "}
            <SelectComponent
              title="order By"
              value={filter}
              onChange={filterHandler}
              options={filterOptions}
            />
          </li>
          <li>
            {" "}
            <SelectComponent
              title="sort By"
              value={sort}
              onChange={sortHandler}
              options={sortOptions}
            />
          </li>
          <li>
            {" "}
            <input
              type="checkbox"
              class={`toggle fixed bottom-9 left-20 z-50 ${
                !isShow && "hidden"
              }`}
              onClick={() => darkModeHandler()}
            />
          </li>
        </ul>
      </div>
      {/*  */}

      <section>
        <Search filter={filter} />
      </section>
    </>
  );
};

export default Filter;
