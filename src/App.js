import "./index.css";
import { Route, Routes } from "react-router-dom";
import { Context } from "./store/AuthProvider";
import { useContext } from "react";
import Todo from "./views/Todo";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import AuthNavigate from "./components/AuthNavigate";
import Navigation from "./components/Navigation";

function App() {
    const { isLogin } = useContext(Context);

    return (
        <div className="max-w-screen-md m-auto">
            <div className="relative min-h-screen w-full bg-gray-100">
                <Navigation />
                <Routes>
                    {isLogin ? (
                        <>
                            <Route path="/todo" element={<Todo />} />
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
        </div>
    );
}

export default App;
