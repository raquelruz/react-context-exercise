import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";

export const ThemeButton = () => {
	const contextTheme = useContext(ThemeContext);
    const { lang, texts } = useContext(LanguageContext);

	console.log("Contexto en Button", contextTheme);

	return (
		<div>
			<button onClick={() => contextTheme.changeTheme()}>{texts[lang].changetheme}</button>
		</div>
	);
};
