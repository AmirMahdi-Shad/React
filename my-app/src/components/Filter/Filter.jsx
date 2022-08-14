import { computeHeadingLevel } from "@testing-library/react";
import { useProductsActions } from "../Providers/ProductsProvider";

const Filter = () => {
    const dispatch = useProductsActions()
    return ( 
        <div>
            <p>filter products based on:</p>
            <div>
                order by 
                <select onChange={(e)=> dispatch({type:"filter",e:e})}>
                    <option value="All">All</option>
                    <option value="xs">xs</option>
                    <option value="s">s</option>
                    <option value="m">m</option>
                    <option value="l">l</option>
                    <option value="xl">xl</option>
                    <option value="xxl">xxl</option>
                </select>
            </div>
        </div>
     );
}
 
export default Filter;