
import React, {useReducer} from "react";
import ColorContext from "./color-context";

const colorReducer = (state, action) => {
    if (action.type === "click") {
        return {
            border: action.value
        };
    }
}

const ColorProvider = (props) => {

    const [state, dispatch] =useReducer(colorReducer, {
        border: "border-l-yellow-500"
    });

    const changeColor = (color) => {
        dispatch({ type: "click", value: color });
    }

    const colorCtx = {
        border: state.border,
        onColorClicked: changeColor
    };

    return (
        <ColorContext.Provider value={colorCtx}>
            {props.children}
        </ColorContext.Provider>
    )

};

export default ColorProvider;