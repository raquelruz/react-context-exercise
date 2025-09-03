import { useState, useContext } from "react";
import "./LoginForm.css"
import { UserContext } from "../../context/UserContext";
import { LanguageContext } from "../../context/LanguageContext";

const INITIAL_STATE = {
	email: "",
	name: "",
	rol: "user",
};

export const LoginForm = () => {
	const [loginData, setLoginData] = useState(INITIAL_STATE);
	const userContext = useContext(UserContext);
    const {lang, texts} = useContext(LanguageContext);

	const onInputChange = (event) => {
		const { name, value } = event.target;
		setLoginData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const onSubmit = () => {
		if (userContext.user) {
			userContext.logout();
		} else {
			userContext.setUser(loginData);
			setLoginData(INITIAL_STATE);
		}
	};

	return (
		<div className="login-container">
			<p>{texts[lang].name}</p>
			<input type="text" name="name" value={loginData.name} onChange={onInputChange} />
			
            <p>{texts[lang].email}</p>
			<input type="email" name="email" value={loginData.email} onChange={onInputChange} />
			
            <p>{texts[lang].role}</p>
			<select name="rol" value={loginData.rol} onChange={onInputChange}>
				<option value="user">{texts[lang].user}</option>
				<option value="admin">{texts[lang].adminRole}</option>
			</select>

			<div>
				<button onClick={onSubmit}>{userContext.user ? texts[lang].logout : texts[lang].login}</button>
			</div>

			<div>
				{userContext.user?.rol === "admin" && <button>{texts[lang].admin}</button>}
			</div>
		</div>
	);
};
