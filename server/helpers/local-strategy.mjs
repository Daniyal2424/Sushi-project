import passport from "passport";
import { Strategy } from "passport-local";
import UserRepository from "../repositories/Users.mjs";
import { comparePassword } from "./hash.mjs";
passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
    try {
        const findUser = await UserRepository.getUserById(id);
        if (!findUser) throw new Error("User Not Found");
        done(null, findUser);
    } catch (err) {
        done(err, null)
    }
});
export default passport.use(
    new Strategy({ usernameField: "email" }, async (username, password, done) => {
        try {
            const findUser = await UserRepository.getUserByEmail(username);
            if (!findUser) throw new Error("User not Found");
            if (!(await comparePassword(password, findUser.password)))
                throw new Error("Bad Credentails");
            done(null, findUser);
        } catch (err) {
            done(err, null);
        }
    })
);