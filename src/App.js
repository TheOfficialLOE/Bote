import React from "react";
import Home from "./pages/Home";
import Add from "./pages/Add";
import {MiscellaneousProvider} from "./store/miscellaneous-context";
import {Route, Routes} from "react-router-dom";
import {success} from "./util/toast";
import {ToastContainer} from "react-toastify";
import {HomeProvider} from "./store/home-context";

function App() {

    const onNoteSaved = () => {
        success({text: "Saved!"})
    }

    return (
        <HomeProvider>
            <MiscellaneousProvider>
                <React.Fragment>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/add" element={<Add action="add" onNoteSaved={onNoteSaved}/>}/>
                        <Route path="/notes/:noteId" element={<Add action="view" onNoteSaved={onNoteSaved}/>} />
                    </Routes>
                    <ToastContainer/>
                </React.Fragment>
            </MiscellaneousProvider>
        </HomeProvider>

    );
}

export default App;
