import React from "react";

const ColorContext = React.createContext({
    border: "border-yellow-500",
    bg: "bg-yellow-500",
    onColorClicked: (color, bg) => {}
});

export default ColorContext;