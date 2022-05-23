import React, {useEffect, useState, useRef, useContext} from "react";
import {useParams} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {warn} from "../util/toast";
import ColorContext from "../store/color-context";
import {db} from "../store/db";
import {readSingle, update} from "../store/dbActions";

const AddNoteForm = (props) => {

    const action = props.action;
    const params = useParams();

    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [text, setText] = useState("");

    const titleRef = useRef();
    const subRef = useRef();
    const textRef = useRef();

    const colorCtx = useContext(ColorContext);
    const border = colorCtx.border;
    const color = colorCtx.color;

    const titleChangeHandler = (e) => {
        const target = e.target;
        setTitle(target.value);
    }

    const subtitleChangeHandler = (e) => {
        const target = e.target;
        setSubtitle(target.value);
        subRef.current.style.height = "30px";
        subRef.current.style.height = `${target.scrollHeight}px`;
        window.scrollTo({top: target.scrollHeight});
    }

    const textChangeHandler = (e) => {
        const target = e.target;
        setText(target.value);
        textRef.current.style.height = "30px";
        textRef.current.style.height = `${target.scrollHeight}px`;
        window.scrollTo({top: document.body.scrollHeight});
    }

    useEffect(() => {

        if (action === "view") {

            const id = params.noteId;

            readSingle(+id).then(data => {
                setTitle(data.title);
                setSubtitle(data.subtitle);
                setText(data.text);
                colorCtx.changeColor(data.color);
            });

        }

    }, [action, params.noteId]);

    const formSubmitHandler = (event) => {
        event.preventDefault();

        if (!title.length || title.length < 3) {
            warn({text: "Title is too short"});
            return;
        }

        if (!subtitle.length && !text.length) {
            warn({text: "Body is empty"});
            return;
        }

        if (subtitle.length && subtitle.length < 5) {
            warn({text: "Subtitle is too short"});
            return;
        }

        if (text.length && text.length < 15) {
            warn({text: "Text is too short"});
            return;
        }

        switch (action) {
            case "add": {
                db.notes.add({
                    title,
                    subtitle,
                    text,
                    color: colorCtx.color,
                    tag: "Notes",
                    date: Date.now()
                }).catch(err => {
                    console.log(err);
                });

                props.onNoteSaved();
                props.navigate();

                break;
            }
            case "view": {

                const id = parseInt(params.noteId);

                readSingle(id).then(data => {
                    if (data.title !== title) {
                        update(id, { title })
                        props.onNoteSaved();
                        props.navigate();
                    }
                    if (data.subtitle !== subtitle) {
                        update(id, { subtitle });
                        props.onNoteSaved();
                        props.navigate();
                    }
                    if (data.text !== text) {
                        update(id, { text });
                        props.onNoteSaved();
                        props.navigate();
                    }
                    if (data.color !== color) {
                        update(id, { color });
                        props.onNoteSaved();
                        props.navigate();
                    }
                });

                break;
            }
        }

    };

    return (
        <React.Fragment>
            <form id="addForm" onSubmit={formSubmitHandler}>
                <input type="text" placeholder="Title" className="bg-primary outline-0 text-2xl font-bold"
                       ref={titleRef} onChange={titleChangeHandler} value={title}/>
                <p className="text-xs text-[#8F8F8F] mt-2">{new Date().toISOString().slice(0, 10)}</p>
                <textarea cols="60" rows='1' placeholder="Sub"
                          className={`bg-primary w-full mt-8 outline-0 text-xl text-white resize-none overflow-hidden border-l-4 ${border} pl-2 pr-4 rounded-sm`}
                          ref={subRef} onChange={subtitleChangeHandler} value={subtitle}/>
                <textarea placeholder="Text"
                          className="bg-primary pb-36 w-full pr-4 outline-0 text-xl text-white mt-10 resize-none overflow-hidden"
                          ref={textRef} onChange={textChangeHandler} value={text}/>
            </form>
            <ToastContainer/>
        </React.Fragment>

    )
};

export default AddNoteForm;