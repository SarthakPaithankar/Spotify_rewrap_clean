import pg from 'pg';

// Database configuration
const dbConfig = {
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    port: process.env.POSTGRES_PORT,
};

// Create a connection pool
const db = new pg.Pool(dbConfig);

export default async function query(text, params) {
    let client;
    try {
        client = await db.connect();
        console.log('Database connected!');

        const result = await client.query(text, params);
        console.log(text); 
        console.log(params); 
        console.log('Query Result:', result.rows); 
        return result.rows;
    } catch (error) {
        console.error('Query Error:', error.message);
        throw error; 
    } finally {
        if (client) {
            client.release();
            console.log('Database connection released.');
        }
    }
}
