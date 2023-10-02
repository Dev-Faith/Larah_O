"use client"

import React from "react";
import { serv1, serv2, serv3, serv4, serv5, serv6 } from "../../../public";
import Image from "next/image";
import { FaLongArrowAltRight } from 'react-icons/fa';
import "./Services.css";



const Page = () => {
    const cardInfo = [
    {
        title: "Corporate Event Planing",
        imageURL: serv1
    },
    {
        title: "Event Decoration",
        imageURL: serv2
    },
    {
        title: "Event Checklist",
        imageURL: serv3 
    },
    {
        title: "Lot's More",
        imageURL:  serv4
    },
    {
        title: "Lot's More",
        imageURL: serv5
    },
    {
        title: "Lot's More",
        imageURL: serv6
    },
];

    return (
        <div className=" grid grid-cols-3 mt-[123px] gap-y-[2rem]">
       { cardInfo.map((card, index)=> <div key={index} className="align-center text-center w-[380px] h-[534px]  rounded-[20px] card">
           <Image src={card.imageURL} alt={card.title} width="300" height="400" className="w-[380px] h-[288px]"/>
            <div className="mt-[29px] flex flex-col gap-[25px]">
                <h3 className="card-title text-center text-[var(--black)] text-[20px] font-semibold">
                 {card.title}
                </h3>
                <p className="font-normal leading-[25px] w-[336px] h-[79px] text-center self-center text-[#5C3E00]">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                </p>
                <div className="flex w-[136.88px] h-[12px] self-center more flex-row mt-[-11px] hover:cursor-pointer">
                <p className=" text-[var(--black)] font-normal">Learn more</p>
                <FaLongArrowAltRight className="hover:animate-pulse"/>
                </div>
            </div>
        </div>)}
        </div>
    );
}
 
export default Page;