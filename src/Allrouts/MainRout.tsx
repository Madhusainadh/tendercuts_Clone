import React from 'react'

import Allitems from '../Itempage/Allitems'
import SingleItem from '../SingleItemPage/SingleItem'
import { BrowserRouter, Routes, Route } from "react-router-dom";
const MainRout = () => {
  return (
    <Routes>
        <Route path={"/Item"} element={<SingleItem/>} />
        <Route path={"/"} element={<Allitems/>} />

       
    </Routes>
  )
}

export default MainRout