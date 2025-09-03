import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartCounter = () => {
	const { items } = useContext(CartContext);

	const totalQty = items.reduce((sum, item) => sum + item.qty, 0);

	return <span>🛒 {totalQty}</span>;
};
