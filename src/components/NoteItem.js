import React from "react";
import classes from "./NoteItem.module.css";
import Tag from "./Tag";

const NoteItem = () => {
    return (
        <section className={`${classes.noteItem} ${classes.yellow}`}>
            <h3 className={classes.noteTitle}>Hey!</h3>
            <p className={classes.noteText}>This is a test text!</p>
            <div className={classes.extra}>
                <Tag className={classes.tag} tag="Notes" />
                <p className={classes.date}>Sun, 2 Apr</p>
            </div>
        </section>
    )
};

export default NoteItem;