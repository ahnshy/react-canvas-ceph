import {BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import CephView from "./component/CephView";
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route exact path="/" element={ <CephView /> } />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

//<canvas ref={canvasRef}></canvas>

export default App;