'use client';

import { useState } from 'react';
import Link from "next/link";
import Footer from "../../components/footer";
import { brandsWorkedWithData, notableProjectsData } from "@/utils/site-data";
import { ChevronUp, Menu, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Header from "@/components/header-dark";
import Sidebar from '@/components/sidebar';

export default function ProjectsPage() {

  const [ openMenu, setOpenMenu ] = useState(false);
  return (
  <div>
    <AnimatePresence >
        {openMenu && <Sidebar setOpenMenu={setOpenMenu} />}
      </AnimatePresence>    
      <Header setOpenMenu={setOpenMenu} />
    <section className="bg-white w-[90%] text-black mx-auto" >
        <h1 
        className="mt-12 md:mt-[96px] max-w-[1000px] mb-4 text-[60px] md:text-[80px] font-bold leading-15 md:leading-normal"
        >Selected projects impacted by <span className="text-[#02aa69] " >DEXWIN</span></h1>
        <p className="text-2xl max-w-[800px] " >
        We assist product teams in overcoming intricate product challenges</p>
        <div className="flex flex-wrap justify-center gap-6 mt-[104px] mb-24 " >
            {
            brandsWorkedWithData.map((brand) => (
                <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                key={brand.brandName} 
                className="w-full md:w-[225px]  h-[107px] md:h-[109px] bg-contain md:bg-cover bg-center bg-no-repeat rounded-lg"
                style={{ backgroundImage: `url(${brand.logoUrl})`}} ></motion.span>
            ))
            }
        </div>
    </section>
    <section className="flex flex-col min-w-full overflow-x-scroll hide-scrollbar scroll-smooth gap-8 " >
            {
              notableProjectsData.map((project) => (
                <div key={project.projectName} className="flex w-full md:min-w-9/10 max-w-[800px] mx-auto p-8 rounded-lg relative overflow-x-hidden" >
                  <span className="flex-1 " >
                    <img src={project.projectImageUrl} alt={`${project.projectName} logo`} className="mb-8 w-[100px] " />
                    <h3 className="text-[36px] font-semibold mb-4" >{project.projectName}</h3>
                    <p className="text-[16px] text-zinc-500" >{project.projectDescription}</p>
                    <div className="flex gap-8 mt-12" >
                      <span className="" >
                        <h4 className="text-[30px] font-semibold" >{project.metricOne}</h4>
                        <h6 className="font-regular " >{project.metricOneDescription}</h6>
                      </span>
                      <span className="w-[0.5px] bg-gray-400" />
                      <span className="" >
                        <h4 className="text-[30px] font-semibold" >{project.metricTwo}</h4>
                        <h6 className="font-regular  " >{project.metricTwoDescription}</h6>
                      </span>  
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-12 mt-[50px] " >
                      <h4 className="w-[130px] h-fit text-[14px] font-medium border border-gray-800 rounded-full px-4 py-2" >Problem</h4>
                      <p className="text-[18px] text-gray-700 leading-relaxed" >
                        {project.problem}
                      </p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-12 mt-[50px] " >
                      <h4 className="w-[130px] h-fit text-[14px] font-medium border border-gray-800 rounded-full px-4 py-2" >Solution</h4>
                      <p className="text-[18px] text-gray-700 leading-relaxed" >
                        {project.solution}
                      </p>
                    </div>
                  </span>
                  <img src={project.descriptionImageUrl} alt={`${project.projectName} description image`} className="hidden md:block w-[400px] h-[300px] object-cover " />
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
        <img src="/dexwin_assets/footer-x.svg" className="hidden md:block w-[400px] flex-1 bg-[#232323]  " />
      </section>
      <Footer />
  </div>
  )
}