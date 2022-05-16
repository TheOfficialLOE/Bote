import React from "react";

const ColorContext = React.createContext({
    border: "border-yellow-500",
    onColorClicked: (color) => {}
});

export default ColorContext;