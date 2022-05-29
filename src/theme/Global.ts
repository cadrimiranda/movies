export default {
  global: () => ({
    "html,body": {
      MozOsxFontSmoothing: "grayscale",
      WebkitFontSmoothing: "antialiased",
      backgroundColor: "#272b30",
    },
    "body::-webkit-scrollbar,html::-webkit-scrollbar,div::-webkit-scrollbar": {
      width: "8px",
      height: "6px",
      backgroundColor: "transparent",
      marginRight: "8px",
      marginTop: "3px",
      marginBottom: "3px",
    },
    "body::-webkit-scrollbar-thumb,html::-webkit-scrollbar-thumb, div::-webkit-scrollbar-thumb":
      {
        borderRadius: "4px",
        backgroundColor: "#eaeaea",
        _hover: {
          backgroundColor: "#eaeaea",
        },
      },
    "input,button,a": {
      outline: "none",
      _focus: {
        outline: "none !important",
        boxShadow: "none !important",
      },
    },
  }),
};
