import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../store/AuthProvider";

const AuthNavigate = () => {
    const { isLogin } = useContext(Context);

    return <>{isLogin ? <Navigate to={"/todo"} /> : <Navigate to={"/signin"} />}</>;
};

export default AuthNavigate;
