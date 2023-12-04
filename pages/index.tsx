import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link';
import React from 'react';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  
  return (
    <main
    >

      <div className="mt-24">
        <h1 className="font-bold text-2xl text-center">William Trey Green</h1>
 
        
      </div>
      <div className="grid md:grid-cols-9 mx-12 gap-2"> 
      
      {/* <div className="col-start-2 col-end-5 "> */}

      <div className="rounded-lg border-white mt-12 col-span-3 "> 

      <div className="port_website grid grid-flow-row grid-flow-col rounded-lg bg-gradient-to-r from-sky-900 to-green-900 place-items-center">
        <Image
          src="/Untitled.png"
          alt="Guess That Clue"
          width={84}
          height={84}
        
        />
        <Link href="https://mergaculious.vercel.app/home ">
          <h2 className="font-bold text-center">
            Mergacquilous
          </h2>
         
          <p className="text-center text-clip">
          It serves as a comprehensive hub for real-time economic updates, insightful analyses, and key financial indicators from around the globe. Stay ahead of the economy!
             </p>
          
        </Link>        
      </div>
      </div>
        
      
      <div className="rounded-lg border-white mt-12 col-span-3 "> 
      
      <div className="port_website grid grid-flow-col grid-flow-row rounded-lg bg-green-900 place-items-center">
        <Image
          src="/Untitled.png"
          alt="Guess That Clue"
          width={84}
          height={84}
        
        />
        <Link href="https://gtc-navy.vercel.app/ ">
          <h2 className="font-bold text-center">
            Guess That Clue
          </h2>
          <p className="text-center">
            You think you know business? If you were given data that painted the financial picture of a business. Would you be able to solve the riddle? Probably not. Want to give it a shot?
          </p>
        </Link>        
      </div>
        
      </div>
      <div className="rounded-lg border-white mt-12 col-span-3"> 
      
      <div className="port_website grid grid-flow-col grid-flow-row rounded-lg bg-gradient-to-r from-green-900 bg-amber-900 place-items-center">
        <Image
          src="/Untitled.png"
          alt="Guess That Clue"
          width={84}
          height={84}
        
        />
        <Link href="https://theopenchess.com ">
          <h2 className="font-bold text-center ">
            The Open Chess
          </h2>
          <p className="text-center">
          An all-in-one online destination for chess enthusiasts of all levels, offering interactive learning tools, engaging gameplay options, and a comprehensive shop for high-quality chess products</p>
        </Link>        
      </div>
        
      </div>

      
      {/* </div> */}
      </div>
    </main>
  )
}
