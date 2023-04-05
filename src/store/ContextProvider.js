import React, { createContext, useState } from "react";

const Context = createContext();

const User = ({ children }) => {
    const initialize = {
        isLogin: false,
    };

    const [state, setState] = useState(initialize);

    const token = localStorage.getItem("access_token");

    return <Context.Provider value={state}>{children}</Context.Provider>;
};

export default User;
