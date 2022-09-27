import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";

function TPFYButton() {
  return (
    <Box>

    <Button bg={"#C11C2D"} _hover={{ backgroundColor: "#C11C2D" }}>
      {" "}
      <Heading size={"sm"} color={"white"}>
        ADD TO CART
      </Heading>{" "}
    </Button>
    </Box>
  );
}

export default TPFYButton;
