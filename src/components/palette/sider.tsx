import {VStack, Box} from "@chakra-ui/react";
import React, {FC} from "react";
import {RounderBox} from "src/components/primitives";
import {hexToRGB} from "src/util/colorConvert";

interface Props {
    colors: string[];
}

const copiedText = "copied!";

const Sider: FC<Props> = ({colors}) => {

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
            justifyContent="space-between"
            w="240px"
            position="fixed"
            right="0"
            top="80px"
            bottom="0"
            bgColor="white"
            p="40px"
            rowGap={["10px", "15px", "18px", "20px", "25px", "40px"]}
            boxShadow="5px 12px 20px rgba(36, 37, 38, 0.25)"
            overflow="auto"
        >
            {
                colors.map((color, index) => (
                    <RounderBox
                        key={`${color}${index}`}
                        display="flex"
                        flexDir="column"
                        flexGrow={1}
                        overflow="hidden"
                        alignItems="center"
                        w="100%"
                        boxShadow="1px 1px 12px rgba(36, 37, 38, 0.25)"
                        rowGap="5px"
                        paddingBottom="5px"
                        minHeight="100px"
                    >
                        <Box
                            bgColor={color}
                            minH="10px"
                            w="100%"
                            flexGrow={1}
                        >
                        </Box>
                        <Box
                            onClick={colorClick}
                            cursor="pointer"
                            border="1px solid #ebebeb"
                            p="5px"
                            borderRadius="4px"
                        >
                            {color}
                        </Box>
                        <Box
                            onClick={colorClick}
                            cursor="pointer"
                            border="1px solid #ebebeb"
                            p="5px"
                            borderRadius="4px"
                        >
                            {hexToRGB(color)}
                        </Box>
                    </RounderBox>
                ))
            }
        </VStack>
    );
};

export default Sider;
