import axios from "axios"
import { LOGIN_SUCCESS } from "./AuthactionTypes"
export const Loginactions = () => async (dispatch) => {
    try {
        const id = localStorage.getItem("email")
        const res = await axios.post("https://backend-tendercut-production.up.railway.app/getuser", {
            userid: id,
        })
        const { data } = res

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        })

        return data
    } catch (error) {
        console.log(error.me);


    }
}
