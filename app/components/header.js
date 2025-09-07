import { ChevronUp, Menu } from "lucide-react";
import Link from "next/link";


export default function Header({ setOpenMenu }) {
  return (
    <header 
    className=" flex items-center justify-between w-full px-4 md:px-[5%] pt-10 mx-auto pb-8">
        <Link href="/" className="flex gap-4" >
          <img src="/dexwin_assets/dexwin-logo.svg" className="w-25"/>
          <span className="flex items-center gap-4" >
            <span className="w-0.5 h-full bg-white" ></span>
            <img src="/dexwin_assets/ghana.svg" className="w-8 " /> 
            <ChevronUp size="18" />
          </span>
        </Link>
        <Menu onClick={() => setOpenMenu(true)} size="32" alt="Menu Icon" className=" text-white"/>
    </header>
  );
}