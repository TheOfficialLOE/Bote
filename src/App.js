import React from "react";
import Home from "./pages/Home";
import Add from "./pages/Add";
import ColorProvider from "./store/ColorProvider";
import {Route, Routes} from "react-router-dom";
import {success} from "./util/toast";
import {ToastContainer} from "react-toastify";

function App() {

    const onNoteSaved = () => {
        success({text: "Saved!"})
    }

    return (
        <ColorProvider>
            <React.Fragment>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/add" element={<Add onNoteSaved={onNoteSaved}/>}/>
                </Routes>
                <ToastContainer/>
            </React.Fragment>
        </ColorProvider>
    );
}

export default App;
