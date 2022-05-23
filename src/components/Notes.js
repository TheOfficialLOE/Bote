import React, {useEffect, useState} from "react";
import NoteItem from "./NoteItem";
import {readAll} from "../store/dbActions";


const Notes = () => {

    const [notes, setNotes] = useState(null);

    useEffect(() => {
        const getNotes = async () => {
            const notes = await readAll();
            console.log(notes)
            setNotes(notes);
        }
        getNotes();
    }, []);

    return (
        <React.Fragment>
            {notes && notes.map(note => {
                return <NoteItem key={note.id} id={note.id} bg={"bg-" + note.color} title={note.title} sub={note.subtitle} text={note.text} tag={note.tag}/>
            })}
        </React.Fragment>
    );
};

export default Notes;
