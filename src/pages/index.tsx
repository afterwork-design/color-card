import React, {useState} from "react";
import {LayoutPage} from "../typing";
import {Box} from "@chakra-ui/react";
import Header from "src/components/header";
import Content from "src/components/palette/content";
import Sider from "src/components/palette/sider";
import {FourColor, paletteDefaultShowColor} from "src/server";
import {NextSeo} from "next-seo";

const Home: LayoutPage = () => {
    const [color, setColor] = useState<FourColor>(paletteDefaultShowColor);

    return (
        <>
            <NextSeo
                title="经典"
            />
            <Box>
                <Header />
                <Box>
                    <Content setColor={setColor} />
                    <Sider colors={color} />
                </Box>
            </Box>
        </>
    );
};

export default Home;
