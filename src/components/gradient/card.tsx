import {Box, BoxProps, HStack, Image, VStack, useToast} from "@chakra-ui/react";
import React, {FC} from "react";
import {GradientColor} from "src/server";
import {RounderBox} from "../primitives";
import {makeLinearGradient} from "src/util/makeGradient";

interface Props {
    gradientColor: GradientColor;
}

const Card: FC<Props & BoxProps> = ({gradientColor, ...props}) => {
    const toast = useToast();

    const copyClick: React.MouseEventHandler<HTMLDivElement> = () => {
        const text = makeLinearGradient(gradientColor);
        navigator.clipboard.writeText(text).then(() => {
            toast({
                title: 'color copied!',
                description: text,
                status: 'success',
                duration: 1000
            });
        });
    };

    const copyColorItem = (color: string) => {
        navigator.clipboard.writeText(color).then(() => {
            toast({
                title: 'color copied!',
                description: color,
                status: 'success',
                duration: 1000
            });
        });
    };

    return (
        <RounderBox
            pos="relative"
            h="0"
            pb="calc(100% + 40px)"
            overflow="hidden"
            boxShadow="5px 12px 20px rgba(36, 37, 38, 0.13)"
            {...props}
        >
            <VStack
                pos="absolute"
                left="0"
                top="0"
                right="0"
                bottom="0"
                bg="white"
                justifyContent="space-between"
            >
                <Box
                    w="100%"
                    flexGrow={1}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Box
                        className="grad"
                        bg={makeLinearGradient(gradientColor)}
                        w="60%"
                        h="0"
                        pb="60%"
                        borderRadius="20px"
                    />
                </Box>
                <HStack
                    justifyContent="space-between"
                    bgColor="#f5f5f5"
                    w="100%"
                    h="40px"
                    p="0 20px"
                >
                    <HStack>
                        {
                            gradientColor.colors.map((color) => (
                                <Box
                                    w="12px"
                                    h="12px"
                                    bgColor={color.color}
                                    key={`${color.color} ${color.pos}`}
                                    borderRadius="6px"
                                    cursor="pointer"
                                    onClick={() => copyColorItem(color.color)}
                                >
                                </Box>
                            ))
                        }
                    </HStack>
                    <Box>
                        <Image
                            src="./copy.png"
                            cursor="pointer"
                            onClick={copyClick}
                        />
                    </Box>
                </HStack>
            </VStack>
        </RounderBox>
    );
};

export default Card;
