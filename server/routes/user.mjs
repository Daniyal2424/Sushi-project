import { Router } from "express";
import UserController from "../controllers/Users.mjs";
import { resolveUser, validateId } from "../helpers/middlewares.mjs";

const router = Router();

const controller = new UserController();

router.get("/users", controller.getUsers);
router.post("/users", controller.addUser);
router.put("/users/:id", validateId, resolveUser, controller.updateUser);
router.delete("/users/:id", validateId, resolveUser, controller.deleteUser);

export default router;