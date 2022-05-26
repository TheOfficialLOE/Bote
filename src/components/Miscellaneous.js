import React from "react";
import ColorIcon from "./ColorIcon";


const Miscellaneous = (props) => {

    return (
        <div className="bg-[#1F1F1F] p-4 text-xl rounded-t-2xl">
            <h3 className="text-center font-bold">Miscellaneous</h3>
            <div className="flex flex-row justify-center w-full mt-4">
                <ColorIcon color="noteColor1" border="border-noteColor1" bg="bg-noteColor1"/>
                <ColorIcon color="noteColor2" border="border-noteColor2" bg="bg-noteColor2"/>
                <ColorIcon color="noteColor3" border="border-noteColor3" bg="bg-noteColor3"/>
                <ColorIcon color="noteColor4" border="border-noteColor4" bg="bg-noteColor4"/>
                <ColorIcon color="noteColor5" border="border-noteColor5" bg="bg-noteColor5"/>
                <p className="text-white self-center">Pick Color</p>
            </div>
        </div>
    )
};

export default Miscellaneous;