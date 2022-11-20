import React, { createContext, useState } from "react";
export const CartContext = createContext();
function AuthContextProvider({ children }) {
  const [cartcono, setcartcono] = useState(false);
  return (
    <CartContext.Provider value={{ setcartcono, cartcono }}>
      {children}
    </CartContext.Provider>
  );
}

export default AuthContextProvider;
