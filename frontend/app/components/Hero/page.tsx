
import "./Hero.css";
import heroImg  from "../../../public/Hero-image.png";
import Image from "next/image";

const Page = () => {
    return (
    <div className="Hero ">
            <div className="left-section text-left">
                <h1 className="text-[48.83px] ">Plan your <span>events</span> with us!</h1>
                <p className="text-[31.25px] w-[601px] h-[261px] font-extralight">Step into the realm of corporate event perfection with<span> Events by Larah_O</span>
                , where meticulous checklists meet an
                    atmosphere of excellence, elevating your gatherings to the A-level!
                </p>
                <button className="button transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Start Planning</button>
        </div>
            <div className="right-section">
                <div className="w-[450px] h-[421.42px] bg-[var(--brown)] rounded-[20px]"></div>
                <Image src={heroImg} alt="hero-image" className="heroImg" />
        </div>
    </div>
    );
}
 
export default Page;