import query from '../../lib/route';

export async function POST(req) {
    try {
        const body = await req.json();
        const { email, password } = body;
        const result = await query('SELECT * FROM users WHERE email = $1', [email]);
        if (!result || result.length === 0) {
            console.log('User not found');
            return Response.json({ error: 'User not found' }, { status: 404 });
        }
        const user = result[0];
        if (password === user.password) {
            console.log('Password matched!');
            return Response.json({ message: 'Login successful', user }, { status: 200 });
        } else {
            console.log('Password mismatch');
            return Response.json({ error: 'Invalid credentials' }, { status: 401 });
        }
    } catch (error) {
        console.error('Server Error:', error);
        return Response.json({ error: 'Server error' }, { status: 500 });
    }
}

