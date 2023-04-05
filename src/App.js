import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./views/Home";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import { Context } from "./store/AuthProvider";
import { useContext } from "react";
import AuthNavigate from "./components/AuthNavigate";

function App() {
    const { isLogin } = useContext(Context);

    return (
        <div className="max-w-screen-md m-auto">
            <Routes>
                {isLogin ? (
                    <>
                        <Route path="/todo" element={<Home />} />
                        <Route path="*" element={<AuthNavigate />} />
                    </>
                ) : (
                    <>
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="*" element={<AuthNavigate />} />
                    </>
                )}
            </Routes>
        </div>
    );
}

export default App;
