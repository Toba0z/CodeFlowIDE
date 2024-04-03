import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
    config:{
        initialColorMode: "dark",
        useSystemColorMode: true,
    },
});
export default Theme;