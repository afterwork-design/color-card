import {HStack} from "@chakra-ui/react";
import React from "react";
import {Image, Link} from "@chakra-ui/react";
import {H1, H2} from "./primitives";

interface Props {
    activeIndex?: number;
}

const Header: React.FC<Props> = ({activeIndex = 0}) => {
    const pages = [
        {
            name: "Palette",
            link: "https://afterwork-design.github.io/color-card"
        },
        {
            name: "Gradient",
            link: "https://afterwork-design.github.io/color-card/gradient"
        },
        {
            name: "Step",
            link: "https://afterwork-design.github.io/color-card/step"
        }
    ];
    return (
        <HStack
            justifyContent="space-between"
            h="80px"
            p="0px 20px"
            bgColor="white"
            position="fixed"
            top="0"
            left="0"
            right="0"
            boxShadow="0px 5px 20px rgba(36, 37, 38, 0.25)"
            zIndex={1}
        >
            <HStack>
                <Image
                    src="./logo1.png"
                    alt="kaka color card"
                >
                </Image>
                <H1>
                    <Image
                        src="./logo2.png"
                        alt="kaka"
                    >
                    </Image>
                </H1>
            </HStack>
            <HStack
                columnGap="10px"
            >
                {
                    pages.map((page, index) => (
                        <Link
                            key={page.name}
                            href={page.link}
                            border="2px solid transparent"
                            p="10px 2px"
                            textDecoration="none"
                            borderBottomColor={activeIndex === index ? "#ff8d1a" : ""}
                        >
                            <H2 fontSize="16px">{page.name}</H2>
                        </Link>
                    ))
                }
                <Link
                    href="https://github.com/afterwork-design/color-card"
                    target="_blank"
                    pl="20px"
                >
                    <Image
                        src="./github.png"
                        w="25px"
                        h="25px"
                    ></Image>
                </Link>
            </HStack>
        </HStack>
    );
};

export default Header;
