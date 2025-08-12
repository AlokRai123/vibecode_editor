
import React from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Chrome, Github } from 'lucide-react'
import { signIn } from '@/auth'

async function handleGoogleSignIn(){
  "use server"
  await signIn('google');
}

async function handleGithubSignIn(){
  "use server"
  await signIn('github');
}

const SignInFormClient = () => {
  return (
    <Card className='w-full max-w-md'>
      <CardHeader className='space-y-1'>
        <CardTitle className='text-2xl font-bold text-center'>Sign In</CardTitle>
        <CardDescription className='text-center'>
             Choose Your preferred Sign-in Method 
        </CardDescription>
      </CardHeader>

      <CardContent className='grid gap-4'>
         <form action={handleGoogleSignIn}>
            <Button type='submit' variant={"outline"} className='w-full'>
              <Chrome className='mr-2 h-4 w-4'/>
              <span>Sign in with google</span>
            </Button>
           </form>

           <form action={handleGithubSignIn}>
            <Button type='submit' variant={"outline"} className='w-full'>
              <Github className='mr-2 h-4 w-4'/>
              <span>Sign in with Github</span>
            </Button>
           </form>
      </CardContent>

      <CardFooter className='flex flex-col gap-4'>
        <p className='text-center text-sm text-muted-foreground'>
          By signing, you agree to our{' '}
          <a
            href="/terms"
            className="underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </a>{' '}
          and{' '}
          <a
            href="/privacy"
            className="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </a>
          .
        </p>
      </CardFooter>
    </Card>
  )
}

export default SignInFormClient
