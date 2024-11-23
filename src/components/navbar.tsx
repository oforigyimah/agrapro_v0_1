import Link from "next/link";
import {Button} from "@/components/ui/button";

export function Navbar(){
    return(
        <div className="h-50 items-center justify-between bg-primary">
            <nav >
                <div>
                <ul className="flex gap-x-2">
                    <li>
                        <Link  href={"/products"}>PRODUCTS</Link>
                    </li>
                    <li>
                        <Link href={"/investors"}>INVESTORS</Link>
                    </li>
                    <li>
                        <Link href={"/farmers"}>FARMERS</Link>
                    </li>
                    <li>
                        <Link href={"/traders"}>TRADERS</Link>
                    </li>
                    <li>
                        <Link href={"/statistics"}></Link>
                    </li>
                </ul>
                </div>
                <div>
                    <Button variant={"outline"}>SELL</Button>
                </div>
            </nav>
        </div>
    )
}