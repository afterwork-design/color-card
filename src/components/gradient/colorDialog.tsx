import React from "react";
import {
    Box,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useToast
} from '@chakra-ui/react'

interface Props {
    colorDialogBg: string;
    colorDialogShow: boolean;
    setColorDialogShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const ColorDialog: React.FC<Props> = ({
    colorDialogBg,
    colorDialogShow,
    setColorDialogShow
}) => {
    const toast = useToast();

    const copyClick = () => {
        const text = colorDialogBg;
        navigator.clipboard.writeText(text).then(() => {
            toast({
                title: 'color copied!',
                description: text,
                status: 'success',
                duration: 1000
            });
        });
    };

    return (
        <Drawer
            isOpen={colorDialogShow}
            placement='right'
            onClose={() => setColorDialogShow(false)}
            size="lg"
        >
            <DrawerOverlay />
            <DrawerContent
                p={0}
                cursor="pointer"
                onClick={copyClick}
                title="click to copy"
            >
                <DrawerCloseButton />
                <DrawerBody p={0}>
                    <Box
                        h="100%"
                        w="100%"
                        bg={colorDialogBg}
                    />
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
};

export default ColorDialog;
