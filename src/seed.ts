import pool from "./config/db.js";

export const createTable = async () => {
  try {
    await pool.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
    
    await pool.query(`
            CREATE TABLE IF NOT EXISTS pedidos (
                id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                user_id UUID NOT NULL,
                order_number int GENERATED ALWAYS AS IDENTITY NOT NULL,
                status VARCHAR(100)
                create_at TIMESTAMP DEFAULT NOW()
                FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE  
            );
            
            `);
    await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                username VARCHAR(100) UNIQUE NOT NULL,
                password VARCHAR(100) NOT NULL,
                fullname TEXT NOT NULL,
                email TEXT UNIQUE NOT NULL,
                phone TEXT,
                create_at TIMESTAMP DEFAULT NOW(),
            );
            
            `);
  } catch (e) {
    console.error(e);
  }
};
