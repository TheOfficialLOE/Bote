
import React, {useContext, useState} from "react";

const HomeContext = React.createContext({
    searchPhrase: "",
    tag: "Notes",
    changeSearchPhrase(phrase) { },
    changeTag(tag) { }
});

const HomeProvider = (props) => {

    const [searchPhrase, setSearchPhrase] = useState("");
    const [tag, setTag] = useState("Notes");

    const changeSearchPhrase = (phrase) => {
        setSearchPhrase(phrase);
    }

    const changeTag = (tag) => {
        setTag(tag);
    }

    const homeCtx = {
        searchPhrase,
        tag,
        changeSearchPhrase,
        changeTag
    };

    return (
        <HomeContext.Provider value={homeCtx}>
            {props.children}
        </HomeContext.Provider>
    )

}

const useHome = () => {
    return useContext(HomeContext);
}

export {HomeProvider, useHome};