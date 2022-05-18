
import React, {useState, useContext} from "react";
import msclContext from "../store/color-context";

const ColorIcon = (props) => {

    const colorCtx = useContext(msclContext)

    const iconClickHandler = () => {
        colorCtx.onColorClicked(props.border, props.bg)
    };

    return (
        <div className={`w-10 h-10 mr-2 border-4 rounded-full p-1 cursor-pointer ${props.border} text-center`} onClick={iconClickHandler}>
            <div className={`w-6 h-6 rounded-full ${props.bg}`}>
                {colorCtx.border === props.border && <i className={`fa-xs fa-solid fa-check ${props.color && "text-black"}`}></i>}
            </div>
        </div>
    )
};

export default ColorIcon;