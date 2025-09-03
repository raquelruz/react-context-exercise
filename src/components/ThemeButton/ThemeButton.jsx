import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const ThemeButton = () => {
	const contextTheme = useContext(ThemeContext);

	console.log("Contexto en Button", contextTheme);

	return (
		<div>
			<button onClick={() => contextTheme.changeTheme()}>Cambiar tema</button>
		</div>
	);
};
