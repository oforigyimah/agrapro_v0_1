import React from 'react';
import {Button} from "@/components/ui/button";
import {Card, CardDescription, CardTitle} from "@/components/ui/card";
import Mainbody from "@/app/agra/_component/mainbody";
import {MdFacebook} from "react-icons/md";
import {Input} from "@/components/ui/input";
import Listtile from "@/app/agra/_component/listtile";
const dummy = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
const d5 =[1,1,1,1,1];
const header=[
    {'name':"products"},
    {'name':"investor"},
    {'name':"farmers"},
    {'name':"traders"},
    {'name':"statistics"},
];
const sidebar=[
    {'name':"crops"},
    {'name':"animal husbandry"},
    {'name':"aquaculture"},
    {'name':"horticulture"},
    {'name':"agro-forestry"},
    {'name':"agriculture eng"},
    {'name':"plant protection"},
    {'name':"sustainable agric"},
    {'name':"farm management"},
    {'name':"jobs"},
    {'name':"others"},
];

function Page(props) {
    return (
        <div>
            <Mainbody className='flex flex-row justify-between h-[70px] py-6 px-5 items-center'>
                <div>agra pro</div>
                <div className="w-[400px]"><Input placeholder="Search an item ...."/></div>
                <div className="flex flex-row gap-4"><Button className='bg-green-600'>Sign Up</Button><Button
                    variant="outline">Login</Button></div>
            </Mainbody>
            <div className='flex flex-row justify-between bg-green-600 h-[70px] w-full items-center'>
                <Mainbody className="flex flex-row justify-between w-full items-center">
                   <div className="flex flex-row gap-10 items-center text-white ">


                       <Listtile title={"browse categories".toUpperCase()}/>

                       <ul className="flex flex-row gap-4">
                           {header.map((item, index) => (
                               <li key={index}>{item.name.toUpperCase()}</li>
                           ))}
                       </ul>

                   </div>
                    <Button variant="outline">Sell</Button>
                </Mainbody>

            </div>
            <Mainbody className="flex flex-row justify-between h-[70dvh] w-full gap-4 ">
                <div className="w-[300px] bg-gray-400">
                    {sidebar.map((item, index) => (
                        <Listtile key={index} title={
                            item.name.toUpperCase()
                        } />
                    ))}
                </div>
                <div className="w-full bg-blue-800"></div>
            </Mainbody>
            <div className="flex flex-col  w-full">
                <div className="h-[20px] bg-green-600 w-full"></div>
                <div className="h-full bg-gray-400 w-full py-2 px-5">
                    <Mainbody className="py-5 gap-4 flex flex-col">

                        <div className="justify-between flex flex-row w-full items-center">

                            <h1><span className="font-semibold">
                            New
                        </span> <span className="text-red-700 font-semibold">
                            Arrival
                        </span></h1>
                            <Button className='bg-green-700'>view more</Button>
                        </div>

                        <div className="grid grid-cols-5 gap-8">
                            {d5.map((row, i) => (

                                <div>
                                    <Card key={i} className="h-[200px] bg-green-800"> </Card>
                                    <h1>products</h1>
                                    <p className="font-bold">GHC 200</p>
                                </div>
                            ))}

                        </div>
                    </Mainbody>
                </div>

            </div>
            <Mainbody className="flex flex-col w-full py-10 gap-4 ">
                <h1 className="font-bold">Trending ads</h1>
                <div className="grid grid-cols-5 gap-8">
                    {dummy.map((item, i) => (
                        <Card key={i} className="h-[130px]"></Card>
                    ))}
                </div>
            </Mainbody>
            <div className="flex flex-col  w-full">
                <div className="h-[20px] bg-green-600 w-full"></div>
                <div className="h-full bg-gray-400 w-full py-2 px-5">
                    <Mainbody className="py-5 gap-4 flex flex-col">
                        <div className="justify-between flex flex-row w-full items-center">

                            <h1 className="flex flex-row gap-1">
                                <span className="text-red-700 font-semibold">
                            Best
                        </span>
                                <span className="font-semibold">
                            Selling
                        </span>
                            </h1>
                            <Button className='bg-green-700'>view more</Button>
                        </div>

                        <div className="grid grid-cols-5 gap-8">
                            {d5.map((row, i) => (
                                <div>

                                <Card key={i} className="h-[200px] bg-green-800"> </Card>
                                    <h1>products</h1>
                                    <p className="font-bold">GHC 200</p>
                                </div>
                            ))}

                        </div>
                    </Mainbody>
                </div>

            </div>
            <div className="bg-gray-400  w-full mt-10">
                <Mainbody className="py-5 grid grid-cols-4 gap-8">
                    <div className="flex flex-col">
                        <p>Follow Us On Social Media</p>
                        <div>
                            <MdFacebook/>


                        </div>
                    </div>
                    <div>
                        <h1>Links</h1>
                        <ul>
                            {d5.map((item, i) => (
                                <li key={i}>links</li>
                            ))}

                        </ul>
                    </div>
                    <div>
                        <h1>Links</h1>
                        <ul>
                            {d5.map((item, i) => (
                                <li key={i}>links</li>
                            ))}

                        </ul>
                    </div>
                    <div>
                        <h1>Links</h1>
                        <ul>
                            {d5.map((item, i) => (
                                <li key={i}>links</li>
                            ))}

                        </ul>
                    </div>

                </Mainbody>

            </div>
            <div className="bg-green-600">
                <Mainbody className="flex flex-row gap-4 text-white py-5">
                    <p>CopyRight 2024</p>
                    <p>Agrapro.org - All Rights Reserved</p>
                </Mainbody>
            </div>
        </div>
    );
}

export default Page;