import React from "react";

const ColorContext = React.createContext({
    border: "border-noteColor1",
    bg: "bg-noteColor1",
    onColorClicked: (color, bg) => {},
    reset: () => {}
});

export default ColorContext;