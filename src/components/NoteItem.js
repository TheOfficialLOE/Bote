import React from "react";

const NoteItem = (props) => {
    return (
        <section className={`w-48 ${props.bg} p-4 rounded-xl flex flex-col`}>
            <h3 className="font-bold">{props.title}</h3>
            <p className="text-sm text-white mt-2">
                {props.sub ? props.sub : props.text}
            </p>
            <div className="flex flex-row items-center mt-8">
                <p className="text-white text-xs border-2 rounded-md border-white px-2 py-1">
                    {props.tag}
                </p>
                <p className="text-white text-xs ml-8">
                    {new Date().toISOString().slice(0, 10).replace(/-/g, "/")}
                </p>
            </div>
        </section>
    );
};

export default NoteItem;
