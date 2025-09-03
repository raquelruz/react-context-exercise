import { useContext } from "react";
import "./App.css";
import { ThemeContext } from "./context/ThemeContext";
import { ThemeButton } from "./components/ThemeButton/ThemeButton";

export const App = () => {
	return (
		<>
			<h1>React - Context</h1>
			<ThemeButton />
		</>
	);
};
