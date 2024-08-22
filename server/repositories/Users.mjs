import pool from "../database.mjs";
import { hashPassword } from "../helpers/hash.mjs";

class UserRepository {
    static async getUsers() {
        const response = await pool.query("SELECT * FROM users");
        return response.rows;
    };

    static async getUserById(id) {
        const response = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
        if (!response.rows.length) {
            return null;
        };
        return response.rows[0];
    };

    static async getUserByEmail(email) {
        const response = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (!response.rows.length) {
            return null;
        }
        return response.rows[0];
    };

    static async updateUser(id, user) {
        const response = await pool.query("UPDATE users SET full_name = $1, email= $2, password = $3 where id = $4 RETURNING *",
            [user.full_name, user.email, user.password, id]);
        return response.rows[0];
    };

    static async addUser(user) {
        const hash = await hashPassword(user.password);
        const response = await pool.query("INSERT INTO users (full_name, email, password) VALUES ($1, $2, $3) RETURNING *",
            [user.full_name, user.email, hash]);

        if (!response.rows.length) {
            return null;
        };

        return response.rows[0];
    };

    static async deleteUser(id) {
        const response = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [id]);
        return response.rows[0];
    };
}
export default UserRepository;