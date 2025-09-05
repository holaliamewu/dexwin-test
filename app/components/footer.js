import Link from "next/link";


export default function Footer() {
  return (
    <footer className="flex flex-col ">
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
      <main className="flex flex-col bg-black text-white -py-1">
        <section className="flex flex-col md:flex-row justify-between gap-4 px-8 md:px-25 py-20 " >
          <span className="max-w-[300px] mb-4" >
            <Link href="/" className="" >
              <img src="/dexwin_assets/dexwin-logo.svg" />
            </Link>
            <p className="text-[16px] my-8" >We are on a mission to become Europe&apos;s 
              go-to partner for hgih quality IT and talent outsourcing 
              from Africa.
            </p>
            <h4 className="text-[16px] font-bold" >Let&apos;s build your innovation together</h4>
          </span>
          <nav className="flex flex-col md:flex-row gap-8 md:gap-64" >
              <span className="flex flex-col gap-4" >
                  <Link href="/" className="" >About</Link>
                  <Link href="/" className="" >Services</Link>
                  <Link href="/" className="" >Contact Us</Link>
                  <Link href="/" className="" >Projects</Link>
              </span>
              <span className="flex flex-col gap-4" >
                  <Link href="/" className="flex" >Terms & Conditions</Link>
                  <Link href="/" className="" >Privacy Policy</Link>
                  <Link href="/" className="" >Legal</Link>
              </span>
          </nav>
        </section>

        <span className="my-8 py-8 pl-8 md:text-center  border-t-1 border-t-gray-500" >Copyright &copy; 2025 Dexwin</span>
      </main>
    </footer>
  );
}