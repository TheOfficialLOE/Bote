import React from "react";
import SearchBar from "../components/SearchBar";
import Notes from "../components/Notes";
import MainFooter from "../components/MainFooter";

const Main = () => {
    return (
        <React.Fragment>
            <header>
                <p className="ml-4 mt-8 text-4xl font-bold md:text-center">My Notes</p>
                <SearchBar />
            </header>
            <main className="flex flex-row flex-wrap">
                <Notes />
            </main>
            <footer className="fixed bottom-0 bg-[#2f2d2e] w-full h-20">
                <MainFooter />
            </footer>
        </React.Fragment>
    );
};

export default Main;