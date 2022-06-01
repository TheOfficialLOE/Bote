import React from "react";
import NoteItem from "./NoteItem";

const Notes = (props) => {

    const notes = props.notes;

    return (
        <React.Fragment>
            {notes && notes.map(note => {
                return <NoteItem key={note.id} id={note.id} bg={"bg-" + note.color} title={note.title}
                                 sub={note.subtitle} text={note.text} tag={note.tag} date={note.date}/>
            })}
        </React.Fragment>
    );
};

export default Notes;
