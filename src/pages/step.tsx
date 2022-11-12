import React from "react";
import {LayoutPage} from "../typing";
import {Box} from "@chakra-ui/react";
import Header from "src/components/header";
import StepContent from "src/components/step";
import {NextSeo} from "next-seo";

const Gradient: LayoutPage = () => {
    return (
        <>
            <NextSeo
                title="阶梯色"
            />
            <Box>
                <Header activeIndex={2} />
                <StepContent />
            </Box>
        </>
    );
};

export default Gradient;
