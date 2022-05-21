import React, {useState} from "react";
import {LayoutPage} from "../typing";
import {Box} from "@chakra-ui/react";
import Header from "src/components/header";
import Content from "src/components/palette/content";
import Sider from "src/components/palette/sider";
import {FourColor, paletteDefaultShowColor} from "src/server";

const Home: LayoutPage = () => {
    const [color, setColor] = useState<FourColor>(paletteDefaultShowColor);

    return (
        <Box>
            <Header />
            <Box>
                <Content setColor={setColor} />
                <Sider colors={color} />
            </Box>
        </Box>
    );
};

export default Home;
