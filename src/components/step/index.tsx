import React, {FC} from "react";
import {HStack, VStack, Box} from "@chakra-ui/react";
import {step} from "src/server";
import {hexToRGB} from "src/util/colorConvert";

const {colors} = step;
const copiedText = "copied!";

const Step: FC = () => {

    const colorClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
        const divEle = e.target as HTMLDivElement;
        const colorText = divEle.innerText;
        if (colorText === copiedText) {
            return;
        }
        navigator.clipboard.writeText(colorText).then(() => {
            divEle.innerText = copiedText;

            setTimeout(() => {
                divEle.innerText = colorText;
            }, 1000);
        });
    };

    return (
        <VStack
            mt="130px"
            mb="130px"
            rowGap="50px"
            p="15px"
        >
            {
                colors.map((stpeColor) => (
                    <HStack
                        key={stpeColor.reduce((v1, v2) => v1 + v2)}
                        columnGap="10px"
                        rowGap="25px"
                        p="15px"
                        boxShadow="5px 12px 20px rgba(36, 37, 38, 0.13)"
                        borderRadius="8px"
                        flexWrap="wrap"
                    >
                        {
                            stpeColor.map((hex) => (
                                <VStack
                                    alignItems="flex-start"
                                    fontSize="14px"
                                    color="rgba(73, 80, 87, 1)"
                                    m="0 !important"
                                    key={hex}
                                >
                                    <Box
                                        bgColor={hex}
                                        w="100%"
                                        flexGrow={1}
                                        minW="120px"
                                        minH="100px"
                                    >
                                    </Box>
                                    <Box
                                        onClick={colorClick}
                                        cursor="pointer"
                                        mt="0.3rem !important"
                                    >
                                        {hex}
                                    </Box>
                                    <Box
                                        onClick={colorClick}
                                        cursor="pointer"
                                        mt="0.3rem !important"
                                    >
                                        {hexToRGB(hex)}
                                    </Box>
                                </VStack>
                            ))
                        }
                    </HStack>
                ))
            }
        </VStack>
    );
};

export default Step;
