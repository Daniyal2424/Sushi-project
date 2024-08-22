import UserRepository from "../repositories/Users.mjs";
import { comparePassword } from "../helpers/hash.mjs";
import { validationResult } from "express-validator";


class AuthController {
    async login(req, res) {
        // const { email, password } = req.body;
        // const user = await UserRepository.getUserByEmail(email);
        // console.log(user);

        // if (!user) {
        //     return res.status(401).send("Invalidc email");
        // }
        // if (!(await comparePassword(password, user.password))) {
        //     return res.status(401).send("Inccorect password");
        // }
        // req.session.user = user;
        res.sendStatus(200);
    }

    async register(req, res) {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).send(result.array())
        }

        const newUser = await UserRepository.addUser(req.body);
        req.login(newUser, function (err) {
            if (err) { return res.sendStatus(400) }
            return res.sendStatus(200)
        });
        // req.session.user = newUser;
        // res.sendStatus(201)
    };

    async logout(req, res) {
        if (!req.user) return res.sendStatus(401);
        req.logout((err) => {
            if (err) return res.sendStatus(400);
            res.sendStatus(200);
        });
        // req.session.user = null
        // res.sendStatus
    };

    async status(req, res) {
        // if (!req.session.user) {
        //     return res.sendStatus(401)
        // }
        // res.sendStatus(201)
        if (!req.user) {
            return res.sendStatus(401);
        }
        const user = req.user;
        res.status(200).send({ email: user.email, full_name: user.full_name });
    }
}

export default AuthController;