// import axios from "axios";

export const Send_item = "Send_item";

export const sendItemfun = (id: Number) => async (dispatch: any) => {
  let res = await fetch(`https://shy-pink-seal-hem.cyclic.app/items?id=${id}`)
    .then((res) => res.json())
    .then((res) => res);
  console.log(res.data);
  dispatch({ type: Send_item, payload: res.data });
};
