import { Button, Input } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
type prop = {
  name: string;
  phoneNumber: string;
  address: string;
};
function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState<prop>({
    name: "",
    phoneNumber: "",
    address: "",
  });
  const handleSubmit = () => {
    axios
      .post("http://localhost:8080/users", values)
      .then((res) => {
        alert("thanks for sign up");
      })
      .catch((er) => alert(er.message));
  };
  return (
    <div>
      <Input
        minW={"90%"}
        p={"10"}
        placeholder="name"
        type="text"
        onChange={(e) =>
          setValues((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <Input
        minW={"90%"}
        p={"10"}
        placeholder="phone Number"
        type="number"
        onChange={(e) =>
          setValues((prev) => ({ ...prev, phoneNumber: e.target.value }))
        }
      />

      <Input
        minW={"90%"}
        p={"10"}
        type={showPassword ? "text" : "password"}
        placeholder="address"
        onChange={(e) =>
          setValues((prev) => ({ ...prev, address: e.target.value }))
        }
      />

      <Button
        onClick={handleSubmit}
        color={"white"}
        size={"lg"}
        borderRadius={"3xl"}
        bg={"#25CF60"}
        _hover={{ bgColor: "#1da44c" }}
      >
        Sign up for free
      </Button>
    </div>
  );
}

export default Signup;
