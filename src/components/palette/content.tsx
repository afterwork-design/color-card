import {Flex} from "@chakra-ui/react";
import React from "react";
import {four} from "src/server";
import Card from "./card";

const Content = () => {
    return (
        <Flex
            mt="80px"
            mr="240px"
            p="80px"
            flexWrap="wrap"
            rowGap="40px"
            columnGap="40px"
        >
            {
                four.colors.map((color) => (<Card colors={color} />))
            }
        </Flex>
    )
};

export default Content;
