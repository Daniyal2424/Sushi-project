import { Router } from "express";
import ProductController from "../controllers/Product.mjs";
import { validateId, resolveProduct } from '../helpers/middlewares.mjs'
const router = Router();

const controller = new ProductController();

router.get("/products", controller.getProducts);
router.get("/products/:id", validateId, resolveProduct, controller.getProductById);
router.post("/products", controller.addProduct);
router.put("/products/:id", validateId, resolveProduct, controller.updateProduct);
router.delete("/products/:id", validateId, resolveProduct, controller.deleteProduct);
router.get("/products/category/:category", controller.getProductsByCategory)
router.get("/products/title/:title", controller.getProductsByTitle)
router.get("/products/ids", controller.getProductsByIds);


export default router;