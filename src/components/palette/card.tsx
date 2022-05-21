import {Grid, Box, BoxProps} from "@chakra-ui/react";
import React, {FC} from "react";

type CardColor = [string, string, string, string];
interface Props {
    colors: CardColor;
}

const Card: FC<Props & BoxProps> = ({colors, ...props}) => {
    return (
        <Box
            pos="relative"
            h="0"
            pb="100%"
            cursor="pointer"
            transition="1s"
            _hover={{
                transform: "scale(0.9)"
            }}
            {...props}
        >
            <Grid
                pos="absolute"
                top="0"
                left="0"
                bottom="0"
                right="0"
                gridTemplateColumns="repeat(2, 50%)"
                gridTemplateRows="repeat(2, 50%)"
                p="20px"
                bgColor="white"
                borderRadius="8px"
                boxShadow="5px 12px 20px rgba(36, 37, 38, 0.13)"
            >
                {colors.map((color, index) => (
                    <Box
                        key={`${color}${index}`}
                        bgColor={color}
                    ></Box>
                ))}
            </Grid>
        </Box>
    );
};

export default Card;
