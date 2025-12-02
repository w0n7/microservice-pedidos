import pg from "pg";
import dontenv from "dotenv";
dontenv.config();
const { Pool } = pg;
const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: 5435,
    ssl: {
        rejectUnauthorized: false,
    },
});
export const query = async (text, params) => {
    const start = Date.now();
    const result = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log("Query executada:", { text, duration, rows: result.rowCount });
    return result;
};
export default pool;
