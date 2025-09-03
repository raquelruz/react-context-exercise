import { useState, useContext } from "react";
import "./LoginForm.css"
import { UserContext } from "../../context/UserContext";

const INITIAL_STATE = {
	email: "",
	name: "",
	rol: "user",
};

export const LoginForm = () => {
	const [loginData, setLoginData] = useState(INITIAL_STATE);
	const userContext = useContext(UserContext);

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
			<p>Nombre</p>
			<input type="text" name="name" value={loginData.name} onChange={onInputChange} />
			<p>Email</p>
			<input type="email" name="email" value={loginData.email} onChange={onInputChange} />
			<p>Rol</p>
			<select name="rol" value={loginData.rol} onChange={onInputChange}>
				<option value="user">Usuario</option>
				<option value="admin">Admin</option>
			</select>

			<div>
				<button onClick={onSubmit}>{userContext.user ? "Log out" : "Log in"}</button>
			</div>

			<div>
				{userContext.user?.rol === "admin" && <button>Administrar</button>}
			</div>
		</div>
	);
};
