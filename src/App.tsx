// import logo from './logo.svg';

import { NavBar1 } from "./Component/NavBar1";
import { Navbar2 } from "./Component/Navbar2";
import ShopByMain from "./ShopbyCategory/ShopByMain";
import TopPickMain from "./TopPicksForYou/TopPickMain";

function App() {
  return (
    <div className="App">
      <NavBar1 />
      <Navbar2 />
      <ShopByMain />
      <TopPickMain/>
    </div>
  );
}

export default App;
