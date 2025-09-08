import Link from "next/link";
import Footer from "../../components/footer";
import { brandsWorkedWithData } from "../../utils/site-data";
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
        <h1 className="mt-12 md:mt-[96px] mb-4 text-7xl md:text-[80px] font-bold">We are <span className="text-[#02aa69] " >DEXWIN</span></h1>
        <p className="text-2xl max-w-[800px] " >
        We specialise in Product Design, Data Analytics and 
        Software development. We provide talent to leading firms 
        looking to expand their product teams.    
        </p>
        <img src="/dexwin_assets/about-page-image.png" alt="About Us" className="w-full h-[600px] mt-8 object-cover bg-center md:object-fit rounded-3xl shadow-lg" />
    </section>
    <section className="flex flex-col md:flex-row-reverse justify-center gap-16 bg-white text-black px-[5%] py-4 md:py-20 lg:py-[100px]" >
        <span>
          <p 
          className="text-[30px] md:text-[36px] font-bold mb-8" 
          >Dexwin is an end-to-end digital product development agency 
          with a focus on delivering usable products that solve problems.
          </p>
          <span className="flex flex-col md:flex-row " >
            <span className="inline-block text-[14px] font-medium w-fit md:min-w-fit max-h-fit px-4 py-2 mb-4 border border-black rounded-full   " >Who We Are?</span>
            <p className="text-gray-700 leading-relaxed text-lg md:ml-[40px]" >We specialize in product design, data analysis, software development, 
              digital advertising and general services. We provide talent to leading firms looking
              to expand their product teams 
              </p>
            </span>
          </span>
          <img src="/dexwin_assets/about-us.png" alt="people in a meeting" className="h-[500px] w-[465px] lg:max-w-md max-w-full" />
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