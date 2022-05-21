import {Grid, Box} from "@chakra-ui/react";
import React, {FC} from "react";

type CardColor = [string, string, string, string];
interface Props {
    colors: CardColor;
}

const Card: FC<Props> = ({colors}) => {
    return (
        <Grid
            gridTemplateColumns="repeat(2, 50%)"
            gridTemplateRows="repeat(2, 50%)"
            p="20px"
            bgColor="white"
            borderRadius="8px"
            boxShadow="5px 12px 20px rgba(36, 37, 38, 0.13)"
        >
            {colors.map((color) => (
                <Box
                    w="80px"
                    h="80px"
                    bgColor={color}
                ></Box>
            ))}
        </Grid>
    );
};

export default Card;
