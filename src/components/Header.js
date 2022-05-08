
import React from "react";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            <p className={classes.headerText}>My Notes</p>
            <div className={classes.searchBoxContainer} >
                <i className={`fa-solid fa-magnifying-glass fa-lg ${classes.icon}`}></i>
                {/*<p>Search your notes...</p>*/}
                <input className={classes.searchBox} type="text" placeholder="Search your notes..." />
            </div>
        </header>
    )
};

export default Header;