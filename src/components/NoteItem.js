import React from "react";
import {useNavigate} from "react-router-dom";

const NoteItem = (props) => {

    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate(`/notes/${props.id}`)
    };

    return (
        <article className={`${props.bg} p-4 rounded-xl flex flex-col cursor-pointer shadow-xl`} onClick={navigateHandler}>
            <h3 className="font-bold truncate">{props.title}</h3>
            <p className={`flex-grow text-sm text-white mt-2 line-clamp-2 break-words`}>
                {props.sub ? props.sub : props.text}
            </p>
            <div className="flex flex-row items-center mt-2">
                <p className="text-white text-xs border-2 rounded-md border-white px-2 py-1">
                    {props.tag}
                </p>
                <p className="w-full text-white text-xs text-right">
                    {props.date}
                </p>
            </div>
        </article>
    );
};

export default NoteItem;
