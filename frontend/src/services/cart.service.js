import API from "../api/axios.config";

class CartService {
    getCart() {
        return API.get("/cart");
    }

    addProduct(id) {
        return API.post(`/cart/${id}`);
    }

    deleteProduct(id) {
        return API.delete(`/cart/${id}`);
    }

    updateQuantity(id, quantity) {
        return API.put(`/cart/${id}`, { quantity });
    }
    clearCart() {
        return API.delete("/cart")
    }
}

export default new CartService();
