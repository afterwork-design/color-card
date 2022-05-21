import {Flex, Grid} from "@chakra-ui/react";
import React, {FC} from "react";
import {four, FourColor} from "src/server";
import Card from "./card";

interface Props {
    setColor: React.Dispatch<React.SetStateAction<FourColor>>;
}

const Content: FC<Props> = ({setColor}) => {
    return (
        <Grid
            mt="80px"
            mr="240px"
            p={["5px", "20px", "40px", "80px"]}
            flexWrap="wrap"
            rowGap="40px"
            columnGap="40px"
            gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(5, 1fr)", "repeat(6, 1fr)"]}
        >
            {
                four.colors.map((color) => (
                    <Card
                        key={color.toString()}
                        colors={color}
                        onClick={() => setColor(color)}
                    />
                ))
            }
        </Grid>
    )
};

export default Content;
