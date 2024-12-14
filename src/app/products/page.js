import React from 'react';
import Mainbody from "../(home)/_component/mainbody";
import Navigationbar from "../(home)/_component/navigationbar";
import {Card, CardDescription, CardFooter, CardHeader} from "../../components/ui/card";
import {Input} from "../../components/ui/input";

function Page() {
    return (
        <div>
            <Mainbody>
                <Mainbody className=" gap-4
             flex flex-col">

                    <Navigationbar/>

                    <Card className="flex flex-col gap-4 p-5">
                        <h1 className="text-3xl font-bold">My Products</h1>
                        <div className="grid grid-cols-3 gap-4">
                            <Card>
                                <CardHeader>
                                    <div className="flex flex-row justify-between">
                                        <h1 className="text-3xl font-bold">Mango</h1>
                                        <p className="text-3xl font-bold">GHC 800</p>
                                    </div>
                                    <hr/>
                                </CardHeader>
                                <CardDescription className="p-5 grid grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-2 py-2 ">
                                        <h1 className="font-semibold  text-xl">Big Red</h1>
                                        <p className="text-gray-400">type</p>
                                    </div>
                                    <div className="flex flex-col gap-2 py-2 ">
                                        <h1 className="font-semibold text-xl">Red</h1>
                                        <p className="text-gray-400">color</p>
                                    </div>
                                    <div className="flex flex-col gap-2 py-2 ">
                                        <h1 className="font-semibold text-xl">Small</h1>
                                        <p className="text-gray-400">size</p>
                                    </div>
                                    <div className="flex flex-col gap-2 py-2 ">
                                        <h1 className="font-semibold text-xl">Per Boxes</h1>
                                        <p className="text-gray-400">unit</p>
                                    </div>
                                </CardDescription>
                                <hr/>
                                <CardFooter>
                                    <div className="flex flex-row gap-2 py-2 ">
                                        <h1>Rating</h1>
                                    <p>5.0</p>
                                    </div>
                                </CardFooter>
                            </Card>

                        </div>


                    </Card>
                </Mainbody>
            </Mainbody>
        </div>
    );
}

export default Page;