import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link';
import React from 'react';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        {/* {data.map((dat :any, index) => (
          <p>{dat.name}</p>
        ))} */}
        
      </div>
      <div className="rounded-lg border-white mt-12"> 
      
      <div className="port_website grid grid-cols-2 border border-gray-600 rounded-lg p-4 ring-inset ring bg-gray-900">
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
          <p>  </p>
          <p className="mt-6 mb-4 text-center">
            You think you know business? If you were given data that painted the financial picture of a business. Would you be able to solve the riddle? Probably not. Want to give it a shot?
          </p>
          <p>Tech Stack : Next.Js, Python, Mongo DB, Typescript, Tailwindcss, Vercel, </p>
          
        </Link>        
      </div>
        
      </div>
      <div className="rounded-lg border-white mt-12"> 
      
      <div className="port_website grid grid-cols-2 border border-gray-600 rounded-lg p-4 ring-inset ring bg-gray-900">
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
      <div className="rounded-lg border-white mt-12"> 
      
      <div className="port_website grid grid-cols-2 border border-gray-600 rounded-lg p-4 ring-inset ring bg-gray-900">
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
      <div className="rounded-lg border-white mt-12"> 
      
      <div className="port_website grid grid-cols-2 border border-gray-600 rounded-lg p-4 ring-inset ring bg-gray-900">
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
      

      
    </main>
  )
}
