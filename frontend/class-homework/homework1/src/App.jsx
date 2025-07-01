import "./App.css";
import { Route, Routes } from "react-router-dom";
import BoardsNew from "./routes/boards/new/BoardsNew";
import BoardsDetail from "./routes/boards/new/BoardsDetail";
import Header from "./routes/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/boards/new" element={<BoardsNew />} />
                <Route path="/boards/detail" element={<BoardsDetail />} />
            </Routes>
        </div>
    );
}

export default App;
