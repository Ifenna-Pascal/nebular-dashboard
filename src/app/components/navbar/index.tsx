'use client';
import { assets } from '@/assets';
import { navLinks } from '@/utillities/navlinks';
import Image from 'next/image';
import React, { useState } from 'react';
import NavLink from './navLink';
import { usePathname } from 'next/navigation';
import Button from '@/app/ui/button';
import Link from 'next/link';

const NavBar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <div className="bg-dark-200 sticky">
      <div className="border-b border-light-50 flex px-6 lg:px-12 items-center justify-between top-0 h-[65px] lg:h-[75px]">
        <div className="flex items-center justify-between">
          <Image
            src={assets.logo}
            alt="logo-image"
            width={180}
            className="w-[120px] lg:w-[180px] mr-20"
          />
          <ul className="lg:flex hidden items-center justify-center gap-x-16">
            {navLinks.map((link) => {
              return (
                <NavLink
                  key={link.id}
                  name={link.name}
                  href={link.link}
                  isActive={pathname === link.link}
                />
              );
            })}
          </ul>
        </div>

        <div className="flex items-center justify-between space-x-2">
          <Button styles="bg-primary-gradient flex items-center justify-center space-x-3 w-[76px] lg:w-[90px] h-[30px] lg:h-[43px] rounded-[80px]">
            <Image
              src={assets.ethNav}
              alt="eth-icon"
              width={23}
              className="w-[14px] lg:w-[23px] "
            />
            <Image
              src={assets.swapIcon}
              alt="swap-icon"
              width={18}
              className="w-[15px] lg:w-[18px]"
            />
          </Button>
          <Button styles="bg-primary-gradient lg:flex  items-center justify-center  font-inter text-[8px] lg:text-[14px] font-semibold text-white  w-[100px] lg:w-[160px] h-[33px] lg:h-[43px] rounded-[30px] lg:rounded-[80px]">
            Connect Wallet
          </Button>
          <Image
            src={assets.handburgerIcon}
            onClick={toggle}
            alt="nav-menu"
            width={25}
            className="w-[30px] flex lg:hidden"
          />
        </div>
      </div>
      {open && (
        <div className="lg:hidden py-6 flex min-h-[90vh] flex-col">
          <div className=" pb-3 px-4 mt-6">
            <span className="font-montserrat text-light-50 text-[12px]/[12px] font-medium">
              Menu
            </span>
          </div>{' '}
          {navLinks.map((link, index) => (
            <div
              key={index}
              className=" border-y py-6 border-white border-opacity-30 px-4 "
            >
              <Link
                className="text-[16px]/[24px] font-montserrat text-white font-light"
                href={link.link}
              >
                {link.name}{' '}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;
