import React, {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";

const Add = () => {

    const subRef = useRef();
    const textRef = useRef();


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

    const navigate = useNavigate();

    const navigateBackHandler = () => {
        navigate(-1);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
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
                <form id="addForm" onSubmit={formSubmitHandler}>
                    <input type="text" placeholder="Title" className="bg-inherit outline-0 text-2xl font-bold"/>
                    <p className="text-xs text-[#8F8F8F] mt-2">{new Date().toISOString().slice(0, 10)}</p>
                    {/*<div className="flex flex-row items-center mt-8">*/}
                    {/*    <div className={`w-1 h-8 bottom-0 bg-yellow-500 rounded-full`}/>*/}
                    {/*</div>*/}
                    <textarea cols="60" rows='1' placeholder="Sub"
                              className="bg-[#292929] w-full mt-8 outline-0 text-xl text-[#8F8F8F] resize-none overflow-hidden border-l-4 border-l-yellow-500 pl-2 pr-4 rounded-sm"
                              ref={subRef} onChange={subTextAreaHeightHandler}/>
                    <textarea placeholder="Text"
                           className="bg-inherit w-full pr-4 outline-0 text-xl text-[#8F8F8F] mt-10 resize-none overflow-hidden" ref={textRef} onChange={textTextAreaHeightHandler}/>

                </form>
            </main>
        </React.Fragment>

    )
};

export default Add;