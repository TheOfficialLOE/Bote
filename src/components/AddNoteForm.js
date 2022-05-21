import React, {useRef, useContext} from "react";
import ColorContext from "../store/color-context";
import {db} from "../store/db";

const AddNoteForm = () => {

    const titleRef = useRef();
    const subRef = useRef();
    const textRef = useRef();
    const colorCtx = useContext(ColorContext);
    const border = colorCtx.border;
    const bg = colorCtx.bg;

    const subTextAreaHeightHandler = (e) => {
        const target = e.target;
        subRef.current.style.height = "30px";
        subRef.current.style.height = `${target.scrollHeight}px`;
        window.scrollTo({ top: target.scrollHeight });
    }

    const textTextAreaHeightHandler = (e) => {
        const target = e.target;
        textRef.current.style.height = "30px";
        textRef.current.style.height = `${target.scrollHeight}px`;
        window.scrollTo({ top: document.body.scrollHeight });
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();

        db.notes.add({
            title: titleRef.current.value,
            subtitle: subRef.current.value,
            text: textRef.current.value,
            background: bg,
            category: "Notes"
        }).catch(err => {
            console.log(err);
        })

    };

    return (
        <form id="addForm" onSubmit={formSubmitHandler}>
            <input type="text" placeholder="Title" className="bg-inherit outline-0 text-2xl font-bold" ref={titleRef}/>
            <p className="text-xs text-[#8F8F8F] mt-2">{new Date().toISOString().slice(0, 10)}</p>
            <textarea cols="60" rows='1' placeholder="Sub"
                      className={`bg-[#292929] w-full mt-8 outline-0 text-xl text-[#8F8F8F] resize-none overflow-hidden border-l-4 ${border} pl-2 pr-4 rounded-sm`}
                      ref={subRef} onChange={subTextAreaHeightHandler}/>
            <textarea placeholder="Text"
                      className="bg-inherit pb-36 w-full pr-4 outline-0 text-xl text-[#8F8F8F] mt-10 resize-none overflow-hidden"
                      ref={textRef} onChange={textTextAreaHeightHandler}/>

        </form>
    )
};

export default AddNoteForm;