import React, {useState} from "react";
import ColorIcon from "./ColorIcon";


const Miscellaneous = (props) => {

    return (
        <div className="bg-[#1F1F1F] p-4 text-xl">
            <h3 className="text-center font-bold">Miscellaneous</h3>
            <div className="flex flex-row justify-center w-full mt-4">
                <ColorIcon border="border-yellow-500" bg="bg-yellow-500" showIcon={true}/>
                <ColorIcon border="border-red-500" bg="bg-red-500"/>
                <ColorIcon border="border-blue-500" bg="bg-blue-500"/>
                <ColorIcon border="border-black" bg="bg-black"/>
                <ColorIcon color="white" border="border-white" bg="bg-white"/>
                <p className="text-[#A6A6A6] self-center">Pick Color</p>
            </div>
        </div>
    )
};

export default Miscellaneous;