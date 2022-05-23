
import React, {useReducer} from "react";
import ColorContext from "./color-context";

const initial = {
    color: "noteColor1",
    border: "border-noteColor1",
    bg: "bg-noteColor1"
}

const colorReducer = (state, action) => {
    if (action.type === "click") {
        return {
            color: action.value,
            border: "border-" + action.value,
            bg: "bg-" + action.value,
        };
    }
    else if (action.type === "reset")
        return initial
}

const ColorProvider = (props) => {

    const [state, dispatch] = useReducer(colorReducer, initial);

    const changeColor = (color) => {
        dispatch({ type: "click", value: color });
    }

    const resetColor = () => {
        dispatch({ type: "reset" });
    }

    const colorCtx = {
        color: state.color,
        border: state.border,
        bg: state.bg,
        changeColor,
        reset: resetColor
    };

    return (
        <ColorContext.Provider value={colorCtx}>
            {props.children}
        </ColorContext.Provider>
    )

};

export default ColorProvider;