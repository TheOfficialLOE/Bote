import React from "react";
import ColorIcon from "./ColorIcon";
import Tag from "./Tag";

const Miscellaneous = (props) => {

    return (
        <div className="bg-[#1F1F1F] p-4 text-xl rounded-t-2xl">
            <h3 className="text-center font-bold">Miscellaneous</h3>
            <div className="flex flex-col items-center md:flex-row md:justify-evenly">
                <div className="flex flex-row mt-4">
                    <p className="text-white self-center mr-2">Pick Color</p>
                    <ColorIcon color="noteColor1" border="border-noteColor1" bg="bg-noteColor1"/>
                    <ColorIcon color="noteColor2" border="border-noteColor2" bg="bg-noteColor2"/>
                    <ColorIcon color="noteColor3" border="border-noteColor3" bg="bg-noteColor3"/>
                    <ColorIcon color="noteColor4" border="border-noteColor4" bg="bg-noteColor4"/>
                    <ColorIcon color="noteColor5" border="border-noteColor5" bg="bg-noteColor5"/>
                </div>
                <div className="flex flex-row mt-4">
                    <p className="self-center">Select Tag</p>
                    <Tag tagTitle="Notes"  />
                    <Tag tagTitle="Work"   />
                    <Tag tagTitle="School" />
                </div>
            </div>
        </div>
    )
};

export default Miscellaneous;