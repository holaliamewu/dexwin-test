'use client';

import { useState, useContext, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import LocationPicker from "./location-picker";
import LocationContext from "@/contexts/location-context";

export default function Header({ setOpenMenu }) {
  const { location, setLocation } = useContext(LocationContext);
  const [openLocationMenu, setOpenLocationMenu] = useState(false);

  const locationMenuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        locationMenuRef.current && 
        !locationMenuRef.current.contains(event.target)
      ) {
        setOpenLocationMenu(false);
      }
    }

    if (openLocationMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openLocationMenu]);

  return (
    <header className="flex items-center justify-between w-full px-4 md:px-[5%] pt-10 mx-auto pb-8">
      <Link href="/" className="flex gap-4 relative" >
        <img src="/dexwin_assets/dexwin-logo.svg" className="w-25" />
        <span className="relative flex items-center gap-4" ref={locationMenuRef}>
          <span className="w-0.5 h-full bg-white"></span>
          <img src={`/dexwin_assets/${location === "Europe" ? "eu.svg" : "ghana.svg"}`} className="w-8" />
          <ChevronDown
            onClick={() => setOpenLocationMenu((prev) => !prev)}
            size="18"
            style={{ rotate: openLocationMenu ? "180deg" : "0deg" }}
          />
          {openLocationMenu && (
            <LocationPicker
              openLocationMenu={openLocationMenu}
              location={location}
              setLocation={setLocation}
            />
          )}
        </span>
      </Link>
      <Menu onClick={() => setOpenMenu(true)} size="32" alt="Menu Icon" className="text-white" />
    </header>
  );
}
