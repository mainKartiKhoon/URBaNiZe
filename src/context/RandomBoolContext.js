import { createContext, useState } from "react";

export const RandomBoolContext = createContext(null);

export const RandomBoolProvider = (props) => {
    let [isLogin, setIsLogin] = useState(true);
    let [isLoggedIn, setIsLoggedIn] = useState(false);
    let [nameOfUser, setNameOfUser] = useState("Demo");
    return (
        <RandomBoolContext.Provider value={{isLogin, setIsLogin, isLoggedIn, setIsLoggedIn, nameOfUser, setNameOfUser}}>
            {props.children}
        </RandomBoolContext.Provider>
    )
}