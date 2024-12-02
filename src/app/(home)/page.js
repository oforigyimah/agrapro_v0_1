import React from 'react';
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import Mainmenubar from "./_component/mainmenubar";
import Navigationbar from "./_component/navigationbar";
import Mainbody from "./_component/mainbody";
import Sidebarx from "./_component/sidebar";
import HomeSection from "./_component/homesection";
import Footer from "./_component/footer";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "../../components/ui/carousel";
import Image from "next/image";


const dummy = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const d5 = [
    {
    'name': "Cassava",
    'price': "200",
        'img':"cassava.jpg"
},
    {
        'name': "Mango",
        'price': "100",
        'img':'mango.jpg'
    },
    {
        'name': "Orange",
        'price': "150",
        'img':"orange.jpg"
    },
    {
        'name': "Yam",
        'price': "124",
        'img':'yam.jpg'
    },
    {
        'name': "Cocoa",
        'price': "300",
        'img':'cocoa.jpg'
    },
];


function Page() {
    return (
        <div>
            <Mainmenubar/>
            <div className='flex flex-row justify-between bg-green-600 h-[70px] w-full items-center'>
                <Navigationbar/>
            </div>
            <Mainbody className="flex flex-row justify-between h-[70dvh] w-full gap-12 ">
                <Sidebarx/>
                <div className="w-full">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                    >
                        <CarouselContent>
                            <CarouselItem className={`h-[70dvh] w-full`}> <Image src={`/images/BANNER-1.jpg`} alt={`agra pro`} width="7000" height="7000"/></CarouselItem>
                            <CarouselItem className={`h-[70dvh] w-full`}> <Image src={`/images/BANNER-2.jpg`} alt={`agra pro`} width="7000" height="7000"/></CarouselItem>
                            <CarouselItem className={`h-[70dvh] w-full`}> <Image src={`/images/BANNER-3.jpg`} alt={`agra pro`} width="7000" height="7000"/></CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </Mainbody>
            <HomeSection title={
                <h1><span className="font-semibold">
                            New
                        </span> <span className="text-red-700 font-semibold">
                            Arrival
                        </span></h1>}
                         button={
                             <Button className='bg-green-700'>view more</Button>
                         }
                         data={d5}/>
            <Mainbody className="flex flex-col w-full py-10 gap-4 ">
                <h1 className="font-bold">Trending ads</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {dummy.map((item, i) => (
                        <Card key={i} className="h-[130px]"></Card>
                    ))}
                </div>
            </Mainbody>
            <HomeSection title={
                <h1 className="flex flex-row gap-1">
                                <span className="text-red-700 font-semibold">
                            Best
                        </span>
                    <span className="font-semibold">
                            Selling
                        </span>
                </h1>
            }
                         button={
                             <Button className='bg-green-700'>view more</Button>
                         }
                         data={d5}/>
            <Footer/>
        </div>
    );
}

export default Page;