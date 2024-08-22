import UserRepository from "../repositories/Users.mjs";
class UserController {
    async getUsers(req, res) {
        const Users = await UserRepository.getUsers();
        res.send(Users).status(200);
    }

    async getUserById(req, res) {
        const id = req.params.id
        const user = await UserRepository.getUserById(id)
        res.send(user).status(200)
    }

    async addUser(req, res) {
        const user = await UserRepository.addUser(req.body)
        res.status(201).send(user)
    }

    async updateUser(req, res) {
        const id = req.params.id
        const user = await UserRepository.updateUser(id, req.body)
        res.status(200).send(user);
    }

    async deleteUser(req, res) {
        const id = req.params.id
        const user = await UserRepository.deleteUser(id)
        res.status(200).send(user)
    }
}

export default UserController;