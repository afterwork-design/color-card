import React from "react";
import {Grid} from "@chakra-ui/react";
import {gradient} from "src/server";
import Card from "./card";
import {makeLinearGradient} from "src/util/makeGradient";

const {colors: gradientColors} = gradient;

const Gradient = () => {
    return (
        <Grid
            rowGap="40px"
            columnGap="40px"
            m="120px auto"
            maxW={["1000px", "1200px", "1400px"]}
            pl="15px"
            pr="15px"
            gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(5, 1fr)"]}
        >
            {
                gradientColors.map((color) => {
                    const key = makeLinearGradient(color);
                    return  <Card key={key} gradientColor={color} />;
                })
            }
        </Grid>
    );
};

export default Gradient;
