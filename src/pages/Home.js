import React, {useState, useEffect} from "react";
import SearchBar from "../components/SearchBar";
import Notes from "../components/Notes";
import {readAll} from "../store/dbActions";
import {useNavigate} from "react-router-dom";
import {useHome} from "../store/home-context";

const Home = (props) => {

    const navigate = useNavigate();

    const [notes, setNotes] = useState(null);

    const homeCtx = useHome();
    const {searchPhrase, tag} = {...homeCtx};

    useEffect(() => {
        const loadNotes = async () => {
            const notes = await readAll().then(data => {
                return data.filter(note => {
                    return note.tag === tag;
                })
            });
            if (searchPhrase.length > 0) {
                const searchedNotes = notes.filter(note => {
                    return note.title.toLowerCase().includes(searchPhrase.toLowerCase());
                });
                setNotes(searchedNotes);
            }
            else
                setNotes(notes);
        }
        loadNotes();
    }, [searchPhrase, tag]);

    const redirectToAddPageHandler = () => {
        navigate("/add")
    };

    return (
        <React.Fragment>
            <header>
                <h1 className="ml-4 mt-8 text-4xl font-bold md:text-center">My Notes</h1>
                <SearchBar />
            </header>
            <main
                className="mx-2 grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 justify-items-center">
                <Notes notes={notes}/>
            </main>
            <button onClick={redirectToAddPageHandler}
                className="shadow-xl shadow-accent/20 bg-accent w-12 h-12 rounded-full absolute bottom-8 right-8 md:bottom-14 md:right-12">
                <i className="fa-xl fa-solid fa-plus text-center"></i>
            </button>
        </React.Fragment>
    );
};

export default Home;