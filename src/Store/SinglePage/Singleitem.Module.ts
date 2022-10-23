import axios from "axios";

export const Send_item = "Send_item";

export const sendItemfun = (id:Number) =>async (dispatch:any) => {
// console.log(id)
// dispatch({ type: Send_item, payload: id});

    let res = await axios.get(`https://shy-pink-seal-hem.cyclic.app/items?id=${id}`);
  console.log(res.data)
dispatch({type:Send_item,payload:res.data})
}