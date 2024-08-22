import pool from "../database.mjs";

class ProductsRepository {
    static async getProducts() {
        const response = await pool.query("SELECT * FROM products");
        return response.rows;
    }


    static async getProductsBYId(id) {
        const response = await pool.query("SELECT * FROM products WHERE id = $1", [id]);
        if (!response.rows.length) {
            return null;
        }
        return response.rows[0];
    }

    static async getProductsByPrice(price) {
        const response = await pool.query("SELECT * FROM products WHERE price = $1", [price]);
        if (!response.rows.length) {
            return null;
        }
        return response.rows[0];
    }

    static async addProducts(product) {
        const response = await pool.query("INSERT INTO products (title,description,price,img,category) VALUES ($1, $2, $3, $4,$5) RETURNING *", [product.title, product.description, product.price, product.img, product.category]);
        return response.rows[0]
    }

    static async deleteProduct(id) {
        const response = await pool.query("DELETE FROM products WHERE id = $1 RETURNING *", [id])
        return response.rows[0];
    }

    static async updateProduct(id, product) {
        const response = await pool.query("UPDATE products SET title = $1, description = $2, price = $3,img = $4 where id = $5 RETURNING *",
            [product.title, product.description, product.price, product.img, id])
        return response.rows[0];
    }

    static async changeTitle(title, id) {
        const response = await pool.query("UPDATE products SET title = $1 WHERE id = $2 RETURNING *", [title, id])
        return response.rows[0]
    }

    static async getProductsByDescription(description) {
        const response = await pool.query("SELECT FROM products WHERE description = $1", [description])
        if (!response.rows.length) {
            return []
        }
        return response.rows;
    }

    static async getProductsByTitle(title) {
        const response = await pool.query("SELECT * FROM products WHERE title ilike '%' || $1 || '%'", [title]);
        if (!response.rows.length) {
            return [];
        }
        return response.rows;
    }

    static async getProductsByCategory(category) {
        const response = await pool.query("SELECT * FROM products WHERE category = $1", [category]);
        if (!response.rows.length) {
            return [];
        }
        return response.rows;
    }

    static async getProductsByIds(ids) {
        const response = await pool.query("SELECT * FROM products WHERE id = ANY($1::int[])", [ids]);
        return response.rows;
    }

}

export default ProductsRepository;