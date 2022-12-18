import axios from "axios";

export const Item_Category = "Item_Category";

export const ItemCategoryfun = (name: any) => async (dispatch: any) => {
  let res = await axios.get(
    `https://backend-tendercut-production.up.railway.app/products?search=${name}`
  );

  dispatch({ type: Item_Category, payload: res.data });
};
