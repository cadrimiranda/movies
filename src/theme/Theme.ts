import { extendTheme } from "@chakra-ui/react";
import globalStyles from "./Global";

const theme = extendTheme({
  styles: globalStyles,
});

export default theme;
