import { useContext, useEffect } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useConst, useToast } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { CartContext } from "../Store/AuthContext";

const style = {
  shape: "pill",
  color: "blue",
  layout: "horizontal",
  label: "pay",
};

// Custom component to wrap the PayPalButtons and handle currency changes
export const ButtonWrapper = ({ currency, showSpinner }) => {
  const navigate = useNavigate();
  const toast = useToast();
  const { totalw } = useContext(CartContext);
  let huru=(totalw/84).toFixed(0)
  
  
  const amount = `${huru}`;

  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(function () {
            // Your code here after capture the order
            navigate("/");
            toast({
              title: "Payment successfull !",

              status: "success",
              duration: 9000,
              isClosable: true,
            });
          });
        }}
      />
    </>
  );
};
