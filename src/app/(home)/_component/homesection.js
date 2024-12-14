import React from 'react';
import Mainbody from "@/app/(home)/_component/mainbody";
import {Card} from "@/components/ui/card";
import Image from "next/image";
function HomeSection({title,button,data}) {
    return (
        <div className="flex flex-col  w-full">
            <div className="h-[20px] bg-green-600 w-full"></div>
            <div className="h-full bg-gray-300 w-full py-2 px-5">
                <Mainbody className="py-5 gap-4 flex flex-col">

                    <div className="justify-between flex flex-row w-full items-center">

                        <div>{title}</div>
                        <div>{button}</div>
                    </div>

                    <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {data.map((element, i) => (

                            <div key={i}>
                                <Card key={i} className={` relative h-[200px]`}>
                                    <Image src={`/images/products/${element.img}`}
                                           layout="fill"  // Ensures the image fills the parent container
                                           objectFit="cover"  // Makes the image behave like background-size: cover
                                           objectPosition="center"  // Centers the image
                                           alt={`agra pro`}/>
                                </Card>
                                <h1>{element.name}</h1>
                                <p className="font-bold">GHC {element.price}</p>
                            </div>
                        ))}

                    </div>
                </Mainbody>
            </div>

        </div>
    );
}

export default HomeSection;