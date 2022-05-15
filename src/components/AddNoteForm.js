import React, {useRef, useContext} from "react";
import ColorContext from "../store/color-context";

const AddNoteForm = () => {

    const subRef = useRef();
    const textRef = useRef();
    const border = useContext(ColorContext).border;

    const subTextAreaHeightHandler = (e) => {
        const target = e.target;
        subRef.current.style.height = "30px";
        subRef.current.style.height = `${target.scrollHeight}px`;
    }

    const textTextAreaHeightHandler = (e) => {
        const target = e.target;
        textRef.current.style.height = "30px";
        textRef.current.style.height = `${target.scrollHeight}px`;
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
    };

    return (
        <form id="addForm" onSubmit={formSubmitHandler}>
            <input type="text" placeholder="Title" className="bg-inherit outline-0 text-2xl font-bold"/>
            <p className="text-xs text-[#8F8F8F] mt-2">{new Date().toISOString().slice(0, 10)}</p>
            <textarea cols="60" rows='1' placeholder="Sub"
                      className={`bg-[#292929] w-full mt-8 outline-0 text-xl text-[#8F8F8F] resize-none overflow-hidden border-l-4 ${border} pl-2 pr-4 rounded-sm`}
                      ref={subRef} onChange={subTextAreaHeightHandler}/>
            <textarea placeholder="Text"
                      className="bg-inherit w-full pr-4 outline-0 text-xl text-[#8F8F8F] mt-10 resize-none overflow-hidden" ref={textRef} onChange={textTextAreaHeightHandler}/>

        </form>
    )
};

export default AddNoteForm;