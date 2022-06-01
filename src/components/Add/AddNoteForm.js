import React, {useEffect, useState, useRef} from "react";
import {useParams} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {warn} from "../../util/toast";
import {useMiscellaneous} from "../../store/miscellaneous-context";
import {db} from "../../store/db";
import {readSingle, update} from "../../store/dbActions";

const AddNoteForm = (props) => {

    const action = props.action;
    const params = useParams();

    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [text, setText] = useState("");

    const titleRef = useRef();
    const subRef = useRef();
    const textRef = useRef();

    const miscellaneousCtx = useMiscellaneous();
    const border = miscellaneousCtx.border;
    const color = miscellaneousCtx.color;
    const tag = miscellaneousCtx.tag;

    // todo: you may want to make a custom hook for input handlers

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
                miscellaneousCtx.changeColor(data.color);
                miscellaneousCtx.changeTag(data.tag)
            });

        }

    }, [action, params.noteId]);


    // todo: updating and saving note has a bug

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

        // todo: should this switch statement be here?

        switch (action) {
            case "add": {
                db.notes.add({
                    title,
                    subtitle,
                    text,
                    color,
                    tag,
                    date: new Date().toISOString().slice(0, 10).replace(/-/g, "/")
                }).catch(err => {
                    console.log(err);
                });

                props.onNoteSaved();
                props.navigate();

                break;
            }
            case "view": {

                const id = parseInt(params.noteId);
                let updated = false;

                readSingle(id).then(data => {
                    if (data.title !== title) {
                        update(id, { title })
                        updated = true;
                    }
                    if (data.subtitle !== subtitle) {
                        update(id, { subtitle });
                        updated = true;
                    }
                    if (data.text !== text) {
                        update(id, { text });
                        updated = true;
                    }
                    if (data.color !== color) {
                        update(id, { color });
                        updated = true;
                    }
                    if (data.tag !== tag) {
                        update(id, { tag });
                        updated = true;
                    }
                    if (updated && data.date !== new Date().toISOString().slice(0, 10).replace(/-/g, "/")) {
                        update(id, { date: new Date().toISOString().slice(0, 10).replace(/-/g, "/") });
                    }

                    if (updated) {
                        props.onNoteSaved();
                        props.navigate();
                    }
                    else
                        props.navigate();

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
                          className={`bg-primary ${props.action === "add" ? "pb-40" : "pb-52"} md:pb-36 w-full pr-4 outline-0 text-xl text-white mt-10 resize-none overflow-hidden`}
                          ref={textRef} onChange={textChangeHandler} value={text}/>
            </form>
            <ToastContainer/>
        </React.Fragment>

    )
};

export default AddNoteForm;