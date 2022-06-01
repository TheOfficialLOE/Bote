import React from "react";
import ColorIcon from "../UI/ColorIcon";
import Tag from "../UI/Tag";
import {useNavigate, useParams} from "react-router-dom";
import {db} from "../../store/db";

const Miscellaneous = (props) => {

    const params = useParams();
    const navigate = useNavigate();

    const deleteNoteHandler = () => {
        const id = params.noteId;

        db.notes.delete(+id).then(() => navigate(-1));

    };

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
                {props.action === "view" && <p className="text-delete cursor-pointer mt-4" onClick={deleteNoteHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2 align-middle" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                    </svg>
                    Delete Note
                </p>}

            </div>
        </div>
    )
};

export default Miscellaneous;