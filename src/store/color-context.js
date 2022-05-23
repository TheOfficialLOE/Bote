import React from "react";

const ColorContext = React.createContext({
    color: "noteColor1",
    border: "border-noteColor1",
    bg: "bg-noteColor1",
    changeColor: (color) => {},
    reset: () => {}
});

export default ColorContext;