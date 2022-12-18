const client = { allClients: [] };
export function Singleitemreducer(state = client, { type, payload }: any) {
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
