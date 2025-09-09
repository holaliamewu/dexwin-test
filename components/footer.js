import { footerLinksOneData, footerLinksTwoData } from "@/utils/site-data";
import Link from "next/link";


export default function Footer() {
  return (
      <footer className="flex flex-col bg-black text-white -my-1">
        <section className="flex flex-col md:flex-row justify-between gap-4 px-8 md:px-25 py-20 " >
          <span className="max-w-[300px] mb-4" >
            <Link href="/" className="" >
              <img src="/dexwin_assets/dexwin-logo.svg" />
            </Link>
            <p className="text-[16px] my-8" >We are on a mission to become Europe&apos;s 
              go-to partner for hgih quality IT and talent outsourcing 
              from Africa.
            </p>
            <h4 className="text-[16px] font-bold" >Let&apos;s build your innovation together</h4>
          </span>
          <nav className="flex flex-col md:flex-row gap-8 md:gap-64" >
              <span className="flex flex-col gap-4" >
                {
                  footerLinksOneData.map((link) => (
                    <Link href={link.linkUrl} className="" >{link.linkName}</Link>
                  ))
                }
              </span>
              <span className="flex flex-col gap-4" >
                {
                  footerLinksTwoData.map((link) => (
                    <Link href={link.linkUrl} className="" >{link.linkName}</Link>
                  ))
                }
              </span>
          </nav>
        </section>

        <span className="my-8 py-8 pl-8 md:text-center  border-t-1 border-t-gray-500" >Copyright &copy; 2025 Dexwin</span>
    </footer>
  );
}