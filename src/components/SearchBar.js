import React from "react";
import classes from "./MainHeader.module.css";

const SearchBar = () => {
    return (
        <div className={classes.searchBoxContainer}>
            <i className={`fa-solid fa-magnifying-glass fa-lg ${classes.icon}`}></i>
            <input className={classes.searchBox} type="text" placeholder="Search your notes..."/>
        </div>
    )
};

export default SearchBar;