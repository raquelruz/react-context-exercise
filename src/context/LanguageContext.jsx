import { createContext, useState } from "react";

export const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
	const [lang, setLang] = useState("es");

	const texts = {
		es: {
			login: "Iniciar sesión",
			logout: "Cerrar sesión",
			admin: "Administrar",
			welcome: "Bienvenido",
			name: "Nombre",
			email: "Correo",
			role: "Rol",
			user: "Usuario",
			adminRole: "Admin",
			light: "Modo Claro",
			dark: "Modo Oscuro",
            language: "Idioma",
            changetheme: "Cambiar tema",
            spanish: "Español",
            english: "Inglés",
		},
		en: {
			login: "Log in",
			logout: "Log out",
			admin: "Administer",
			welcome: "Welcome",
			name: "Name",
			email: "Email",
			role: "Role",
			user: "User",
			adminRole: "Admin",
			light: "Light mode",
			dark: "Dark mode",
            language: "Language",
            changetheme: "Change theme",
            spanish: "Spanish",
            english: "English",
		},
	};

    return (
        <LanguageContext.Provider value={{ lang, setLang, texts }}>
            {children}
        </LanguageContext.Provider>
    );
};