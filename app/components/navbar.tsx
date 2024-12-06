import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import { auth, signOut, signIn } from '@/auth';
import * as Avatar from "@radix-ui/react-avatar";


const Navbar = async () => {
  const session = await auth();

  return (
    <header className='px-5 py-2 bg-white shadow-sm max-w-screen-lg mx-auto rounded-b-2xl'>
      <nav className='flex justify-between items-center'>
        <Link href="/">
          <Image src="./logo.svg" alt='logo' className='py-2' width={120} height={30}/>
        </Link>

        <div className="flex items-center gap-5 text-black">
          <Link href="/explore">Explore</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/resource">Resource</Link>
        </div>

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>

              <form onSubmit={ async () => {
                "use server";

                await signOut({ redirectTo: "/" });
              }}>

                <button type='submit'>
                  Logout
                </button>
                
              </form>

              <Link href={`/user/${session?.user?.id}`}>
                <Avatar.Root>
                  <Avatar.Image className='Github_Avatar rounded-full' src={session?.user?.image || ""} width={40} />
                </Avatar.Root>
              </Link>
            </>
          ) : (
            <form onSubmit={ async () => {

              "use server";

              await signIn("github");

              }}>
                
              <button type="submit">
                Login
              </button>

            </form>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar