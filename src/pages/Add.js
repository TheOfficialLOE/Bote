import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import AddNoteForm from "../components/AddNoteForm";
import Miscellaneous from "../components/Miscellaneous";
import ColorContext from "../store/color-context";

const Add = (props) => {

    const colorCtx = useContext(ColorContext);

    const navigate = useNavigate();

    const navigateBackHandler = () => {
        colorCtx.reset();
        navigate(-1);
    };

    return (
        <div className="h-screen">
            <header className="flex flex-row">
                <button className="mt-8 ml-4" onClick={navigateBackHandler}>
                    <i className="fa-xl fa-solid fa-angle-left text-icon"></i>
                </button>
                <button type="submit" form="addForm" className="mt-8 ml-auto mr-4">
                    <i className="fa-xl fa-solid fa-check text-icon"></i>
                </button>
            </header>
            <main className="mt-8 ml-4">
                <AddNoteForm navigate={navigateBackHandler} onNoteSaved={props.onNoteSaved} action={props.action}/>
            </main>
            <footer className="fixed bottom-0 w-full translate-y-16 hover:translate-y-0 transition-all">
                <Miscellaneous />
            </footer>
        </div>

    )
};

export default Add;