import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<UserProvider>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</UserProvider>
	</StrictMode>
);
