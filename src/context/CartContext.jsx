import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
	const [items, setItems] = useState([]);

	const addItem = (product) => {
		setItems((prevItems) => {
			const existing = prevItems.find((item) => item.id === product.id);
			if (existing) {
				return prevItems.map((item) => (item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
			} else {
				return [...prevItems, { ...product, qty: 1 }];
			}
		});
	};

	const removeItem = (id) => {
		setItems((prevItems) =>
			prevItems
				.map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
				.filter((item) => item.qty > 0)
		);
	};

	const clearCart = () => setItems([]);

	return <CartContext.Provider value={{ items, addItem, removeItem, clearCart }}>{children}</CartContext.Provider>;
};
