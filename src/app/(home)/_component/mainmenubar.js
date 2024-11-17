import React from 'react';
import Image from 'next/image'
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Mainbody from "@/app/(home)/_component/mainbody";

function Mainmenubar(props) {

    return (
        <Mainbody className='flex flex-row justify-between h-[70px] py-6 px-5 items-center'>
            <Image src={`/images/agra_logo_trans.png`} alt={`agra pro`} width="200" height="100"/>
            <div className="w-[400px]"><Input placeholder="Search an item ...."/></div>
            <div className="flex flex-row gap-4"><Button className='bg-green-600'>Sign Up</Button><Button
                variant="outline">Login</Button></div>
        </Mainbody>
    );
}

export default Mainmenubar;