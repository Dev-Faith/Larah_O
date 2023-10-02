import Image from 'next/image'
import { Poppins } from "next/font/google";
import Hero from "./components/Hero/page";
import Services from './components/Services/page';


export default function Home() {
  return (
    <main className= "">
      <Hero />
    </main>
  )
}
