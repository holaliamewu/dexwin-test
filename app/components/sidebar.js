import { X } from "lucide-react";
import Link from "next/link";
import { sidebarLinksData } from "../site-data";


export default function Sidebar({ setOpenMenu  }) {
  return (
    <section className="fixed overflow-y-scroll animate-slide-down z-50 top-0 left-0 right-0 bottom-0 flex flex-col gap-8 w-full min-h-full px-20 py-25 bg-[#232323] text-white" >
        <div className="flex items-center justify-between gap-4" >
            <img src="/dexwin_assets/dexwin-logo.svg" className="w-20 md:w-40 h-10"/>
            <button onClick={() => setOpenMenu(false)} className="flex items-center gap-4" >
                <h4 className="text-[16px] " >Close</h4>
                <X size="32" />
            </button>
        </div>
        <div className="flex items-center justify-between w-full mt-12 md:mt-36" >
            <nav className="flex flex-col gap-8 mb-22" >
                {
                    sidebarLinksData.map(link => (
                        <Link href={link.linkUrl} className="text-6xl md:text-[80px] font-bold hover:underline underline-offset-2" >{link.linkName}</Link>
                    ))
                }
            </nav>
            <section className="flex flex-col gap-[65px] " >
                <div className="flex flex-col items-end " >
                    <h3 className="text-[24px] font-bold text-right mb-4" >Contact Details</h3>
                    <span className="text-[#00fe9c] mb-2 " >[+233] 55 089 4945</span> 
                    <span className="text-[#00fe9c] " >adminoffice@dexwin.net</span> 
                </div>
                <div className="flex flex-col items-end " >
                    <h3 className="text-[24px] font-bold text-right mb-4" >Address</h3>
                    <span className="text-[#c8c8c8] " >9 Suhum Street, Accra, Ghana</span> 
                </div>
                <button 
                    className="flex items-center justify-between text-[18px] font-bold text-cente mb-8 md:mb-30 r mx-auto bg-[#09a768] rounded-full " 
                >
                    <h3 className="px-[23px] py-[13px] text-white" >Request a Quote</h3>
                </button> 
            </section>
        </div>
        <footer className="flex items-center justify-between border-t pt-4" >
            <span className="flex gap-2" >
                <img src="/dexwin_assets/facebook.svg" />
                <img src="/dexwin_assets/linkedin.svg" />
            </span>
            <nav className="flex gap-4" >
                <Link href="" className="text-[16px] font-medium hover:underline " >Terms and Conditions</Link>
                <Link href="" className="text-[16px] font-medium hover:underline " >Privacy Policy</Link>
                <Link href="" className="text-[16px] font-medium hover:underline " >Legal</Link>
            </nav>
        </footer>
    </section>
  );
}