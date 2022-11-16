import React from "react";

import Allitems from "../Itempage/Allitems";
import SingleItem from "../SingleItemPage/SingleItem";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path={"/Item/:id"} element={<SingleItem />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/phone" element={<PhoneSignup />} />
      <Route path={"/Allitems/:type"} element={<Allitems />} /> 
    </Routes>
    //madhu
  );
};

export default AllRoutes;
