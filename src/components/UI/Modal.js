import React from "react";
import ReactDOM from "react-dom";
import Tag from "./Tag";

const Backdrop = (props) => {
    return <div className="w-full h-screen z-20 fixed top-0 left-0 bg-[#000000BF]" onClick={props.hide}/>
};

const ModalOverlay = (props) => {
    return (
        <section className="fixed top-[14vh] left-[5%] w-[90%] text-center bg-primary p-1 rounded-md shadow-md z-30 md:w-[40rem] md:left-[calc(50%_-_20rem)] p-2">
            <h3 className="text-2xl font-bold">Filter by tags</h3>
            <div className="mt-4">
                <Tag tagTitle="Notes"   source="modal" hide={props.hide} />
                <Tag tagTitle="Work"    source="modal" hide={props.hide} />
                <Tag tagTitle="School"  source="modal" hide={props.hide} />
                <Tag tagTitle="Discard" source="modal" hide={props.hide} />
            </div>
        </section>
    )
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
    return <React.Fragment>
        {ReactDOM.createPortal(<Backdrop hide={props.hide} />, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay hide={props.hide} />, portalElement)}
    </React.Fragment>
};

export default Modal;