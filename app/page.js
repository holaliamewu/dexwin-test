'use client';

import { useState } from "react";
import { brandsWorkedWithData, notableProjectsData, partnershipsData, whatWeDoData } from "@/utils/site-data";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { AnimatePresence, motion } from "motion/react";

export default function Home() {

  const [progressWidth, setProgressWidth] = useState(1);
  const [openMenu, setOpenMenu] = useState(false);
  

  function handleNext() {
  setProgressWidth(prev => (prev < 10 ? prev + 1 : prev));
}

function handlePrev() {
  setProgressWidth(prev => (prev > 2 ? prev - 1 : prev));
}


  return (
    <div className="font-[Maven_Pro]" >
      <AnimatePresence >
        {openMenu && <Sidebar setOpenMenu={setOpenMenu} />}
      </AnimatePresence>
      <main 
      className="flex flex-col items-center justify-center min-h-screen mx-auto"
      >
      <section className="w-full md:min-h-[100vh] text-white bg-[url(/gh-background.png)] bg-cover" >
        <Header setOpenMenu={setOpenMenu} />
        <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="text-[36px] md:text-[72px] leading-tight font-[Maven_Pro] font-semibold text-center mt-12 md:mt-[50px] mb-6 md:mb-[25px] " 
        >Empowering <br />Global Innovation Through <br/><span className="text-[#09a768] " >African Excellence</span>
        </motion.h1>
        <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-[20px] w-9/10 md:text-[24px] md:w-5/10 mb-8 md:mb-[72px] text-center mx-auto " >We provide talent to leading firms looking to expand their product teams
        </motion.p>
        <motion.button 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }} 
        viewport={{ once: true }}
        className="flex items-center justify-between text-[18px] text-cente mb-8 md:mb-30 r mx-auto bg-[#09a768] rounded-full " 
        >
          <h3 className="px-8 py-4 text-white" >Request a Quote</h3>
          <span className="bg-white w-16 h-16 rounded-full flex items-center justify-center " >
            <img src="/dexwin_assets/request-quote-arrow.svg" className="w-4" />
          </span>
        </motion.button> 
        <div className="flex items-center justify-center max-w-9/10 mx-auto gap-4 mb-12" >
          <span className="h-[1px] w-[64px] bg-white" ></span>
          <p className="text-[16px] font-black text-center" >TRUSTED BY AMAZING BRANDS</p>
          <span className="h-[1px] w-[64px] bg-white" ></span>
          </div>       
      </section>

      <section className="flex flex-col md:flex-row-reverse justify-center gap-16 bg-white text-black px-[5%] py-20 py-6 md:py-[100px]" >
        <span className="flex-1" >
          <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[30px] md:text-[36px] font-bold mb-8" 
          >Dexwin is an end-to-end digital product development agency 
          with a focus on delivering usable products that solve problems.
          </motion.h2>
          <span className="flex flex-col md:flex-row " >
            <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
            className="inline-block text-[14px] font-medium w-fit md:min-w-fit max-h-fit px-4 py-2 mb-4 border border-black rounded-full   " >Who We Are?</motion.span>
            <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-700 leading-relaxed text-lg md:ml-[40px]" >We specialize in product design, data analysis, software development, 
              digital advertising and general services. We provide talent to leading firms looking
              to expand their product teams 
              </motion.p>
            </span>
          </span>
          <motion.img
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4}}
          viewport={{ once: true }}
          src="/dexwin_assets/about-us.png" alt="people in a meeting" className="h-[500px] w-[465px] max-w-full object-cover object-center rounded-lg" />
        </section>

        <section className="bg-white w-[90%] text-black py-6 md:py-[100px]" >
          <div className="flex flex-col md:flex-row items-end justify-between mb-[64px] " >
            <div className="flex items-end gap-4 mb-8 md:mb-0 w-full " >
              <motion.img 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              src="/dexwin_assets/title-icon.svg" alt="How We Do It" className="w-[28px]" />
              <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-[36px] font-bold " >HOW WE DO IT</motion.h2>
            </div>
            <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }} 
            viewport={{ once: true }}
            className="text-[16px] ml-4 " >We build and staff digital capabilities across product, design, engineering and data.
            </motion.p>
          </div>

          <div className="flex flex-col md:flex-row gap-4" >
            {whatWeDoData.map((item) => (
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: item.id * 0.2 }}
            viewport={{ once: true }}
            key={item.id} className="flex flex-col px-[48px] py-[86px] rounded-lg" style={{backgroundColor: `${item.color}`}} >
              <h3 className="text-[24px] font-bold mb-4" >End to End Delivery</h3>
              <p className="text-[16px] text-zinc-600 font-medium  " >Full-cycle project execution from concept to launch</p>
              <span className="flex w-[271px] h-[481px] mt-8 bg-[url(/dexwin_assets/about-us.png)] bg-cover" style={{ backgroundImage: `${item.imageUrl}`}} ></span>
            </motion.div>
            ))}
          </div>
        </section>
        <section className="flex flex-col w-full  text-white bg-[#001f37] py-[80px] " >
          <span className="px-6 py-4 " >
            <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mx-auto mb-20" >We&apos;ve worked with <br />amazing brands</motion.h2>  
            <div className="flex flex-wrap justify-center gap-6 " >
              {
                brandsWorkedWithData.map((brand) => (
                  <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: brand.id * 0.15 }}
                    viewport={{ once: true }}
                    key={brand.brandName} 
                    className="w-full md:w-[225px]  h-[107px] md:h-[109px] bg-contain md:bg-cover bg-center bg-no-repeat rounded-lg"
                    style={{ backgroundImage: `url(${brand.logoUrl})`}} ></motion.span>
                ))
              }
            </div>
          </span>
        </section>

        <section className="bg-white w-[90%] text-black py-6 md:py-[100px]" >
          <div className="flex items-end md:mx-auto gap-4 w-fit mb-[64px] " >
              <motion.img 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }} 
              viewport={{ once: true }}
              src="/dexwin_assets/title-icon.svg" alt="How We Do It" className="w-[28px]" />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }} 
            viewport={{ once: true }}
              className="text-3xl md:text-[36px] font-bold " >CORE SERVICES</motion.h2>
            </div>

          <div className="flex flex-col md:flex-row w-full bg-white gap-8" >
            <span className="flex flex-col gap-8" >
              <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="md:max-w-100 px-6 py-10 rounded-lg bg-[#f2edfd]" >
                <img src="/dexwin_assets/product-design.svg" alt="Product Design Icon" className="mb-[30px]" />
                <h3 className="text-[24px] font-semibold mb-2" >Product Design</h3>
                <p className="text-[16px] text-zinc-500 " >Intuitive, user-centered interfaces and user experiences</p>
              </motion.div>
              <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="md:max-w-100 px-6 py-10 rounded-lg bg-[#f2edfd]" >
                <img src="/dexwin_assets/software-development.svg" alt="Product Design Icon" className="mb-[30px]" />
                <h3 className="text-[24px] font-semibold mb-2" >Software Development</h3>
                <p className="text-[16px] text-zinc-500 " >Scalable web and mobile app solutions using modern frameworks</p>
              </motion.div>
              <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:max-w-100 px-6 py-10 rounded-lg bg-[#f2edfd]" >
                <img src="/dexwin_assets/data-analytics.svg" alt="Product Design Icon" className="mb-[30px]" />
                <h3 className="text-[24px] font-semibold mb-2" >Data Analytics</h3>
                <p className="text-[16px] text-zinc-500 " >Actionable insights from raw data to guide decisions</p>
              </motion.div>
            </span>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="hidden md:flex md:flex-1" 
              >
                <img src="/dexwin_assets/about-us.png" alt="Product Design Icon" className="flex-1 min-w-[500px] w-full h-[1000px] object-cover object-left rounded-lg mb-[30px]" />
            </motion.span>

            <span className="flex flex-col gap-8" >
              <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="md:max-w-100 px-6 py-10 rounded-lg bg-[#f2edfd]" >
                <img src="/dexwin_assets/skills-training2.svg" alt="Skills training Icon" className="mb-[30px]" />
                <h3 className="text-[24px] font-semibold mb-2" >Skills Training</h3>
                <p className="text-[16px] text-zinc-500 " >Tailored programs to upskill internal teams</p>
              </motion.div>
              <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className="md:max-w-100 px-6 py-10 rounded-lg bg-[#f2edfd]" >
                <img src="/dexwin_assets/talent-outsourcing.svg" alt="Talent Sourcing Icon" className="mb-[30px]" />
                <h3 className="text-[24px] font-semibold mb-2" >Talent Sourcing</h3>
                <p className="text-[16px] text-zinc-500 " >Contract-based or embedded team members across roles and stacks</p>
              </motion.div>
              <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }} 
              className="md:max-w-100 px-6 py-10 rounded-lg bg-[#f2edfd]" >
                <img src="/dexwin_assets/it-consulting.svg" alt="IT Consulting Icon" className="mb-[30px]" />
                <h3 className="text-[24px] font-semibold mb-2" >IT Consulting</h3>
                <p className="text-[16px] text-zinc-500 " >We offer a wide range of general services to support your business operations. From consulting to implementation, our experts are here to ensure your success.</p>
              </motion.div>
            </span>
          </div>
        </section>

        <section className="bg-white w-[90%] text-black py-6 md:px-6 md:py-[100px]" >
          <div className="flex items-end  gap-4 w-fit mb-[64px] " >
            <motion.img 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}     
              viewport={{ once: true }}          
              src="/dexwin_assets/title-icon.svg" alt="How We Do It" className="w-[28px]" />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}    
            viewport={{ once: true }}           
            className="text-3xl md:text-[36px] font-bold " >NOTABLE PROJECTS</motion.h2>
            </div>
          <div className="flex flex-col md:flex-row min-w-full overflow-x-scroll hide-scrollbar scroll-smooth gap-8 " >
            {
              notableProjectsData.map((project) => (
                <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: project.id * 0.2 }}
                viewport={{ once: true }}
                key={project.projectName} className="flex w-full md:min-w-3/4 max-w-[800px] p-8 rounded-lg bg-[#f6f6f6] relative overflow-x-hidden" >
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
                </motion.div>
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
            <motion.img 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}       
              viewport={{ once: true }}       
              src="/dexwin_assets/title-icon.svg" alt="How We Do It" className="w-[28px]" />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }} 
            viewport={{ once: true }}
              className="text-3xl md:text-[36px] font-bold " >PARTNERSHIPS</motion.h2>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" >
            {
              partnershipsData.map((partner) => (
                <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: partner.id * 0.2 }}
                viewport={{ once: true }}
                key={partner.partnerName} className="flex flex-col justify-between w-full max-w-[764px] bg-[#f6f6f6] gap-4 px-12 py-8 rounded-lg" >
                  <span className="flex items-start justify-between gap-4" >
                    <h3 className="text-[30px] font-semibold" >{partner.partnerName}</h3>
                    <img src={partner.partnerLogoUrl} alt={`${partner.partnerName} logo`} className="w-[100px]" />
                  </span>
                  <p className="text-[16px] text-zinc-500 font-regular" >{partner.description}</p>
                </motion.div>
              ))}
          </div>
          </section>
          <section className="flex flex-col md:flex-row  min-h-[500px] " >
        <div className="flex flex-col md:w-1/2 p-16 md:py-20 bg-[url('/dexwin_assets/unlock-digital-potential.png')] bg-cover bg-center" >
          <h2 className="text-4xl md:text-[56px] mb-[56px] leading-normal font-bold text-white text-center md:text-left" >
            Unlock your digital potential with our tailored solutions
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
        <img src="/dexwin_assets/footer-img.png" className="hidden md:block w-1/2 object-cover object-center" />
      </section>
      </main>
      <Footer />
    </div>
  )}
    