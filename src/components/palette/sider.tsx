import {VStack, Box} from "@chakra-ui/react";
import React, {FC} from "react";
import {RounderBox} from "src/components/primitives";

interface Props {
    colors: string[];
}

const Sider: FC<Props> = ({colors}) => {
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
            rowGap="40px"
            boxShadow="5px 12px 20px rgba(36, 37, 38, 0.25)"
        >
            {
                colors.map((color) => (
                    <RounderBox
                        display="flex"
                        flexDir="column"
                        flexGrow={1}
                        overflow="hidden"
                        alignItems="center"
                        w="100%"
                        boxShadow="1px 1px 12px rgba(36, 37, 38, 0.25)"
                    >
                        <Box
                            bgColor={color}
                            minH="40px"
                            w="100%"
                            flexGrow={1}
                        >
                        </Box>
                        <Box>
                            {color}
                        </Box>
                    </RounderBox>
                ))
            }
        </VStack>
    );
};

export default Sider;
