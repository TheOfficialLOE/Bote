import classes from "./MainHeader.module.css";

const SearchBar = (props) => {

    const searchHandler = (e) => {
        props.searchNotes(e.target.value);
    };

    return (
        <div className={classes.searchBoxContainer}>
            <i className={`fa-solid fa-magnifying-glass fa-lg ${classes.icon}`}></i>
            <input className={classes.searchBox} type="text" placeholder="Search your notes..." onChange={searchHandler}/>
        </div>
    )
};

export default SearchBar;