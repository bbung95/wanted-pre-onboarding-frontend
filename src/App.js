import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./views/Home";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import ContextProvider from "./store/ContextProvider";

function App() {
    return (
        <ContextProvider>
            <div className="max-w-screen-md m-auto">
                <Routes>
                    <Route path="/" element={<SignIn />}></Route>
                    <Route path="/todo" element={<Home />}></Route>
                    <Route path="/signin" element={<SignIn />}></Route>
                    <Route path="/signup" element={<SignUp />}></Route>
                </Routes>
            </div>
        </ContextProvider>
    );
}

export default App;
