import React from "react";
import {LayoutPage} from "../typing";
import {Box} from "@chakra-ui/react";
import Header from "src/components/header";
import GradientContent from "src/components/gradient";

const Gradient: LayoutPage = () => {
    return (
        <Box>
            <Header activeIndex={1} />
            <GradientContent />
        </Box>
    );
};

export default Gradient;
