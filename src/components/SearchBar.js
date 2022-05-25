
const SearchBar = (props) => {

    const searchHandler = (e) => {
        props.searchNotes(e.target.value);
    };

    return (
        <div className="bg-searchBackground my-8 mx-4 py-4 px-8 flex items-center rounded-3xl md:w-96 md:my-8 md:mx-auto">
            <i className="fa-solid fa-magnifying-glass fa-lg"></i>
            <input className="w-full outline-0 border-0 bg-inherit text-lg text-white ml-4" type="text" placeholder="Search your notes..." onChange={searchHandler}/>
        </div>
    )
};

export default SearchBar;