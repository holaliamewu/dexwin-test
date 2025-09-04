import Header from "./components/header";
import Footer from "./components/footer";
import "@fontsource/maven-pro"; 
import { brandsWorkedWithData, notableProjectsData, partnershipsData, whatWeDoData } from "./site-data";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
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
        className="text-[20px] md:text-[24px] md:w-5/10 mb-8 md:mb-[72px] text-center mx-auto " >We provide talent to leading firms looking to expand their product teams
        </p>
        <button 
        className="flex items-center justify-between text-[18px] text-cente mb-8 md:mb-30 r mx-auto bg-[#09a768] rounded-full " 
        >
          <h3 className="px-8 py-4 text-white" >Request a Quote</h3>
          <span className="bg-white w-16 h-16 rounded-full flex items-center justify-center " >
            <img src="/dexwin_assets/request-quote-arrow.svg" className="w-4" />
          </span>
        </button>        
        <p className="text-[16px] font-black text-center mb-12" >TRUSTED BY AMAZING BRANDS</p>
      </section>

      <section className="flex flex-col md:flex-row-reverse justify-center gap-16 bg-white text-black px-[5%] py-20 md:py-[100px]" >
        <span>
          <p 
          className="text-[30px] md:text-[36px] font-bold md:mb-8" 
          >Dexwin is an end-to-end digital product development agency 
          with a focus on delivering usable products that solve problems.
          </p>
          <span className="flex flex-col md:flex-row " >
            <span className="inline-block text-[14px] font-medium min-w-fit max-h-fit px-4 py-2 border border-black rounded-full   " >Who We Are?</span>
            <p className="text-gray-700 leading-relaxed text-lg md:ml-[40px]" >We specialize in product design, data analysis, software development, 
              digital advertising and general services. We provide talent to leading firms looking
              to expand their product teams 
              </p>
            </span>
          </span>
          <img src="/dexwin_assets/about-us.png" alt="people in a meeting" className="h-[500px] w-[465px] lg:max-w-md max-w-full" />
        </section>

        <section className="bg-white w-[90%] text-black md:py-[100px]" >
          <div className="flex items-end justify-between mb-[64px] " >
            <div className="flex items-end gap-4 w-full " >
              <img src="/dexwin_assets/title-icon.svg" alt="How We Do It" className="w-[28px]" />
              <h2 className="text-[36px] font-bold " >HOW WE DO IT</h2>
            </div>
            <p className="text-[16px] " >We build and staff digital capabilities across product, design, engineering and data.
            </p>
          </div>

          <div className="flex gap-4" >
            {whatWeDoData.map((item) => (
            <div key={item.id} className="flex flex-col px-[48px] py-[86px] bg-green-200" >
              <h3 className="text-[24px] font-bold mb-4" >End to End Delivery</h3>
              <p className="text-[16px] text-zinc-600 font-medium  " >Full-cycle project execution from concept to launch</p>
              <span className="flex w-[271px] h-[481px] mt-8 bg-[url(/dexwin_assets/about-us.png)] bg-cover" ></span>
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
                    className="w-full md:w-[225px]  h-[107px] md:h-[109px] bg-contain md:bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${brand.logoUrl})`}} ></span>
                ))
              }
            </div>
          </span>
        </section>

        <section className="bg-white w-[90%] text-black md:py-[100px]" >
          <div className="flex items-end mx-auto gap-4 w-fit mb-[64px] " >
              <img src="/dexwin_assets/title-icon.svg" alt="How We Do It" className="w-[28px]" />
              <h2 className="text-[36px] font-bold " >CORE SERVICES</h2>
            </div>

          <div className="flex w-full bg-white gap-8" >
            <span className="flex flex-col gap-8" >
              <div className="w-[198px] px-6 py-10 rounded-lg bg-green-200" >
                <img src="/dexwin_assets/product-design.svg" alt="Product Design Icon" className="mb-[30px]" />
                <h3 className="text-[24px] font-semibold mb-2" >Product Design</h3>
                <p className="text-[16px] text-zinc-500 " >Intuitive, user-centered interfaces and user experiences</p>
              </div>
              <div className="w-[198px] px-6 py-10 rounded-lg bg-green-200" >
                <img src="/dexwin_assets/product-design.svg" alt="Product Design Icon" className="mb-[30px]" />
                <h3 className="text-[24px] font-semibold mb-2" >Product Design</h3>
                <p className="text-[16px] text-zinc-500 " >Intuitive, user-centered interfaces and user experiences</p>
              </div>
              <div className="w-[198px] px-6 py-10 rounded-lg bg-green-200" >
                <img src="/dexwin_assets/product-design.svg" alt="Product Design Icon" className="mb-[30px]" />
                <h3 className="text-[24px] font-semibold mb-2" >Product Design</h3>
                <p className="text-[16px] text-zinc-500 " >Intuitive, user-centered interfaces and user experiences</p>
              </div>
            </span>

            <span className="flex-1" >
                <img src="/dexwin_assets/about-us.png" alt="Product Design Icon" className="h-[1000px] object-cover object-left rounded-lg mb-[30px]" />
            </span>

            <span className="flex flex-col gap-8" >
              <div className="w-[198px] px-6 py-10 rounded-lg bg-green-200" >
                <img src="/dexwin_assets/product-design.svg" alt="Product Design Icon" className="mb-[30px]" />
                <h3 className="text-[24px] font-semibold mb-2" >Product Design</h3>
                <p className="text-[16px] text-zinc-500 " >Intuitive, user-centered interfaces and user experiences</p>
              </div>
              <div className="w-[198px] px-6 py-10 rounded-lg bg-green-200" >
                <img src="/dexwin_assets/product-design.svg" alt="Product Design Icon" className="mb-[30px]" />
                <h3 className="text-[24px] font-semibold mb-2" >Product Design</h3>
                <p className="text-[16px] text-zinc-500 " >Intuitive, user-centered interfaces and user experiences</p>
              </div>
              <div className="w-[198px] px-6 py-10 rounded-lg bg-green-200" >
                <img src="/dexwin_assets/product-design.svg" alt="Product Design Icon" className="mb-[30px]" />
                <h3 className="text-[24px] font-semibold mb-2" >Product Design</h3>
                <p className="text-[16px] text-zinc-500 " >Intuitive, user-centered interfaces and user experiences</p>
              </div>
            </span>
          </div>
        </section>

        <section className="bg-white w-[90%] text-black md:py-[100px]" >
          <div className="flex items-end  gap-4 w-fit mb-[64px] " >
              <img src="/dexwin_assets/title-icon.svg" alt="How We Do It" className="w-[28px]" />
              <h2 className="text-[36px] font-bold " >NOTABLE PROJECTS</h2>
            </div>
          <div className="flex min-w-full overflow-x-hidden " >
            {
              notableProjectsData.map((project) => (
                <div key={project.projectName} className="flex w-full md:w-3/4 max-w-[800px] p-8 rounded-lg bg-[#f6f6f6] relative overflow-x-hidden" >
                  <span className="flex-1 " >
                    <img src="/dexwin_assets/mtn-logo.svg" alt="MTN Logo" className="mb-8 w-[100px] " />
                    <h3 className="text-[36px] font-semibold mb-4" >MyMTN App</h3>
                    <p className="text-[16px] text-zinc-500" >Transitioned MTN Ghana&apos;s USSD functionality into a robust mobile app, increasing user convenience and satisfaction.</p>
                    <div className="flex gap-8 mt-12" >
                      <span className="" >
                        <h4 className="text-[30px] font-semibold" >1M+</h4>
                        <h6 className="font-regular" >Active <br />Users</h6>
                      </span>
                      <span className="" >
                        <h4 className="text-[30px] font-semibold" >127%</h4>
                        <h6 className="font-regular" >User <br />Growth</h6>
                      </span>  
                    </div>
                  </span>
                  <img src="/dexwin_assets/mymtn-app.png" alt="my mtn app image" className="w-[400px] " />
                  <span className="flex items-center justify-center absolute top-10 right-10 bg-white rounded-full w-[66px] h-[66px] " ><ArrowUpRight className="text-black text-[24px] " /></span>
                  </div>
              ))}
            </div>
          </section>
        <section className="bg-white w-[90%] text-black md:py-[100px]" >
          <div className="flex items-end  gap-4 w-fit mb-[64px]  " >
              <img src="/dexwin_assets/title-icon.svg" alt="How We Do It" className="w-[28px]" />
              <h2 className="text-[36px] font-bold " >PARTNERSHIPS</h2>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" >
            {
              partnershipsData.map((partner) => (
                <div key={partner.partnerName} className="flex flex-col justify-between w-full max-w-[764px] bg-[#f6f6f6] px-12 py-8 rounded-lg" >
                  <span className="flex items-center justify-between " >
                    <h3 className="text-[30px] font-semibold" >MTN Ghana</h3>
                    <img src="/dexwin_assets/mtn-logo.svg" alt="Contact Us" className="" />
                  </span>
                  <p className="text-[16px] text-zinc-500 font-regular" >Ready to start your project? Contact us today to discuss your needs and 
                    discover how we can help bring your ideas to life.
                  </p>
                </div>
              ))}
          </div>
          </section>
      </main>
      <Footer />
    </div>
  )}
    