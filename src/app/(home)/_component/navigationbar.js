import React from 'react';
import Mainbody from "@/app/(home)/_component/mainbody";
import Listtile from "@/app/(home)/_component/listtile";
import {Button} from "@/components/ui/button";
import Link from "next/link";
const header=[
    {'name':"products"},
    {'name':"investors"},
    {'name':"farmers"},
    {'name':"traders"},
    {'name':"statistics"},
];
function Navigationbar() {
    return (
        <Mainbody className="flex flex-row justify-between w-full items-center">
            <div className="flex flex-row gap-10 items-center text-white ">


                <Listtile title={"browse categories".toUpperCase()}/>

                <ul className="md:flex-row md:gap-4 hidden md:flex">
                    {header.map((item, index) => (
                       <Link key={index} href={`/${item.name}`}>
                        <li key={index}>{item.name.toUpperCase()}</li>
                       </Link>
                    ))}
                </ul>

            </div>
            <Button variant="outline">Sell</Button>
        </Mainbody>
    );
}

export default Navigationbar;