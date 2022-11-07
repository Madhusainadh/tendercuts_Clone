// import axios from "axios";

import axios from "axios";
// import { Category_Items } from "../CategoryItems/CategoryItems.Module";


export const Item_Category = "Item_Category";

export const ItemCategoryfun = (name: any) => async (dispatch: any) => {
  console.log(name)
  let res = await axios(`https://shy-pink-seal-hem.cyclic.app/items?q=${name}`)
    // dispatch({ type: Item_Category, payload: res });
  console.log(res.data);
  dispatch({ type: Item_Category, payload: res.data });
// dispatch()
};
