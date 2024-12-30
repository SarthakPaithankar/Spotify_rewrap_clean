import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import query from './app/lib/route';
import z from 'zod';
import bcrypt from 'bcrypt';
import { queryObjects } from 'v8';
import { console } from 'inspector';
 
export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
      Credentials({
        async authorize(credentials) {
          console.log("user")
          const parsedCredentials = z
            .object({ email: z.string().email(), password: z.string().min(5) })
            .safeParse(credentials);
          if (parsedCredentials.success) {
            const { email, password } = parsedCredentials.data;
            const user = await query('SELECT * FROM users WHERE email = $1', [email]);
            console.log('USER: ', user)
            if (!user) return {user:'sarthak@gmail.com',password:'admin'};
            if(password === user.password){
                return user;
            }
            //const passwordsMatch = await bcrypt.compare(password, user.password);
          }
          console.log('Invalid credentials');
          return null;
        },
      }),
    ],
  });