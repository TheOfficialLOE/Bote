import React, {useContext, useReducer} from "react";

const MiscellaneousContext = React.createContext({
    color: "noteColor1",
    border: "border-noteColor1",
    bg: "bg-noteColor1",
    tag: "Notes",
    changeColor: (color) => {},
    changeTag: (tag) => {},
    reset: () => {}
});


const initial = {
    color: "noteColor1",
    border: "border-noteColor1",
    bg: "bg-noteColor1",
    tag: "Notes"
}

const miscellaneousReducer = (state, action) => {
    if (action.type === "changeColor") {
        return {
            color: action.value,
            border: "border-" + action.value,
            bg: "bg-" + action.value,
            tag: state.tag
        };
    }
    else if (action.type === "changeTag") {
        return {
            color: state.color,
            border: state.border,
            bg: state.bg,
            tag: action.value
        };
    }
    else if (action.type === "reset")
        return initial;
}

const MiscellaneousProvider = (props) => {

    const [state, dispatch] = useReducer(miscellaneousReducer, initial);

    const changeColor = (color) => {
        dispatch({ type: "changeColor", value: color });
    }

    const changeTag = (tag) => {
        dispatch({ type: "changeTag", value: tag })
    }

    const resetColor = () => {
        dispatch({ type: "reset" });
    }

    const miscellaneousCtx = {
        color: state.color,
        border: state.border,
        bg: state.bg,
        tag: state.tag,
        changeColor,
        changeTag,
        reset: resetColor
    };

    return (
        <MiscellaneousContext.Provider value={miscellaneousCtx}>
            {props.children}
        </MiscellaneousContext.Provider>
    )

};

const useMiscellaneous = () => {
    return useContext(MiscellaneousContext);
}

export {MiscellaneousProvider, useMiscellaneous}