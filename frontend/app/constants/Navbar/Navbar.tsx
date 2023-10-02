'use client'

import Link from "next/link";
import "./Navbar.css";
import { usePathname } from "next/navigation";
import zeyada from '../../serverComp/zeyada';
import { useEffect, useState } from "react";
 
const Navbar = () => {

    const pathname = usePathname();
    const [clientWindowHeight, setClientWindowHeight] = useState("");
    const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);

    useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    });
    
 const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 30 - backgroundTransparacyVar * 20;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);
    
  

    return ( 
        <nav className="flex gap-[105px] p-0 align-center fixed" style={{
        background: `rgba(254, 255, 242, ${backgroundTransparacy})`,
        padding: `${padding}px 35px`,
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
        borderRadius: "20px",
        backdropFilter: `blur(${boxShadow * 100}px)`
      }}>
            <h1 className={`${zeyada.className} text-[var(--brown)] text-[40px] w-[302px] h-[30px] hover:cursor-pointer transition ease-in-out hover:translate-y-1 logo`}><Link href="/components/Hero">EVENTS.byLarah_O</Link></h1>
            <div className="flex gap-[20px] align-center justify-center">
                <ul className="flex gap-[30px] align-center justify-center">
                    <li className={`${pathname=="/components/Services" ? "active" :""} text-[20px] hover:font-bold`}><Link href="/components/Services">Services</Link></li>
                    <div className="h-[33px] w-[1px] bg-[var(--black)]"></div>
                    <li className={`${pathname=="/components/About" ? "active" :""} text-[20px] hover:font-bold`}><Link href="/components/About">About Us</Link></li>
                     <div className="h-[33px] w-[1px] bg-[var(--black)]"></div>
                    <li className={`${pathname=="/components/Contact" ? "active" :""} text-[20px] hover:font-bold`}><Link href="/components/Contact">Contact</Link></li>
                </ul>
                <div className="flex gap-[30px] ml-[4rem] ">
                    <Link href="/Login"><button className="bg-[var(--gold)] w-[133px] h-[42px] text-center align-center rounded-[10px] text-[var(--white)] transition ease-in-out delay-5 hover:scale-110 duration-300 hover:bg-[var(--deep-gold)]">Login</button></Link>
                    <Link href="/components/Sign-up"><button className="w-[133px] h-[42px] rounded-[10px] border-[var(--gold)] border-[1px] text-[var(--gold)] transition ease-in-out delay-5  hover:scale-110 duration-300 hover:text-[var(--deep-gold)] hover:border-[var(--deep-gold)]">Sign Up</button></Link>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;