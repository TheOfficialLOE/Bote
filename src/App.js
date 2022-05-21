import React from "react";
import Main from "./pages/Main";
import Add from "./pages/Add";
import ColorProvider from "./store/ColorProvider";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <ColorProvider>
            <React.Fragment>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/add" element={<Add />} />
                </Routes>
            </React.Fragment>
        </ColorProvider>

    );
}

export default App;
