import { NavBar1 } from "./Navbar/NavBar1";
import { Navbar2 } from "./Navbar/Navbar2";
import AllRoutes from "./Allrouts/AllRoutes";
import { UserAuthContextProvider } from "./Home/UserAuthContext";
import BottomFooter from "./Footer/BottomFooter";
import { Topfooter } from "./Footer/Topfooter";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PayButton from "./PaypalButton/PayButton";
function App() {
  const [userdata, setuserdata] = useState([]);
  let str = useSelector((store) => store.Auth);
  // const getdata = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:8080/cart");
  //     console.log("res:", res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(() => {
    const { data } = str;
    setuserdata(data);
  }, [str, userdata]);

  axios.interceptors.request.use(
    function (config) {
      const { headers } = config;

      const id = localStorage.getItem("email");

      headers.userid = id;

      return config;
    },
    function (err) {
      return Promise.reject(err);
    }
  );

  return (
    <div className="App">
      <UserAuthContextProvider>
        {/* <PayButton /> */}
        <NavBar1 />
        <Navbar2 />
        <AllRoutes />
        <Topfooter />
        <BottomFooter />
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
