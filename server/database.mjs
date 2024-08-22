import pg from "pg";

const pool = new pg.Pool({
    user: "postgres",
    host: "localhost",
    database: "sushi",
    password: "13danial",
    port: 5432
})

export default pool;