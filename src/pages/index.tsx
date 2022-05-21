import {LayoutPage} from "../typing";
import {Box, HStack} from "@chakra-ui/react";
import Header from "src/components/header";
import Content from "src/components/palette/content";
import Sider from "src/components/palette/sider";

const Home: LayoutPage = () => {
    return (
        <Box>
            <Header />
            <Box>
                <Content />
                <Sider colors={["#99ffca", "#fcf7f7", "#dadada", "#324968"]} />
            </Box>
        </Box>
    );
};

export default Home;
