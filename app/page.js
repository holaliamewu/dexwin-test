import Header from "./components/header";
import Footer from "./components/footer";
import "@fontsource/maven-pro"; 
import { brandsWorkedWithData, whatWeDoData } from "./site-data";

export default function Home() {
  return (
    <div className="font-[Maven_Pro]" >
      <main 
      className="flex flex-col items-center justify-center min-h-screen mx-auto"
      >
      <section className="md:min-h-[100vh] text-white bg-[url(/gh-background.png)] bg-cover" >
        <Header />
        <h1 
        className="text-[36px] md:text-[72px] font-[Maven_Pro] font-[700] text-center mt-12 md:mt-[50px] mb-6 md:mb-[25px] " 
        >Empowering Global Innovation Through <br/><span className="text-[#09a768] " >African Excellence</span>
        </h1>
        <p 
        className="text-[20px] md:text-[24px] md:w-5/10 mb-8 md:mb-[72px] text-center mx-auto " >We provide talent to leading firms looking to expand their product teams
        </p>
        <button className="flex items-center justify-between text-[18px] text-cente mb-8 md:mb-30 r mx-auto bg-[#09a768] rounded-full " ><span className="px-8 py-4" >Request a Quote</span><span className="bg-white w-16 h-16 rounded-full flex items-center justify-center " ><img src="/dexwin_assets/request-quote-arrow.svg" className="w-4" /></span></button>
        <p className="text-[16px] font-black text-center mb-12" >TRUSTED BY AMAZING BRANDS</p>
      </section>

      <section className="flex flex-col md:flex-row-reverse items-center justify-center gap-16 bg-white text-black px-[5%] py-20 md:py-[100px]" >
        <span>
          <p 
          className="text-[30px] md:text-[36px] font-bold md:mb-8" 
          >Dexwin is an end-to-end digital product development agency 
          with a focus on delivering usable products that solve problems.
          </p>
          <span className="flex-col md:flex-row-reverse bg-teal-400" >
            <span className="text-[16px] px-4 py-2 border border-black rounded-full  " >Who We Are?</span>
            <p className="text-[20px]" >We specialize in product design, data analysis, software development, 
              digital advertising and general services. We provide talent to leading firms looking 
              to expand their product teams 
              </p>
            </span>
          </span>
          <img src="/dexwin_assets/about-us.png" alt="people in a meeting" className="md:w " />
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
        <section className="flex flex-col w-full  text-white bg-[#001f37] px-[100px] py-[80px] " >
          <span className="px-6 py-4 md:px-20 md:py-20 lg:px-[100px]" >
            <h2 className="text-5xl font-bold text-center mx-auto" >We&apos;ve worked with <br />amazing brands</h2>  
            <div className="flex " >
              {
                brandsWorkedWithData.map((brand) => (
                  <span key={brand.brandName} className="flex items-center justify-center mx-4 my-8 w-full md:w-[200px] h-[107px] md:h-full bg-contain md:bg-center bg-no-repeat bg-center " style={{ backgroundImage: `url(${brand.logoUrl})`}} ></span>
                ))
              }
            </div>
          </span>
        </section>

        <section className="bg-white w-[90%] text-black md:py-[100px]" >
          <div className="" >
            <h2 className="" >HOW WE DO IT</h2>
            <p className="" >We build and staff digital capabilities across product, design, engineering and data.
            </p>
          </div>

          <div className="w-full bg-white" >
            <div className="" >
              <h3 className="" >End to End Delivery</h3>
              <p className="" >Full-cycle project execution from concept to launch</p>
              <img src="/dexwin_assets/.png" alt="End to End Delivery" className="" />
            </div>
          </div>
          </section>

        <section className="bg-white w-[90%] text-black md:py-[100px]" >
          <div className="" >
            <h2 className="" >HOW WE DO IT</h2>
            <p className="" >We build and staff digital capabilities across product, design, engineering and data.
            </p>
          </div>

          <div className="" >
            <img src="/dexwin_assets/contact-us.png" alt="Contact Us" className="" />
            <h3 className="" >MTN Pulse</h3>
            <p className="" >Ready to start your project? Contact us today to discuss your needs and 
              discover how we can help bring your ideas to life.
            </p>
            <div className="" >
              <span className="" >
                <h4 className="" >metric one</h4>
                <h6 className="" >sub metric one</h6>
              </span>
              <span className="" >
                <h4 className="" >metric two</h4>
                <h6 className="" >sub metric two</h6>
              </span>
            </div>
            </div>
          </section>
        <section className="bg-white w-[90%] text-black md:py-[100px]" >
          <div className="" >
            <h2 className="" >HOW WE DO IT</h2>
            <p className="" >We build and staff digital capabilities across product, design, engineering and data.
            </p>
          </div>

          <div className="" >
            <img src="/dexwin_assets/contact-us.png" alt="Contact Us" className="" />
            <h3 className="" >MTN Pulse</h3>
            <p className="" >Ready to start your project? Contact us today to discuss your needs and 
              discover how we can help bring your ideas to life.
            </p>
            <div className="" >
              <span className="" >
                <h4 className="" >metric one</h4>
                <h6 className="" >sub metric one</h6>
              </span>
              <span className="" >
                <h4 className="" >metric two</h4>
                <h6 className="" >sub metric two</h6>
              </span>
            </div>
            </div>
          </section>
      </main>
      <Footer />
    </div>
  )}
    