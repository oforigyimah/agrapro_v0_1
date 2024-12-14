import React from 'react';

import {Button} from "../../../components/ui/button";
import Mainbody from "../../(home)/_component/mainbody";
import {Card} from "../../../components/ui/card";
import Image from "next/image";

function Page() {
    return (
        <div>
            <Mainbody>
                <div className="md:grid grid-cols-12 gap-4 flex flex-col">

                <div className="flex flex-col col-span-9 gap-4">
                    <div className="bg-green-600 h-[500px] w-full ">
                        <Card  className={` relative h-[500px]`}>
                            <Image src={`/images/products/mango.jpg`}
                                   layout="fill"  // Ensures the image fills the parent container
                                   objectFit="cover"  // Makes the image behave like background-size: cover
                                   objectPosition="center"  // Centers the image
                                   alt={`agra pro`}/>
                        </Card>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="h-[100px] w-full bg-green-600">
                            <Card className={` relative h-[100px]`}>
                                <Image src={`/images/products/mango.jpg`}
                                       layout="fill"  // Ensures the image fills the parent container
                                       objectFit="cover"  // Makes the image behave like background-size: cover
                                       objectPosition="center"  // Centers the image
                                       alt={`agra pro`}/>
                            </Card>
                        </div>
                        <div className="h-[100px] w-full bg-green-600">
                            <Card className={` relative h-[100px]`}>
                                <Image src={`/images/products/mango.jpg`}
                                       layout="fill"  // Ensures the image fills the parent container
                                       objectFit="cover"  // Makes the image behave like background-size: cover
                                       objectPosition="center"  // Centers the image
                                       alt={`agra pro`}/>
                            </Card>
                        </div>
                        <div className="h-[100px] w-full bg-green-600">
                            <Card className={` relative h-[100px]`}>
                                <Image src={`/images/products/mango.jpg`}
                                       layout="fill"  // Ensures the image fills the parent container
                                       objectFit="cover"  // Makes the image behave like background-size: cover
                                       objectPosition="center"  // Centers the image
                                       alt={`agra pro`}/>
                            </Card>
                        </div>
                        <div className="h-[100px] w-full bg-green-600">
                            <Card className={` relative h-[100px]`}>
                                <Image src={`/images/products/mango.jpg`}
                                       layout="fill"  // Ensures the image fills the parent container
                                       objectFit="cover"  // Makes the image behave like background-size: cover
                                       objectPosition="center"  // Centers the image
                                       alt={`agra pro`}/>
                            </Card>
                        </div>
                    </div>
                    <div className=" flex flex-col  gap-4">
                        <h1 className="font-bold text-4xl">Mango</h1>
                        <div>
                            <p> Greater Accra , dome</p>
                            <p> 42 min ago</p>
                        </div>
                        <hr/>
                        <div className='grid grid-cols-2'>
                            <div className="flex flex-col gap-2 py-2 ">
                                <h1 className="font-bold text-2xl">Big Red</h1>
                                <p className="text-gray-400">type</p>
                            </div>
                            <div className="flex flex-col gap-2 py-2 ">
                                <h1 className="font-bold text-2xl">Red</h1>
                                <p className="text-gray-400">color</p>
                            </div>
                            <div className="flex flex-col gap-2 py-2 ">
                                <h1 className="font-bold text-2xl">Small</h1>
                                <p className="text-gray-400">size</p>
                            </div>
                            <div className="flex flex-col gap-2 py-2 ">
                                <h1 className="font-bold text-2xl">Per Boxes</h1>
                                <p className="text-gray-400">unit</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="py-3 grid grid-cols-2 gap-4">

                            <Card className="px-2 py-3">

                            <h1>This ia a very good product</h1>
                            <p className="flex justify-end">~ Sammed</p>
                            </Card>
                            <Card className=" px-2 py-3">

                                <h1>The delivery was fast</h1>
                                <p className="flex justify-end">~ Ofori</p>
                            </Card>
                            <Card className=" px-2 py-3">

                                <h1>Best seller, i recommend him to any one</h1>
                                <p className="flex justify-end">~ Malik</p>
                            </Card>
                        </div>

                    </div>
                </div>
                    <div className="flex flex-col col-span-3 gap-4">
                        <Card className="w-full container p-4">
                            <div>

                            <h1 className="font-bold text-4xl">
                                Ghc 180000
                            </h1>
                                <p className="text-gray-400">
                                    price
                                </p>
                            </div>
                            <Button>Negotiable</Button>
                        </Card>
                        <Card className="w-full p-4 gap-4 flex flex-col">
                            <div className="flex flex-row  gap-2 items-center">
                                <div className="rounded-full w-9 h-9 bg-green-600">

                                </div>
                                <div className="flex flex-col">
                                    <h1>Samuel Ansah</h1>
                                    <p className="text-gray-400">Seller name</p>
                                </div>
                            </div>
                            <div className="flex flex-row gap-2 items-center">

                            <Button>Show Contact</Button>
                            <Button variant={`outline`}>Start Chat</Button>
                            </div>
                        </Card>
                        <Card className="w-full p-4">
                        <h1>Safety tips</h1>
                            <p>Avoid sending any prepayment</p>
                        </Card>
                    </div>
                </div>
            </Mainbody>
        </div>
    );
}

export default Page;