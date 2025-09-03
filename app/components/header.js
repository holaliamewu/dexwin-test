import { Menu } from "lucide-react";


export default function Header() {
  return (
    <header 
    className=" flex items-center justify-between w-full px-4 md:px-8 pt-8 mx-auto pb-4">
        <div className="" >
          <img src="/dexwin_assets/dexwin-logo.svg" alt="Dexwin Logo" className="h-6 w-auto"/>
        </div>
        <Menu size="32" alt="Menu Icon" className=" text-white"/>
    </header>
  );
}