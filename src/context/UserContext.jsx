import { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const login = (userData) => setUser(userData);
	const logout = () => setUser(null);

	return <UserContext.Provider value={{ user, setUser: login, logout }}>{children}</UserContext.Provider>;
};
