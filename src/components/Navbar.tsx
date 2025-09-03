"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";



export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
      {/*  // THIS IS FOR HOME ON NAV BAR */}
        <Link href="/home"> 
        <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>

        </Link>

      {/* // THIS IS FOR OUR COURCES ON NAV BAR  */}
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">All Courses</HoveredLink>
            <HoveredLink href="/interface-design">Basic Music Theory</HoveredLink>
            <HoveredLink href="/seo">Advanced Composition</HoveredLink>
            <HoveredLink href="/branding">Song Writing</HoveredLink>
            <HoveredLink href="/branding">Music Production</HoveredLink>
            <HoveredLink href="/branding">Guitar</HoveredLink>
          </div>
        </MenuItem>
               

{/* // THIS IS FOR CONTACT US ON NAV BAR */}
        <Link href="/contact"> 
        <MenuItem setActive={setActive} active={active} item="Contact Us">
        </MenuItem>

        </Link>

      </Menu>
     
    </div>
  );
}
