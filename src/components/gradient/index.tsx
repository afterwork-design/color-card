import React, {useCallback, useState} from "react";
import {Grid} from "@chakra-ui/react";
import {gradient} from "src/server";
import Card from "./card";
import {makeLinearGradient} from "src/util/makeGradient";
import ColorDialog from "./colorDialog";

const {colors: gradientColors} = gradient;

const Gradient = () => {
    const [colorDialogShow, setColorDialogShow] = useState<boolean>(false);
    const [colorDialogBg, setColorDialogBg] = useState<string>("");

    const setColorDialogBgCallback = useCallback((color: string) => {
        setColorDialogBg(color);
        setColorDialogShow(true);
    }, []);

    return (
        <>
            <Grid
                rowGap="40px"
                columnGap="40px"
                m="120px auto"
                maxW={["1000px", "1200px", "1400px"]}
                pl="15px"
                pr="15px"
                gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)", "repeat(5, 1fr)", "repeat(6, 1fr)"]}
            >
                {
                    gradientColors.map((color) => {
                        const key = makeLinearGradient(color);
                        return (
                            <Card
                                key={key}
                                gradientColor={color}
                                setColorDialogBg={setColorDialogBgCallback}
                            />
                        );
                    })
                }
            </Grid>
            <ColorDialog
                colorDialogBg={colorDialogBg}
                colorDialogShow={colorDialogShow}
                setColorDialogShow={setColorDialogShow}
            />
        </>
    );
};

export default Gradient;
