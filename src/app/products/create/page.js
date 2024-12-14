import React from 'react';
import {Card} from "../../../components/ui/card";
import {Input} from "../../../components/ui/input";
import Mainbody from "../../(home)/_component/mainbody";
import Navigationbar from "../../(home)/_component/navigationbar";

function Page() {
    return (
        <div>
            <Mainbody className=" gap-4
             flex flex-col">

                <Navigationbar/>

                <Card className="flex flex-col gap-4 p-5">
                    <h1 className="text-3xl font-bold"> Create Product Form</h1>
                    <div className="flex  flex-col p-6 gap-4">


                        <div className="flex flex-row gap-2">
                            <div>
                                <label id='pi'>Product images</label>
                                <Input type='file' name="pi" title="pn"/>
                            </div>

                        </div>

                        <div className="flex-row flex gap-4">

                            <div>

                                <label id='pn'>Product Name</label>
                                <Input type='text' name="pn" title="pn"/>
                            </div>
                            <div>

                                <label id='sp'>Selling price</label>
                                <Input type='number' name="sp" title="pn"/>
                            </div>
                        </div>
                    </div>


                </Card>
            </Mainbody>
        </div>
    );
}

export default Page;