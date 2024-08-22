import CartController from "../controllers/Cart.mjs";
import { param } from "express-validator";
import { Router } from "express";

const router = Router();
const controller = new CartController()

router.get("/cart", controller.getCard);
router.post('/cart/:id', param("id").notEmpty().withMessage("Product ID Shouldbe speppad"), controller.addProductToCart)
router.delete('/cart/:id', controller.deleteFromCart)
router.put("/cart/:id", controller.updateProductQuantity)
router.delete('/cart', controller.clearCart);

export default router;