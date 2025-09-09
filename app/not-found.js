import Link from "next/link";

export default function NotFoundApp() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      <h1 className="text-6xl md:text-8xl text-[#02aa69] font-bold mb-4">404</h1>
      <p className="text-2xl md:text-3xl font-semibold mb-8">Page Not Found</p>
      <p className="text-[18px] text-gray-400 mb-8 max-w-lg px-4 text-center" >The page you're looking for doesn't exist or has been moved.</p>
      <span className="w-full flex flex-col max-w-lg gap-4" >
        <Link href="/" className="w-full px-8 py-4 text-center font-medium rounded-full bg-[#02aa69] " >Go Home</Link>
        <Link href="/contact-us" className="w-full px-8 py-4 text-center font-medium rounded-full border border-gray-400 hover:border-[#02aa69] " >Contact Us</Link>
      </span>
      <img src="/dexwin_assets/dexwin-logo.svg" alt="dexwin logo" className=" mt-8 opacity-50" />
    </div>
  );
}