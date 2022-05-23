
import React, {useReducer} from "react";
import ColorContext from "./color-context";

const initial = {
    border: "border-noteColor1",
    bg: "bg-noteColor1"
}

const colorReducer = (state, action) => {
    if (action.type === "click") {
        return {
            border: action.value.border,
            bg: action.value.bg,
        };
    }
    else if (action.type === "reset")
        return initial
}

const ColorProvider = (props) => {

    const [state, dispatch] = useReducer(colorReducer, initial);

    const changeColor = (border, bg) => {
        dispatch({ type: "click", value: { border, bg } });
    }

    const resetColor = () => {
        dispatch({ type: "reset" });
    }

    const colorCtx = {
        border: state.border,
        bg: state.bg,
        onColorClicked: changeColor,
        reset: resetColor
    };

    return (
        <ColorContext.Provider value={colorCtx}>
            {props.children}
        </ColorContext.Provider>
    )

};

export default ColorProvider;