import React from 'react';

import {Button} from "../../../components/ui/button";
import Mainbody from "../../(home)/_component/mainbody";
import {Card} from "../../../components/ui/card";

function Page() {
    return (
        <div>
            <Mainbody>
                <div className="grid grid-cols-12 gap-4">

                <div className="flex flex-col col-span-9 gap-4">
                    <div className="bg-green-600 h-[500px] w-full "></div>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="h-[100px] w-full bg-green-600"></div>
                        <div className="h-[100px] w-full bg-green-600"></div>
                        <div className="h-[100px] w-full bg-green-600"></div>
                        <div className="h-[100px] w-full bg-green-600"></div>
                    </div>
                    <div>
                        <h1>Product Name Bold</h1>
                        <div>
                            <Button>promoted</Button>
                            <p> Greater Accra , dome,42 min ago</p>
                        </div>
                        <hr/>
                        <div className='grid grid-cols-4'>
                            specification and image
                        </div>
                        <div className='grid grid-cols-2'>
                            specification in list tile
                        </div>
                        <div> <p>Comments on item</p>
                        <Button> Show Contact</Button>
                        </div>

                    </div>
                </div>
                    <div className="flex flex-col col-span-3 gap-4">
                        <Card className="w-full container p-4">
                            <h1>
                                Ghc 180000
                            </h1>
                            <Button>Negotiable</Button>
                            <Button variant={`outline`}> Request call back</Button>
                        </Card>
                        <Card className="w-full p-4 ">
                            <h1>
                                Seller Listtile
                            </h1>
                            <Button>Show Contact</Button>
                            <Button variant={`outline`}>Start Chat</Button>
                        </Card>
                        <Card className="w-full p-4 ">
                            <Button variant={`outline`}>Feedback</Button>
                        </Card>
                        <Card className="w-full p-4">
                            <Button variant={`outline`}>Mark unavailable</Button>
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