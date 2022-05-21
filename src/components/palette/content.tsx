import {Flex, Grid} from "@chakra-ui/react";
import React from "react";
import {four} from "src/server";
import Card from "./card";

const Content = () => {
    return (
        <Grid
            mt="80px"
            mr="240px"
            p={["5px", "20px", "40px", "80px"]}
            flexWrap="wrap"
            rowGap="40px"
            columnGap="40px"
            gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(5, 1fr)"]}
        >
            {
                four.colors.map((color) => (<Card colors={color} />))
            }
        </Grid>
    )
};

export default Content;
