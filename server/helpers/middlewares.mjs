
import UserRepository from "../repositories/Users.mjs"

export function validateId(req, res, next) {
    const id = req.params.id
    const parseId = parseInt(id)
    if (isNaN(parseId)) {
        return res.status(400).send("Invalid id")
    }
    next()
}

export async function resolveProduct(req, res, next) {
    const id = req.params.id
    const product = await ProductsRepository.getProductsBYId(id)
    if (!product) {
        return res.status(404).send("Product not found")
    }
    next()
}

export async function resolveUser(req, res, next) {
    const id = req.params.id

    const user = await UserRepository.getUserById(id)
    if (!user) {
        return res.status(404).send("User not found")
    }
    next()
}