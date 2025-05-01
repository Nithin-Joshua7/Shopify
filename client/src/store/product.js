import { create } from "zustand";
import { axiosInstance } from "../../lib/axios";
export const useProductStore = create((set) => ({
	products: [],
	setProducts: (products) => set({ products }),
	createProduct: async (newProduct) => {
		if (!newProduct.name || !newProduct.image || !newProduct.price) {
			return { success: false, message: "Please fill in all fields." };
		}
		const res = await fetch("http://localhost:4000/api/products", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newProduct),
		});
		const data = await res.json();
		set((state) => ({ products: [...state.products,data.product] }));
		return { success: true, message: "Product created successfully" };
	},
	fetchProducts: async () => {
		const res = await fetch("http://localhost:4000/api/products");
		const data = await res.json();
		set({ products: data.products});
	},
	deleteProduct: async (pid) => {
		const res = await fetch(`http://localhost:4000/api/products/${pid}`, {
			method: "DELETE",
		});
		const data = await res.json();
		if (!data.success) return { success: false, message: data.msg };

		// update the ui immediately, without needing a refresh
		set((state) => ({ products: state.products.filter((product) => product._id !== pid) }));
		return { success: true, message: data.msg};
	},
	updateProduct: async (pid, updatedProduct) => {
		const res = await fetch(`http://localhost:4000/api/products/${pid}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedProduct),
		});
		const data = await res.json();
		if (!data.success) return { success: false, message: data.message };

		// update the ui immediately, without needing a refresh
		set((state) => ({
			products: state.products.map((product) => (product._id === pid ? data.updated_Product : product)),
		}));

		return { success: true, message: data.message };
	},
}));
