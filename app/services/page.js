'use client';

import { useState } from 'react';
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import Header from '@/components/header-dark';
import Footer from "../../components/footer";
import { brandsWorkedWithData } from "@/utils/site-data";
import { ChevronUp, Menu } from "lucide-react";
import Sidebar from '@/components/sidebar';


export default function ServicesPage() {

  const [ openMenu, setOpenMenu ] = useState(false);
  return (
  <div>
    <AnimatePresence >
      {openMenu && <Sidebar setOpenMenu={setOpenMenu}/>}
    </AnimatePresence>
    <Header setOpenMenu={setOpenMenu} />
    <section className="bg-white w-[90%] text-black mx-auto" >
        <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 md:mt-[96px] max-w-[1000px] mb-4 text-5xl md:text-[80px] font-bold"><span className="text-[#02aa69] " >DEXWIN</span> provides elite digital services</motion.h1>
        <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-2xl max-w-[800px] " >
        Tailored solutions for every stage of product development    
        </motion.p>
        <motion.img 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        src="/dexwin_assets/about-page-image.png" alt="About Us" className="w-full h-[600px] mt-8 rounded-3xl shadow-lg object-cover object-center md:object-fit" />
    </section>
    <section className="flex flex-col md:flex-row items-start justify-between bg-white w-[90%] mx-auto text-black py-6 md:py-[100px]" >
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-end gap-4 w-fit mt-32 md:mt-[200px] mb-[64px] " >
              <img src="/dexwin_assets/title-icon.svg" alt="How We Do It" className="w-[28px]" />
              <h2 className="text-3xl md:text-[36px] font-bold " >SERVICES</h2>
            </motion.div>

            <span className="grid grid-cols-1 md:grid-cols-2 gap-8" >
              <motion.div
              initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
              className="md:max-w-100 px-6 py-10 rounded-lg bg-[#f2edfd]" >
                <img src="/dexwin_assets/product-design.svg" alt="Product Design Icon" className="mb-[30px]" />
                <h3 className="text-[24px] font-semibold mb-2" >Product Design</h3>
                <p className="text-[16px] text-zinc-500 " >Intuitive, user-centered interfaces and user experiences</p>
              </motion.div>
              <motion.div
              initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
              className="md:max-w-100 px-6 py-10 rounded-lg bg-[#f2edfd]" >
                <img src="/dexwin_assets/software-development.svg" alt="Product Design Icon" className="mb-[30px]" />
                <h3 className="text-[24px] font-semibold mb-2" >Software Development</h3>
                <p className="text-[16px] text-zinc-500 " >Scalable web and mobile app solutions using modern frameworks</p>
              </motion.div>
              <motion.div
              initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
              className="md:max-w-100 px-6 py-10 rounded-lg bg-[#f2edfd]" >
                <img src="/dexwin_assets/data-analytics.svg" alt="Product Design Icon" className="mb-[30px]" />
                <h3 className="text-[24px] font-semibold mb-2" >Data Analytics</h3>
                <p className="text-[16px] text-zinc-500 " >Actionable insights from raw data to guide decisions</p>
              </motion.div>
              <motion.div
              initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
              className="md:max-w-100 px-6 py-10 rounded-lg bg-[#f2edfd]" >
                <img src="/dexwin_assets/skills-training2.svg" alt="Skills training Icon" className="mb-[30px]" />
                <h3 className="text-[24px] font-semibold mb-2" >Skills Training</h3>
                <p className="text-[16px] text-zinc-500 " >Tailored programs to upskill internal teams</p>
              </motion.div>
              <motion.div
              initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
              className="md:max-w-100 px-6 py-10 rounded-lg bg-[#f2edfd]" >
                <img src="/dexwin_assets/talent-outsourcing.svg" alt="Talent Sourcing Icon" className="mb-[30px]" />
                <h3 className="text-[24px] font-semibold mb-2" >Talent Sourcing</h3>
                <p className="text-[16px] text-zinc-500 " >Contract-based or embedded team members across roles and stacks</p>
              </motion.div>
              <motion.div
              initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
              className="md:max-w-100 px-6 py-10 rounded-lg bg-[#f2edfd]" >
                <img src="/dexwin_assets/it-consulting.svg" alt="IT Consulting Icon" className="mb-[30px]" />
                <h3 className="text-[24px] font-semibold mb-2" >IT Consulting</h3>
                <p className="text-[16px] text-zinc-500 " >We offer a wide range of general services to support your business operations. From consulting to implementation, our experts are here to ensure your success.</p>
              </motion.div>
            </span>
        </section>

        <section className="flex flex-col w-full  text-white bg-[#001f37] py-4 md:py-[80px] " >
          <span className="px-6 py-4 " >
            <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mx-auto mb-20" >We&apos;ve worked with <br />amazing brands</motion.h2>  
            <div className="flex flex-wrap justify-center gap-6 " >
              {
                brandsWorkedWithData.map((brand) => (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: brand.id * 0.1 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }} 
                    key={brand.brandName} 
                    className="w-full md:w-[225px]  h-[107px] md:h-[109px] bg-contain md:bg-cover bg-center bg-no-repeat rounded-lg"
                    style={{ backgroundImage: `url(${brand.logoUrl})`}} ></motion.span>
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
        className="group flex items-center justify-between text-[18px] text-cente mb-8 md:mb-30  mr-auto bg-[#09a768] rounded-full " 
        >
          <h3 className="px-8 py-4 text-white" >Request a Quote</h3>
          <span className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform" >
            <img src="/dexwin_assets/request-quote-arrow.svg" className="w-4" />
          </span>
        </button>
        </div>
          <motion.img 
            initial={{ rotate: 0 }}
            whileInView={{ rotate: 180 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}        
            src="/dexwin_assets/footer-x.svg" className="hidden md:block w-[400px] flex-1 bg-[#232323]  " />
      </section>
      <Footer />
  </div>
  )
}

