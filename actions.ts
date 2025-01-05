'use server';
import { signIn } from './auth';
import { auth } from './auth';
import { AuthError } from 'next-auth';

import { redirect } from 'next/navigation';
import { S3Client, PutObjectCommand} from "@aws-sdk/client-s3"

import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
// ...

const s3 = new S3Client({
    region: process.env.AWS_BUCKET_REGION,
    credentials:{
        accessKeyId: process.env.AWS_ACCESS_KEY!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
})


export async function getSignedURL(){
    const session = await auth();
    if(!session){
        return { failure: "not authenticated"}
    }
    const putObjectCommand = new PutObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME!,
        Key: 'test-file',
    })
    
    const signedUrl = await getSignedUrl(s3, putObjectCommand,{
        expiresIn: 60,
    })
    return {success: {url: signedUrl}}
}

 
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    const email = formData.get('email');
    const password = formData.get('password');

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });
    if(result?.error){
        return result.error;
    }
    redirect('/dashboard/home');
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.!!!';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  } 
}