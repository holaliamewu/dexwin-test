import { Menu } from "lucide-react";
import Link from "next/link";


export default function Header() {
  return (
    <header 
    className=" flex items-center justify-between w-full px-4 md:px-8 pt-8 mx-auto pb-4">
        <Link href="/" >
          <img src="/dexwin_assets/dexwin-logo.svg" className="w-20"/>
        </Link>
        <Menu size="32" alt="Menu Icon" className=" text-white"/>
    </header>
  );
}