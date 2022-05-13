import React, {useRef} from "react";
import {useNavigate} from "react-router-dom";
import AddNoteForm from "../components/AddNoteForm";

const Add = () => {


    const navigate = useNavigate();

    const navigateBackHandler = () => {
        navigate(-1);
    };

    return (
        <React.Fragment>
            <header className="flex flex-row space">
                <button className="mt-8 ml-4" onClick={navigateBackHandler}>
                    <i className="fa-xl fa-solid fa-angle-left text-[#A5A5A5]"></i>
                </button>
                <button type="submit" form="addForm" className="mt-8 ml-auto mr-4">
                    <i className="fa-xl fa-solid fa-check text-[#A5A5A5]"></i>
                </button>
            </header>
            <main className="mt-8 ml-4">
                <AddNoteForm />
            </main>
        </React.Fragment>

    )
};

export default Add;