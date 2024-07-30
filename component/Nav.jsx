"use client"
import Link  from 'next/link'
import {useState, useEffect} from 'react'
import Image from 'next/image'
import {signIn, signOut, getProviders, useSession} from 'next-auth/react' 

const Nav = () => {
  const isUserLogedIn = true;
  return (
    <nav className='flex flex-row flex-between w-full mb-16 pt-3'>
     <Link href="/" className='flex gap-2 flex-center'>
     <Image 
     src="/assets/images/logo.svg"
     alt='Promptopia Logo'
     width={30}
     height={30}
     className='object-contain'
     />
     <p className='logo_text pl-3'>Promptopia</p>
     </Link>
     <div>{isUserLogedIn?(<div>
      <Link href="/create-prompt"
      className='black_btn'>Create Post</Link>
      <button type="button" onClick={signOut} className='outline_btn'>Sign Out</button>
      <Link href="/profile" >
      <Image 
       src="/assets/images/logo.svg"
        width={37}
        height={37}
        className='rounded_full'
      /></Link>
     </div>):(<></>)}</div>
    </nav>
  )
}

export default Nav
