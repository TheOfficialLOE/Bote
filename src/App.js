import Main from "./pages/Main";
import Add from "./pages/Add";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/add" element={<Add />} />
            </Routes>
        </div>
    );
}

export default App;
