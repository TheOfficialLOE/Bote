import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {readAll} from "../store/dbActions";

const Backdrop = (props) => {
    return <div className="w-full h-screen z-20 fixed top-0 left-0 bg-[#000000BF]" onClick={props.hide}/>
};

const ModalOverlay = (props) => {

    return (
        <section className="fixed top-[14vh] left-[5%] w-[90%] bg-primary p-1 rounded-md shadow-md z-30 md:w-[40rem] md:left-[calc(50%_-_20rem)] p-2">
            <h3 className="text-2xl font-bold">Filter by tags</h3>
            <ul className="p-4 text-center">
                {props.tags.map(tag => <li key={Math.random()} className="cursor-pointer" onClick={() => {
                    props.filter(tag);
                    props.hide();
                }}>{tag}</li>)}
            </ul>
        </section>
    )
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {

    const [tags, setTags] = useState([]);


    useEffect(() => {
        const loadTags = async () => {
            // todo: make custom hook for db actions
            const notes = await readAll();
            const tags = [...new Set(notes.map(note => note.tag))];
            setTags(tags);
        };
        loadTags();
    }, []);


    return <React.Fragment>
        {ReactDOM.createPortal(<Backdrop hide={props.hide}/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay hide={props.hide} tags={tags} filter={props.filter}/>, portalElement)}
    </React.Fragment>
};

export default Modal;