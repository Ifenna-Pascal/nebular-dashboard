'use client';
import { assets } from '@/assets';
import { navLinks } from '@/utillities/navlinks';
import Image from 'next/image';
import React from 'react';
import NavLink from './navLink';
import { usePathname } from 'next/navigation';
import Button from '@/app/ui/button';

const NavBar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-dark-200 sticky border-b border-light-50 flex px-12 items-center justify-between top-0 lg:h-[75px]">
      <div className="flex items-center justify-between">
        <Image
          src={assets.logo}
          alt="logo-image"
          width={180}
          className="w-[180px] mr-20"
        />
        <ul className="flex items-center justify-center gap-x-16">
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

      <div className="flex items-center justify-between space-x-5">
        <Button styles="bg-primary-gradient flex items-center justify-center space-x-3 w-[90px] h-[43px] rounded-[80px]">
          <Image
            src={assets.ethNav}
            alt="eth-icon"
            width={23}
            className="w-[23px]"
          />
          <Image
            src={assets.swapIcon}
            alt="swap-icon"
            width={18}
            className="w-[18px]"
          />
        </Button>

        <Button styles="bg-primary-gradient font-inter text-[14px] font-semibold text-white w-[160px] h-[43px] rounded-[80px]">
          Connect Wallet
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
