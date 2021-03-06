import React, {useState} from "react";
import Modal from "./Modal";
import {useHome} from "../../store/home-context";

const SearchBar = (props) => {

    const [showModal, setShowModal] = useState(false);

    const homeCtx = useHome();

    const showModalHandler = () => {
        setShowModal(true);
    }

    const hideModalHandler = () => {
        setShowModal(false);
    }

    const searchHandler = (e) => {
        // props.searchNotes(e.target.value);
        homeCtx.changeSearchPhrase(e.target.value);
    };

    return (
        <div className="bg-searchBackground my-8 mx-4 py-4 px-8 flex items-center rounded-3xl md:w-96 md:my-8 md:mx-auto shadow-xl">
            <i className="fa-solid fa-magnifying-glass fa-lg"></i>
            <input className="w-full outline-0 border-0 bg-inherit text-lg text-white ml-4" type="text" placeholder="Search your notes..." onChange={searchHandler} value={homeCtx.searchPhrase}/>
            <div className="relative ml-4 cursor-pointer group" onClick={showModalHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd"
                          d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"/>
                </svg>
                <span className="invisible absolute bottom-14 -right-3 md:-bottom-0.5 md:-right-24 bg-black px-2 py-1 rounded-md shadow-md group-hover:visible text-accent">Tags</span>
            </div>
            {showModal && <Modal hide={hideModalHandler} />}
        </div>
    )
};

export default SearchBar;