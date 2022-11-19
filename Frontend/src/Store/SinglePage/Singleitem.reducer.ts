//  const Send_item = require("./Singleitem.Module")

const client = { allClients: [] };
export function Singleitemreducer(state = client, { type, payload }: any) {
  //  console.log(payload)
  switch (type) {
    case "Send_item": {
      console.log(payload);
      return { ...state, allClients: payload };
    }
    default: {
      return state;
    }
  }
}
