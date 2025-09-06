import Link from "next/link";
import Footer from "../components/footer";
import { brandsWorkedWithData, notableProjectsData } from "../site-data";
import { ChevronUp, Menu, ArrowUpRight } from "lucide-react";


export default function ProjectsPage() {
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
        <h1 className="mt-[96px] max-w-[1000px] mb-4 text-7xl md:text-[80px] font-bold">Selected projects impacted wit <span className="text-[#02aa69] " >DEXWIN</span></h1>
        <p className="text-2xl max-w-[800px] " >
        We assist product teams in overcoming intricate product challenges        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-[104px] mb-24 " >
            {
            brandsWorkedWithData.map((brand) => (
                <span 
                key={brand.brandName} 
                className="w-full md:w-[225px]  h-[107px] md:h-[109px] bg-contain md:bg-cover bg-center bg-no-repeat rounded-lg"
                style={{ backgroundImage: `url(${brand.logoUrl})`}} ></span>
            ))
            }
        </div>
    </section>
    <section className="flex flex-col md:flex-row min-w-full overflow-x-scroll hide-scrollbar scroll-smooth gap-8 " >
            {
              notableProjectsData.map((project) => (
                <div key={project.projectName} className="flex w-full md:min-w-3/4 max-w-[800px] p-8 rounded-lg bg-[#f6f6f6] relative overflow-x-hidden" >
                  <span className="flex-1 " >
                    <img src={project.projectImageUrl} alt={`${project.projectName} logo`} className="mb-8 w-[100px] " />
                    <h3 className="text-[36px] font-semibold mb-4" >{project.projectName}</h3>
                    <p className="text-[16px] text-zinc-500" >{project.projectDescription}</p>
                    <div className="flex gap-8 mt-12" >
                      <span className="" >
                        <h4 className="text-[30px] font-semibold" >{project.metricOne}</h4>
                        <h6 className="font-regular line-clamp-2 w-[90px]" >{project.metricOneDescription}</h6>
                      </span>
                      <span className="" >
                        <h4 className="text-[30px] font-semibold" >{project.metricTwo}</h4>
                        <h6 className="font-regular line-clamp-2 w-[90px]" >{project.metricTwoDescription}</h6>
                      </span>  
                    </div>
                  </span>
                  <img src={project.descriptionImageUrl} alt={`${project.projectName} description image`} className="hidden md:block w-[400px] h-[300px] object-cover " />
                  <span className="hidden md:flex items-center justify-center absolute top-10 right-10 bg-white rounded-full w-[66px] h-[66px] " ><ArrowUpRight className="text-black text-[24px] " /></span>
                  </div>
              ))}
        </section>
        <section className="flex flex-col md:flex-row items-start min-h-[500px] p-16 md:py-20 bg-[#232323] " >
        <div className="flex flex-col " >
          <h2 className="text-4xl md:text-[80px] mb-[56px] leading-normal font-bold text-white text-center md:text-left" >
            High quality & cost effective delivery with impact
            </h2>
        <button 
        className="flex items-center justify-between text-[18px] text-cente mb-8 md:mb-30 mr-auto bg-[#09a768] rounded-full " 
        >
          <h3 className="px-8 py-4 text-white" >Request a Quote</h3>
          <span className="bg-white w-16 h-16 rounded-full flex items-center justify-center " >
            <img src="/dexwin_assets/request-quote-arrow.svg" className="w-4" />
          </span>
        </button>
        </div>
        <img src="/dexwin_assets/footer-x.svg" className="w-[400px] flex-1 bg-[#232323]  " />
      </section>
      <Footer />
  </div>
  )
}