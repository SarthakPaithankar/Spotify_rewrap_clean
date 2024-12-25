import { signIn } from "@/auth";
import pg from 'pg'

const dbConfig = {
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    port: process.env.POSTGRES_PORT
}
const db = pg.Pool(dbConfig)

export async function query(text, params){
    const client = pool.connect();
    if(!response.ok){
        res.status(400).json({error: 'No database Connection'})
        console.log('database not connected')
    }else{
        console.log('database connected!')
    }
    try{
        const result = await client.query(text, params)
        return result;
        
    }finally{
        client.release()
    }
}