import { Box, Button, Heading } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

function TPFYButton() {
  const navigate = useNavigate();
  return (
    <Box>
      <Button
        onClick={() => navigate("/Allitems/Chicken")}
        bg={"#C11C2D"}
        _hover={{ backgroundColor: "#C11C2D" }}
      >
        {" "}
        <Heading size={"sm"} color={"white"}>
          ADD TO CART
        </Heading>{" "}
      </Button>
    </Box>
  );
}

export default TPFYButton;
