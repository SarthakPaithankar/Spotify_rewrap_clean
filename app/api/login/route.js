import nextConnect from 'next-connect'
import query from './lib/route'

const handler = nextConnect()

handler.get(async (req, res) =>{
    try{
        const username = req.username;
        const password = req.password;
        const user = query('SELECT user FROM users WHERE username = $1', [username])
        if(password === user.password){
            console.log(user)
        }
        res.status.json(users);
    } catch(error){
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
})

export default handler