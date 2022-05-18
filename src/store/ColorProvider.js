
import React, {useReducer} from "react";
import ColorContext from "./color-context";

const colorReducer = (state, action) => {
    if (action.type === "click") {
        return {
            border: action.value.border,
            bg: action.value.bg,
        };
    }
}

const ColorProvider = (props) => {

    const [state, dispatch] =useReducer(colorReducer, {
        border: "border-yellow-500",
        bg: "bg-yellow-500"
    });

    const changeColor = (border, bg) => {
        dispatch({ type: "click", value: { border, bg } });
    }

    const colorCtx = {
        border: state.border,
        bg: state.bg,
        onColorClicked: changeColor
    };

    return (
        <ColorContext.Provider value={colorCtx}>
            {props.children}
        </ColorContext.Provider>
    )

};

export default ColorProvider;