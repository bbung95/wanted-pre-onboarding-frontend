import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/AuthProvider";

const Navigation = () => {
    const { isLogin, setIsLogin } = useContext(Context);
    const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

    const handleLogOut = () => {
        localStorage.removeItem("access_token");
        setIsLogin(false);
    };

    const changeTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
        } else {
            setTheme("light");
            localStorage.setItem("theme", "light");
        }
    };

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    return (
        <nav className="absolute right-0 m-5 flex items-center gap-4">
            <input type="checkbox" className="toggle toggle-lg toggle-warning" defaultChecked={theme === "dark"} onChange={changeTheme} />
            {isLogin && (
                <button className="btn" onClick={handleLogOut}>
                    로그아웃
                </button>
            )}
        </nav>
    );
};

export default Navigation;
