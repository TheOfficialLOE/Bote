import Main from "./pages/Main";
import Add from "./pages/Add";
import ColorProvider from "./store/ColorProvider";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <ColorProvider>
            <div>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/add" element={<Add />} />
                </Routes>
            </div>
        </ColorProvider>

    );
}

export default App;
