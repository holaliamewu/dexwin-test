import { X } from "lucide-react";
import Link from "next/link";
import { sidebarLinksData } from "../utils/site-data";


export default function Sidebar({ setOpenMenu  }) {
  return (
    <section className="fixed overflow-y-scroll animate-slide-down z-50 top-0 left-0 right-0 bottom-0 flex flex-col gap-8 w-full min-h-full px-6 md:px-20 py-4 md:py-20 lg:py-25 bg-[#232323] text-white" >
        <div className="flex items-center justify-between gap-4" >
            <img src="/dexwin_assets/dexwin-logo.svg" className="w-20 md:w-40 h-10"/>
            <button onClick={() => setOpenMenu(false)} className="flex items-center gap-4" >
                <h4 className="text-[16px] " >Close</h4>
                <X size="32" />
            </button>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between w-full mt-12 md:mt-36" >
            <nav className="flex justify-start flex-col gap-8 mb-22 text-left" >
                {
                    sidebarLinksData.map(link => (
                        <Link key={link.linkName} href={link.linkUrl} className="w-full text-6xl md:text-[80px] font-bold hover:underline underline-offset-2" >{link.linkName}</Link>
                    ))
                }
            </nav>
            <section className="w-fit flex flex-col  gap-[65px] " >
                <div className="flex flex-col items-start md:items-end " >
                    <h3 className="text-[24px] font-bold text-left md:text-right mb-4" >Contact Details</h3>
                    <span className="text-[#00fe9c] mb-2 " >[+233] 55 089 4945</span> 
                    <span className="text-[#00fe9c] " >adminoffice@dexwin.net</span> 
                </div>
                <div className="flex flex-col items-start md:items-end " >
                    <h3 className="text-[24px] font-bold text-left md:text-right mb-4" >Address</h3>
                    <span className="text-[#c8c8c8] " >9 Suhum Street, Accra, Ghana</span> 
                </div>
                <button 
                className="flex items-center items-end justify-center md:ml-auto px-[23px] py-[13px] w-fit text-[18px] w-fit font-bold text-center mb-8 md:mb-30 bg-[#09a768] rounded-full " 
                >Request a Quote
                </button> 
            </section>
        </div>
        <footer className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between border-t pt-4 gap-8 md:gap-1" >
            <span className="flex gap-2" >
                <img src="/dexwin_assets/facebook.svg" />
                <img src="/dexwin_assets/linkedin.svg" />
            </span>
            <nav className="flex flex-col md:flex-row gap-4" >
                <Link href="" className="text-[16px] font-medium hover:underline " >Terms and Conditions</Link>
                <Link href="" className="text-[16px] font-medium hover:underline " >Privacy Policy</Link>
                <Link href="" className="text-[16px] font-medium hover:underline " >Legal</Link>
            </nav>
        </footer>
    </section>
  );
}