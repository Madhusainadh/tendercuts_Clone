// import axios from "axios";

import axios from "axios";

export const Send_item = "Send_item";

export const sendItemfun = (id: Number) => async (dispatch: any) => {
  console.log(id)
  // let res = await fetch(`https://shy-pink-seal-hem.cyclic.app/items?id=${id}`)
  let {data} = await axios.get(`https://backend-tendercut-production.up.railway.app/products/63562c2220326b47884660db`)
    // .then((res) => res.json())
    // .then((res) => 
    dispatch({ type: Send_item, payload: data });//);
  console.log(data);
  // dispatch({ type: Send_item, payload: res });
};
