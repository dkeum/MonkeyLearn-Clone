"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { GiAbstract030 } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";




interface NavBarProps {
  className?: string;
}

type link = {
  name: string;
  link: string;
};

const NavBar: React.FC<NavBarProps> = (NavBarProps) => {
  const links: link[] = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Service", link: "/" },
    { name: "Learn More", link: "/" },
  ];

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={cn(
        NavBarProps.className,
        "shadow-md top-0 left-0"
      )}
    >
      <div className="md:px-10 py-4 px-7 md:flex justify-between">
        <div className="flex flex-row text-2l cursor-pointer items-center gap-2">
          <GiAbstract030 className="text-orange-600 w-7 h-7" />
          <span className="font-bold">MonkeyLearn Clone</span>
        </div>

        <div onClick={()=> {setIsOpen(!isOpen)}} className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden">
            {isOpen ? <ImCross /> : <GiHamburgerMenu/>}
        </div>

        <ul className={`md:flex pl-9 md:pl-0 md:items-center md:pb-0 pb-12 md:z-auto z-[-1] 
             transition-all duration-500 ease-in absolute md:static ${isOpen ? 'top-12' : 'top-[-490px] '} `}>
          {links.map((link, i) => (
            <li className="font-semibold my-7 md:my-0 md:ml-8" key={i}>
              <Link href={link.link}>
                <p>{link.name}</p>
              </Link>
            </li>
          ))}
          <button className="bg-orange-200 border rounded-full text-black  px-3 md:ml-8 md:static">Get Started</button>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
