import { LOGIN_SUCCESS } from "./AuthactionTypes";

const initState = {
  loading: false,
  error: false,
  data: {},
};
export const AuthReducer = (state = initState, { type, payload }) => {

  switch (type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload
      }
    }
    default: {
      return state
    }

  }
}
