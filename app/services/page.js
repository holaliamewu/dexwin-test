import Link from "next/link";
import Footer from "../components/footer";
import { brandsWorkedWithData } from "../site-data";
import { ChevronUp, Menu } from "lucide-react";


export default function AboutPage() {
  return (
  <div>
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
        <Menu size="32" alt="Menu Icon" className=" text-black"/>
    </header>
    <section className="bg-white w-[90%] text-black mx-auto" >
        <h1 className="mt-12 md:mt-[96px] max-w-[1000px] mb-4 text-5xl md:text-[80px] font-bold"><span className="text-[#02aa69] " >DEXWIN</span> provides elite digital services</h1>
        <p className="text-2xl max-w-[800px] " >
        Tailored solutions for every stage of product development    
        </p>
        <img src="/dexwin_assets/about-page-image.png" alt="About Us" className="w-full h-[600px] mt-8 rounded-3xl shadow-lg object-cover object-center md:object-fit" />
    </section>
    <section className="flex flex-col md:flex-row items-start justify-between bg-white w-[90%] mx-auto text-black py-6 md:py-[100px]" >
          <div className="flex items-end gap-4 w-fit mt-32 md:mt-[200px] mb-[64px] " >
              <img src="/dexwin_assets/title-icon.svg" alt="How We Do It" className="w-[28px]" />
              <h2 className="text-3xl md:text-[36px] font-bold " >SERVICES</h2>
            </div>

            <span className="grid grid-cols-1 md:grid-cols-2 gap-8" >
              <div className="md:max-w-100 px-6 py-10 rounded-lg bg-[#f2edfd]" >
                <img src="/dexwin_assets/product-design.svg" alt="Product Design Icon" className="mb-[30px]" />
                <h3 className="text-[24px] font-semibold mb-2" >Product Design</h3>
                <p className="text-[16px] text-zinc-500 " >Intuitive, user-centered interfaces and user experiences</p>
              </div>
              <div className="md:max-w-100 px-6 py-10 rounded-lg bg-[#f2edfd]" >
                <img src="/dexwin_assets/software-development.svg" alt="Product Design Icon" className="mb-[30px]" />
                <h3 className="text-[24px] font-semibold mb-2" >Software Development</h3>
                <p className="text-[16px] text-zinc-500 " >Scalable web and mobile app solutions using modern frameworks</p>
              </div>
              <div className="md:max-w-100 px-6 py-10 rounded-lg bg-[#f2edfd]" >
                <img src="/dexwin_assets/data-analytics.svg" alt="Product Design Icon" className="mb-[30px]" />
                <h3 className="text-[24px] font-semibold mb-2" >Data Analytics</h3>
                <p className="text-[16px] text-zinc-500 " >Actionable insights from raw data to guide decisions</p>
              </div>
              <div className="md:max-w-100 px-6 py-10 rounded-lg bg-[#f2edfd]" >
                <img src="/dexwin_assets/skills-training2.svg" alt="Skills training Icon" className="mb-[30px]" />
                <h3 className="text-[24px] font-semibold mb-2" >Skills Training</h3>
                <p className="text-[16px] text-zinc-500 " >Tailored programs to upskill internal teams</p>
              </div>
              <div className="md:max-w-100 px-6 py-10 rounded-lg bg-[#f2edfd]" >
                <img src="/dexwin_assets/talent-outsourcing.svg" alt="Talent Sourcing Icon" className="mb-[30px]" />
                <h3 className="text-[24px] font-semibold mb-2" >Talent Sourcing</h3>
                <p className="text-[16px] text-zinc-500 " >Contract-based or embedded team members across roles and stacks</p>
              </div>
              <div className="md:max-w-100 px-6 py-10 rounded-lg bg-[#f2edfd]" >
                <img src="/dexwin_assets/it-consulting.svg" alt="IT Consulting Icon" className="mb-[30px]" />
                <h3 className="text-[24px] font-semibold mb-2" >IT Consulting</h3>
                <p className="text-[16px] text-zinc-500 " >We offer a wide range of general services to support your business operations. From consulting to implementation, our experts are here to ensure your success.</p>
              </div>
            </span>
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