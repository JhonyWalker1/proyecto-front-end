import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));


const storeUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
}

}