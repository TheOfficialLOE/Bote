import React, {useState, useEffect} from "react";
import SearchBar from "../components/SearchBar";
import Notes from "../components/Notes";
import HomeFooter from "../components/HomeFooter";
import {readAll} from "../store/dbActions";

const Home = (props) => {

    const [notes, setNotes] = useState(null);
    const [searchPhrase, setSearchPhrase] = useState("");

    useEffect(() => {
        const loadNotes = async () => {
            const notes = await readAll();
            if (searchPhrase.length > 0) {
                const searchedNotes = notes.filter(note => {
                    return note.title.includes(searchPhrase);
                });
                setNotes(searchedNotes);
            }
            else
                setNotes(notes);
        }
        loadNotes();
    }, [searchPhrase]);

    const searchNoteHandler = (phrase) => {
        setSearchPhrase(phrase);
    };

    return (
        <React.Fragment>
            <header>
                <p className="ml-4 mt-8 text-4xl font-bold md:text-center">My Notes</p>
                <SearchBar searchNotes={searchNoteHandler}/>
            </header>
            <main
                className="mx-2 grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 justify-items-center">
                <Notes notes={notes}/>
            </main>
            <footer className="fixed bottom-0 bg-quickActionsBackground w-full h-20">
                <HomeFooter />
            </footer>
        </React.Fragment>
    );
};

export default Home;