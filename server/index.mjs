import express from "express"
import cors from "cors"
import userRouter from "./routes/user.mjs"
import session from "express-session";
import productRouter from "./routes/product.mjs"
import cartRouter from './routes/cart.mjs'
import authRouter from './routes/auth.mjs'
import pool from "./database.mjs";
import pgSimpleSession from "connect-pg-simple";
import "./helpers/local-strategy.mjs";
import passport from "passport";
const pgSession = pgSimpleSession(session)

const app = express();
app.use(cors({ origin: true, credentials: true }))
app.use(express.json())
app.use(
    session({
        secret: "daniyalsekret",
        saveUninitialized: true,
        resave: false,
        cookie: {
            maxAge: 100 * 60 * 60 * 24 * 7
        },
        store: new pgSession({
            pool: pool,
            tableName: "session",
        })
    })
)
app.use(passport.initialize());
app.use(passport.session());

app.use(productRouter);
app.use(userRouter);
app.use(cartRouter);
app.use("/auth", authRouter);

const appStart = () => {
    try {
        app.listen(8090, () => {
            console.log('server running on port 8090');
        });
    } catch (error) {
        console.log(`error: ${error}`)
    }
}

appStart();