import React from "react";

const ColorContext = React.createContext({
    border: "border-l-yellow-500",
    onColorClicked: (color) => {}
});

export default ColorContext;