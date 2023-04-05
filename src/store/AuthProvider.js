import React, { createContext, useState } from "react";

export const Context = createContext();

const Auth = ({ children }) => {
    const initialize = {
        isLogin: !!localStorage.getItem("access_token"),
        setIsLogin: () => {
            setState({ ...state, isLogin: !state.isLogin });
        },
    };

    const [state, setState] = useState(initialize);

    return <Context.Provider value={state}>{children}</Context.Provider>;
};

export default Auth;
