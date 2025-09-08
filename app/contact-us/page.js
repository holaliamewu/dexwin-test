
'use client'

import Link from "next/link";
import Footer from "../../components/footer";
import { brandsWorkedWithData, faqsData } from "../../utils/site-data";
import { ChevronUp, Menu } from "lucide-react";
import { useState } from "react";
import Sidebar from "../../components/sidebar";


export default function ContactPage() {

  const [openMenu, setOpenMenu] = useState(false);

  return (
  <div>
    {openMenu && <Sidebar setOpenMenu={setOpenMenu} />}
    <header 
    className=" flex items-center justify-between w-full px-4 md:px-[5%] pt-4 md:pt-20 lg:pt-[50px] mx-auto pb-8">
        <Link href="/" className="flex gap-4 pt-2" >
          <img src="/dexwin_assets/dexwin-logo-black.svg" className="w-25"/>
          <span className="flex items-center gap-4" >
            <span className="w-0.5 h-full bg-black" ></span>
            <img src="/dexwin_assets/ghana.svg" className="w-8 " /> 
            <ChevronUp size="18" />
          </span>
        </Link>
        <button onClick={() => setOpenMenu(true)} >
          <Menu size="32" alt="Menu Icon" className=" text-black"/>
        </button>
    </header>
    <section className="bg-white w-[90%] text-black mx-auto" >
        <h1 className="mt-12 md:mt-[96px] pr-4 md:pr-0 max-w-[1000px] mb-4 text-5xl md:text-[80px] font-bold">Contact <span className="text-[#02aa69] " >DEXWIN</span> to build something unforgettable</h1>
        <p className="text-2xl max-w-[800px] " >
          We would love to learn more about your project and how we can help. Tell us about yourself with the form below and we will reach out
        </p>
        <section className="flex justify-between gap-12 mt-24 " >
          <form className="flex flex-col w-full gap-6 text-[18px] ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" >
              <span className="w-full" >
                  <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                  <input type="text" placeholder="Your Name" className="w-full rounded-lg p-3 border border-gray-300 p-2" />
              </span>
              <span className="w-full" >
                  <label htmlFor="email" className="block mb-2 font-medium">Company</label>
                  <input type="email" placeholder="Your Company" className="w-full rounded-lg border border-gray-300 p-3" />
              </span>
              <span className="w-full" >
                  <label htmlFor="name" className="block mb-2 font-medium">Email Address</label>
                  <input type="text" placeholder="Your Name" className="w-full rounded-lg border border-gray-300 p-3" />
              </span>
              <span className="w-full" >
                  <label htmlFor="email" className="block mb-2 font-medium">Phone Number</label>
                  <input type="email" placeholder="Your Email" className="w-full rounded-lg border border-gray-300 p-3" />
              </span>
            </div>
              <span className="w-full " >
                  <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                  <textarea placeholder="Your Message" className="w-full p-3 rounded-lg border border-gray-300" rows="4"></textarea>
              </span>
              <button type="submit" className="w-full px-8 py-4 bg-[#02aa69] rounded-full mt-6 text-white rounded">Send Message</button>
          </form>
            <img src="/dexwin_assets/about-us.png" alt="About Us" className="hidden md:flex flex-1" />
        </section>
    </section>

    <section className="flex flex-col bg-white w-[90%] mt-32 mx-auto text-black py-6 md:py-[100px]" >
          <div className="flex items-end gap-4 w-fit mb-[64px] " >
              <img src="/dexwin_assets/title-icon.svg" alt="How We Do It" className="w-[28px]" />
              <h2 className="text-3xl md:text-[36px] font-bold " >Frequently Asked Questions</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12" >
              {
                faqsData.map((faq) => (
                  <span key={faq.question} className="px-6 py-2 md:py-10 rounded-lg " >
                    <h3 className="text-[20px] md:text-[24px] font-semibold mb-2" >{faq.question}</h3>
                    <p className="text-[16px] text-zinc-500 " >{faq.answer}</p>
                  </span>
                ))
              }
            </div>
              
        </section>

        <section className="flex flex-col w-full  text-white bg-[#001f37] py-4 md:py-[80px] " >
          <span className="px-6 py-4 " >
            <h2 className="text-5xl font-bold text-center mx-auto mb-20" >We&apos;ve worked with <br />amazing brands</h2>  
            <div className="flex flex-wrap justify-center gap-6 " >
              {
                brandsWorkedWithData.map((brand) => (
                  <span 
                    key={brand.brandName} 
                    className="w-full md:w-[225px]  h-[107px] md:h-[109px] bg-contain md:bg-cover bg-center bg-no-repeat rounded-lg"
                    style={{ backgroundImage: `url(${brand.logoUrl})`}} ></span>
                ))
              }
            </div>
          </span>
        </section>
        <section className="flex flex-col md:flex-row items-start min-h-[500px] p-16 md:py-20 bg-[#232323] " >
        <div className="flex flex-col " >
          <h2 className="text-4xl md:text-[80px] mb-[56px] leading-normal font-bold text-white text-center md:text-left" >
            High quality & cost effective delivery with impact
            </h2>
        <button 
        className="flex items-center justify-between text-[18px] text-center mb-8 md:mb-30 mx-auto md:mr-auto bg-[#09a768] rounded-full " 
        >
          <h3 className="px-6 md:py-4 text-white" >Request a Quote</h3>
          <span className="bg-white w-16 h-16 rounded-full flex items-center justify-center " >
            <img src="/dexwin_assets/request-quote-arrow.svg" className="w-4" />
          </span>
        </button>
        </div>
        <img src="/dexwin_assets/footer-x.svg" className="hidden md:block w-[400px] flex-1 bg-[#232323]  " />
      </section>
      <Footer />
  </div>
  )
}