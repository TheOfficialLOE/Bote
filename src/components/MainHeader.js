
import React from "react";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
    return (
        <header className={classes.header}>
            <p className={classes.headerText}>My Notes</p>
            <div className={classes.searchBoxContainer} >
                <i className={`fa-solid fa-magnifying-glass fa-lg ${classes.icon}`}></i>
                <input className={classes.searchBox} type="text" placeholder="Search your notes..." />
            </div>
        </header>
    )
};

export default MainHeader;