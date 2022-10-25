import React, { createContext, useContext, useState } from "react";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { auth } from "./Firebase";
export const userAuthContext = createContext({});
type prop = {
  children: String;
};
type huru = {
  setupRecaptcha: Function;
name: string;
  setname: Function;
};
export function UserAuthContextProvider({ children }: prop) {
  const [name, setname] = useState("");
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
    <userAuthContext.Provider value={{ setupRecaptcha, name, setname }}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
