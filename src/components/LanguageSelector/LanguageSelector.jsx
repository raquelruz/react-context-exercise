import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export const LanguageSelector = () => {
	const { lang, setLang, texts } = useContext(LanguageContext);

	const handleChange = (e) => {
		setLang(e.target.value);
	};

	return (
		<div>
			<label htmlFor="language-select">
                {texts[lang].language}
			</label>
			<select
				id="language-select"
				value={lang}
				onChange={handleChange}>
				<option value="es">{texts[lang].spanish}</option>
				<option value="en">{texts[lang].english}</option>
			</select>
		</div>
	);
};
