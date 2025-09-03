import { useContext } from "react";
import "./App.css";
import { ThemeContext } from "./context/ThemeContext";
import { ThemeButton } from "./components/ThemeButton/ThemeButton";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { UserContext } from "./context/UserContext";
import { LanguageSelector } from "./components/LanguageSelector/LanguageSelector";
import { Cart } from "./components/Cart/Cart";
import { sampleProducts } from "./assets/utils/sampleproducts";
import { CartContext } from "./context/CartContext";
import { CartCounter } from "./components/CartCounter/CartCounter";

export const App = () => {
	const { user } = useContext(UserContext);
	const { addItem } = useContext(CartContext);
	return (
		<>
			<h1>React - Context</h1>

			<div className="app-btns">
				<ThemeButton />
				<LanguageSelector />
				<CartCounter />
			</div>

			<div className="login-form">
				<LoginForm />
			</div>

			<div className="welcome">{user?.name && <h2>Bienvenido de nuevo {user.name}</h2>}</div>

			<div className="products">
				<h2>Productos</h2>
				<div className="product-list">
					{sampleProducts.map((product) => (
						<div className="product-card" key={product.id}>
							<span className="product-name">{product.name}</span>
							<button onClick={() => addItem(product)}>Añadir al carrito</button>
						</div>
					))}
				</div>
			</div>

			<div className="cart">
				<h2>Carrito</h2>
				<Cart />
			</div>
		</>
	);
};
