import React, { createContext, useContext } from "react";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { auth } from "./Firebase";
export const userAuthContext = createContext({});
type prop = {
  children: String;
};
export function UserAuthContextProvider({ children }: prop) {
  function setupRecaptcha(number: any) {
    const recaptchaverifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
    recaptchaverifier.render();
    return signInWithPhoneNumber(auth, number, recaptchaverifier);
  }
  return (
    <userAuthContext.Provider value={{ setupRecaptcha }}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
