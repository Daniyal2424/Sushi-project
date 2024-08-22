import CartRepository from "../repositories/Cart.mjs";
import ProductsRepository from "../repositories/Products.mjs";
class ProductController {
    async getProducts(req, res) {
        console.log(req.user)
        const description = req.query.description
        let products = []
        if (description) {
            products = await ProductsRepository.getProductsByDescription(description);
        } else {
            products = await ProductsRepository.getProducts();
        }

        if (req.user) {
            const cart = await CartRepository.getUserCart(req.user)
            cart.forEach(p => {
                const ind = products.findIndex(prod => prod.id == p.id);
                if (ind != -1) {
                    products[ind] = { ...products[ind], quantity: p.quantity };
                }
            })
        }

        res.json(products);
    }


    async getProductById(req, res) {
        const id = req.params.id
        const product = await ProductsRepository.getProductsBYId(id)
        if (req.user) {
            const cart = await CartRepository.getUserCart(req.user)
            const prod = cart.find(p => p.id == product.id)
            if (prod) {
                product.quantity = prod.quantity
            }
        }
        res.send(product)
    }

    async addProduct(req, res) {
        const product = await ProductsRepository.addProducts(req.body)
        res.status(201).send(product)
    }

    async updateProduct(req, res) {
        const id = req.params.id
        const product = await ProductsRepository.updateProduct(id, req.body)
        res.status(200).send(product);
    }

    async deleteProduct(req, res) {
        const id = req.params.id
        const product = await ProductsRepository.deleteProduct(id)
        res.status(200).send(product)
    }

    async getProductsByTitle(req, res) {
        const { title } = req.params;
        const products = await ProductsRepository.getProductsByTitle(title)
        res.send(products)
    }

    async getProductsByCategory(req, res) {
        const { category } = req.params;
        const products = await ProductsRepository.getProductsByCategory(category)
        if (req.user) {
            const cart = await CartRepository.getUserCart(req.user)
            cart.forEach(p => {
                const ind = products.findIndex(prod => prod.id == p.id);
                if (ind != -1) {
                    products[ind] = { ...products[ind], quantity: p.quantity };
                }
            })
        }
        res.send(products)
    }

    async getProductsByIds(req, res) {
        const { ids } = req.query;
        const products = await ProductsRepository.getProductsByIds(ids.split(","));
        res.send(products);
    }
}


export default ProductController;