// import axios from "axios";

import axios from "axios";
// import { Category_Items } from "../CategoryItems/CategoryItems.Module";


export const Item_Category = "Item_Category";

export const ItemCategoryfun = (name: any) => async (dispatch: any) => {
 
  // let res = await axios(`https://shy-pink-seal-hem.cyclic.app/items?q=${name}`)
  let res = await axios.get(`http://localhost:8080/products?search=${name}`)  
  // dispatch({ type: Item_Category, payload: res });
 
  dispatch({ type: Item_Category, payload: res.data });

};
