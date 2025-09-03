import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const Cart = () => {
	const { items, addItem, removeItem, clearCart } = useContext(CartContext);

	if (items.length === 0) return <p>El carrito está vacío</p>;

	return (
		<div className="cart-container">
			{items.map((item) => (
				<div className="cart-item" key={item.id}>
					<span className="cart-item-name">{item.name}</span>
					<span className="cart-item-qty">Cantidad: {item.qty}</span>
					<div className="cart-item-buttons">
						<button onClick={() => addItem(item)}>+</button>
						<button onClick={() => removeItem(item.id)}>-</button>
					</div>
				</div>
			))}
			<button className="cart-clear" onClick={clearCart}>
				Vaciar carrito
			</button>
		</div>
	);
};
