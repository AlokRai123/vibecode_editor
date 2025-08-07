import SignInFormClient from '@/features/auth/components/signin-form-client'
import Image from 'next/image'
import React from 'react'

const SignInPage = () => {
  return (
    <div className='space-y-6 flex flex-col items-center justify-center'>
    <Image src={'/logo.svg'} alt={'logo'} width={100} height={100} className={'mx-auto'}/>
    <SignInFormClient/>
    </div>
  )
}

export default SignInPage
