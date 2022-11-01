// import axios from "axios";

export const Send_item = "Send_item";

export const sendItemfun = (id: Number) => async (dispatch: any) => {
  console.log(id)
  let res = await fetch(`https://shy-pink-seal-hem.cyclic.app/items?id=${id}`)
    .then((res) => res.json())
    .then((res) => dispatch({ type: Send_item, payload: res }));
  console.log(res);
  // dispatch({ type: Send_item, payload: res });
};
