import API from "../api/axios.config";

class ProductService {
    getProducts() {
        return API.get(`/products`)
    }
    getProduct(id) {
        return API.get(`/products/${id}`)
    }

    getProductByTitle(title) {
        return API.get(`/products/title/${title}`)
    }

    getProductsByCategory(category) {
        return API.get(`/products/category/${category}`)
    }

    getProductsByIds(ids) {
        return API.get(`/products?ids=${ids.join(",")}`);
    }
}

export default new ProductService()