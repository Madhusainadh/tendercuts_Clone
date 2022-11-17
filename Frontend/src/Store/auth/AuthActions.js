import axios from "axios"
export const Loginactions = () => async (dispatch) => {
    try {
        const id = localStorage.getItem("email")
        const res = await axios.post("http://localhost:8080/getuser", { userid: id })
        const { data } = res
        dispatch({
            type: LOGIN_SUCCESS,
            data: data
        })


    } catch (error) {
        console.log(error.me);


    }
}
