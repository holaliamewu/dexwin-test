'use client';

import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import "@fontsource/maven-pro"; 
import { brandsWorkedWithData, notableProjectsData, partnershipsData, whatWeDoData } from "./site-data";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

export default function Home() {

  const [progressWidth, setProgressWidth] = useState(1);

  function handleNext() {
  setProgressWidth(prev => (prev < 10 ? prev + 1 : prev));
}

function handlePrev() {
  setProgressWidth(prev => (prev > 2 ? prev - 1 : prev));
}


  return (
    <div className="font-[Maven_Pro]" >
      <main 
      className="flex flex-col items-center justify-center min-h-screen mx-auto"
      >
      <section className="w-full md:min-h-[100vh] text-white bg-[url(/gh-background.png)] bg-cover" >
        <Header />
        <h1 
        className="text-[36px] md:text-[72px] font-[Maven_Pro] font-[700] text-center mt-12 md:mt-[50px] mb-6 md:mb-[25px] " 
        >Empowering <br />Global Innovation Through <br/><span className="text-[#09a768] " >African Excellence</span>
        </h1>
        <p 
        className="text-[20px] w-9/10 md:text-[24px] md:w-5/10 mb-8 md:mb-[72px] text-center mx-auto " >We provide talent to leading firms looking to expand their product teams
        </p>
        <button 
        className="flex items-center justify-between text-[18px] text-cente mb-8 md:mb-30 r mx-auto bg-[#09a768] rounded-full " 
        >
          <h3 className="px-8 py-4 text-white" >Request a Quote</h3>
          <span className="bg-white w-16 h-16 rounded-full flex items-center justify-center " >
            <img src="/dexwin_assets/request-quote-arrow.svg" className="w-4" />
          </span>
        </button> 
        <div className="flex items-center justify-center max-w-9/10 mx-auto gap-4 mb-12" >
          <span className="h-[1px] w-[64px] bg-white" ></span>
          <p className="text-[16px] font-black text-center" >TRUSTED BY AMAZING BRANDS</p>
          <span className="h-[1px] w-[64px] bg-white" ></span>
          </div>       
      </section>

      <section className="flex flex-col md:flex-row-reverse justify-center gap-16 bg-white text-black px-[5%] py-20 py-6 md:py-[100px]" >
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

        <section className="bg-white w-[90%] text-black py-6 md:py-[100px]" >
          <div className="flex flex-col md:flex-row items-end justify-between mb-[64px] " >
            <div className="flex items-end gap-4 mb-8 w-full " >
              <img src="/dexwin_assets/title-icon.svg" alt="How We Do It" className="w-[28px]" />
              <h2 className="text-3xl md:text-[36px] font-bold " >HOW WE DO IT</h2>
            </div>
            <p className="text-[16px] ml-4 " >We build and staff digital capabilities across product, design, engineering and data.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4" >
            {whatWeDoData.map((item) => (
            <div key={item.id} className="flex flex-col px-[48px] py-[86px] rounded-lg" style={{backgroundColor: `${item.color}`}} >
              <h3 className="text-[24px] font-bold mb-4" >End to End Delivery</h3>
              <p className="text-[16px] text-zinc-600 font-medium  " >Full-cycle project execution from concept to launch</p>
              <span className="flex w-[271px] h-[481px] mt-8 bg-[url(/dexwin_assets/about-us.png)] bg-cover" style={{ backgroundImage: `${item.imageUrl}`}} ></span>
            </div>
            ))}
          </div>
        </section>
        <section className="flex flex-col w-full  text-white bg-[#001f37] py-[80px] " >
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

        <section className="bg-white w-[90%] text-black py-6 md:py-[100px]" >
          <div className="flex items-end md:mx-auto gap-4 w-fit mb-[64px] " >
              <img src="/dexwin_assets/title-icon.svg" alt="How We Do It" className="w-[28px]" />
              <h2 className="text-3xl md:text-[36px] font-bold " >CORE SERVICES</h2>
            </div>

          <div className="flex flex-col md:flex-row w-full bg-white gap-8" >
            <span className="flex flex-col gap-8" >
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
            </span>

            <span className="hidden md:flex-1" >
                <img src="/dexwin_assets/about-us.png" alt="Product Design Icon" className="flex-1 min-w-[500px] w-full h-[1000px] object-cover object-left rounded-lg mb-[30px]" />
            </span>

            <span className="flex flex-col gap-8" >
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
          </div>
        </section>

        <section className="bg-white w-[90%] text-black py-6 md:px-6 md:py-[100px]" >
          <div className="flex items-end  gap-4 w-fit mb-[64px] " >
              <img src="/dexwin_assets/title-icon.svg" alt="How We Do It" className="w-[28px]" />
              <h2 className="text-3xl md:text-[36px] font-bold " >NOTABLE PROJECTS</h2>
            </div>
          <div className="flex flex-col md:flex-row min-w-full overflow-x-scroll hide-scrollbar scroll-smooth gap-8 " >
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
            </div>
            <div className="hidden md:flex w-full items-center gap-4 mt-8" >
              <span className="flex items-center justify-center gap-2 " > 
                <button onClick={handlePrev} className="flex items-center justify-center border border-gray-300 rounded-full w-[78px] h-[78px] hover:bg-gray-100 transition " ><ArrowLeft size="24" /></button>  
                <button onClick={handleNext} className="flex items-center justify-center border border-gray-300 rounded-full w-[78px] h-[78px] hover:bg-gray-100 transition " ><ArrowRight size="24" /></button>  
              </span>
              <div className="flex flex-1 w-[100vw] bg-gray-100 h-1 rounded-full" ><div className="bg-[#002f54] h-1 rounded-full"  style={{width: progressWidth * 10}}></div></div>
            </div>
          </section>
        <section className="bg-white w-[90%] text-black py-6 md:py-[100px]" >
          <div className="flex items-end  gap-4 w-fit mb-[64px]  " >
              <img src="/dexwin_assets/title-icon.svg" alt="How We Do It" className="w-[28px]" />
              <h2 className="text-[36px] font-bold " >PARTNERSHIPS</h2>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" >
            {
              partnershipsData.map((partner) => (
                <div key={partner.partnerName} className="flex flex-col justify-between w-full max-w-[764px] bg-[#f6f6f6] gap-4 px-12 py-8 rounded-lg" >
                  <span className="flex items-start justify-between gap-4" >
                    <h3 className="text-[30px] font-semibold" >{partner.partnerName}</h3>
                    <img src={partner.partnerLogoUrl} alt={`${partner.partnerName} logo`} className="w-[100px]" />
                  </span>
                  <p className="text-[16px] text-zinc-500 font-regular" >{partner.description}</p>
                </div>
              ))}
          </div>
          </section>
      </main>
      <Footer />
    </div>
  )}
    