import axios from "axios";

export const Send_item = "Send_item";

export const sendItemfun = (id: Number) => async (dispatch: any) => {
  console.log(id);

  let { data } = await axios.get(
    `https://naughty-underclothes-hare.cyclic.app/products/63562c2220326b47884660db`
  );
  dispatch({ type: Send_item, payload: data }); //);
  console.log(data);
};
