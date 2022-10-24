import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Flex,
  Heading,
} from "@chakra-ui/react";
function TenderCutsAccordion() {
  return (
    <Flex mt={"10"} direction={"column"} align={"center"}>
      <Heading size={"lg"}>TenderCuts Farm Fresh Meat & Fresh Fish </Heading>
      <Accordion m={"auto"} w={["100%", "95%", "90%", "85%"]}>
        {/* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */}
        <AccordionItem
          mb={"4"}
          borderColor={"gray"}
          borderRadius={"lg"}
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
        >
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text color={"black"}>
                  Freshly cut,freshly packed meat delivered to your doorstep
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text color={"black"}>
              Your search for farm-fresh, high-quality meat ends with
              TenderCuts. Order the best, locally-sourced mutton, chicken, eggs,
              fish and seafood from your friendly neighbourhood meat store –
              TenderCuts. Enjoy lightning-fast home delivery on every order.
              Order meat online with TenderCuts to whip up a feast fit for a
              king.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem
          mb={"4"}
          borderColor={"gray"}
          borderRadius={"lg"}
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
        >
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text color={"black"}>Deliciousness in every bite</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>
              TenderCuts offers a vast catalogue of fresh and juicy meat
              products online. Whether you wish to place an order for fresh meat
              delivery or an assortment of lip-smacking cold cuts, non-veg
              snacks, pickles, dressings, and spices, you can find it all. At
              TenderCuts, we also offer a range of scrumptious ready-to-cook,
              freshly marinated meat products with authentic flavours. Also,
              sample our all-in-one Chicken and Mutton Biryani Kits to satiate
              those Biryani cravings in minutes.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem
          mb={"4"}
          borderColor={"gray"}
          borderRadius={"lg"}
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
        >
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text color={"black"}>
                  Our Freshness Tracker Guarantees Fresh meat delivery
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text color={"black"}>
              At TenderCuts, we do not believe in pre-packaging meats. We begin
              processing the order – from cleaning and cutting to packing the
              meat in vacuum-sealed bags only after you place the order. What’s
              more, you can track your order every step of the way with the
              TenderCuts Freshness Tracker built into our meat online delivery
              app.
            </Text>
          </AccordionPanel>
        </AccordionItem>{" "}
        <AccordionItem
          mb={"4"}
          borderColor={"gray"}
          borderRadius={"lg"}
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
        >
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text color={"black"}>Download the TenderCuts App</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text color={"black"}>
              Placing your meat online delivery order is as easy as one, two,
              three. Download the TenderCuts App on your smartphone. Browse
              through our extensive range of fresh meat products, add them to
              your cart and place your order after choosing your preferred
              payment mode. Sit back and relax until we deliver it to your
              doorstep or track it in real-time on the app. Now you can order
              meat online and choose your preferred delivery slot. Enjoy
              exclusive discounts and deals on every TenderCuts order.
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
}

export default TenderCutsAccordion;
