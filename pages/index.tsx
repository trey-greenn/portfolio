import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link';
import React from 'react';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  
  return (
    <main
    >

      <div className="relative flex justify-center p-8 lace-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <h1 className="font-bold text-2xl text-center">William Trey Green</h1>
 
        
      </div>
      <div className="grid grid-cols-5"> 
      
      <div className="col-start-2 col-end-5 ">

      
      <div className="port_website grid grid-cols-2 rounded-lg p-4  bg-sky-900">
        <Image
          src="/Untitled.png"
          alt="Guess That Clue"
          width={180}
          height={48}
        
        />
        <Link href="https://mergacquilous.com ">
          <h2 className="font-bold text-center">
            Mergacquilous
          </h2>
         
          <p className="mt-6 mb-4 text-center">
            You think you know business? If you were given data that painted the financial picture of a business. Would you be able to solve the riddle? Probably not. Want to give it a shot?
          </p>
          <p>Tech Stack : Next.Js, Python, Mongo DB, Typescript, Tailwindcss, Vercel, </p>
          
        </Link>        
      </div>
        
      
      <div className="rounded-lg border-white mt-12 col-start-2 col-end-5"> 
      
      <div className="port_website grid grid-cols-2 rounded-lg p-4  bg-green-900">
        <Image
          src="/Untitled.png"
          alt="Guess That Clue"
          width={180}
          height={48}
        
        />
        <Link href="https://gtc-navy.vercel.app/ ">
          <h2 className="font-bold text-center">
            Guess That Clue
          </h2>
          <p className="mt-6 mb-4 text-center">
            You think you know business? If you were given data that painted the financial picture of a business. Would you be able to solve the riddle? Probably not. Want to give it a shot?
          </p>
          <p>Tech Stack : Next.Js, GraphQL, Typescript, Tailwindcss, Vercel </p>
        </Link>        
      </div>
        
      </div>
      <div className="rounded-lg border-white mt-12 col-start-2 col-end-5"> 
      
      <div className="port_website grid grid-cols-2  rounded-lg p-4  bg-amber-900">
        <Image
          src="/Untitled.png"
          alt="Guess That Clue"
          width={180}
          height={48}
        
        />
        <Link href="https://theopenchess.com ">
          <h2 className="font-bold text-center">
            The Open Chess
          </h2>
          <p className="mt-6 mb-4 text-center">
            You think you know business? If you were given data that painted the financial picture of a business. Would you be able to solve the riddle? Probably not. Want to give it a shot?
          </p>
          <p>Tech Stack : Next.Js, GraphQL, Typescript, Tailwindcss, Vercel, Shopify </p>
        </Link>        
      </div>
        
      </div>

      
      </div>
      </div>
    </main>
  )
}
