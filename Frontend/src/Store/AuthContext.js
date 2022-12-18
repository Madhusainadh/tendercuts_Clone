import { createContext, useState } from "react";
export const CartContext = createContext();
function AuthContextProvider({ children }) {
  const [cartcono, setcartcono] = useState(false);
  const [totalw, settotalw] = useState(0);
  return (
    <CartContext.Provider value={{ setcartcono, cartcono, totalw, settotalw }}>
      {children}
    </CartContext.Provider>
  );
}

export default AuthContextProvider;
