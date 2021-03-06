import React from "react";
import {useNavigate} from "react-router-dom";
import AddNoteForm from "../components/Add/AddNoteForm";
import Miscellaneous from "../components/Add/Miscellaneous";
import {useMiscellaneous} from "../store/miscellaneous-context";

const Add = (props) => {

    const miscellaneousCtx = useMiscellaneous();

    const navigate = useNavigate();

    const navigateBackHandler = () => {
        miscellaneousCtx.reset();
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
            <footer className={`${props.action === "add" ? "translate-y-[6.5rem]" : "translate-y-36"} md:translate-y-14 fixed bottom-0 w-full hover:translate-y-0 transition-all`}>
                <Miscellaneous action={props.action}/>
            </footer>
        </div>

    )
};

export default Add;