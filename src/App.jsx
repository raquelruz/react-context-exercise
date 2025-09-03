import { useContext } from "react";
import "./App.css";
import { ThemeContext } from "./context/ThemeContext";
import { ThemeButton } from "./components/ThemeButton/ThemeButton";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { UserContext } from "./context/UserContext";
import { LanguageSelector } from "./components/LanguageSelector/LanguageSelector";

export const App = () => {
	const { user } = useContext(UserContext);
	return (
		<>
			<h1>React - Context</h1>

			<div className="app-btns">
				<ThemeButton />
				<LanguageSelector />
			</div>

			<div className="login-form">
				<LoginForm />
			</div>

			<div className="welcome">{user?.name && <h2>Bienvenido de nuevo {user.name}</h2>}</div>
		</>
	);
};
