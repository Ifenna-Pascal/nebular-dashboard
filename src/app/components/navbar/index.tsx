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

  const toggle = () => setOpen(!open)  

  return (
    <div className='bg-dark-200 sticky'>
      <div className="border-b border-light-50 flex px-6 lg:px-12 items-center justify-between top-0 h-[75px]">
      <div className="flex items-center justify-between">
        <Image
          src={assets.logo}
          alt="logo-image"
          width={180}
          className="w-[145px] lg:w-[180px] mr-20"
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

      <div className="flex items-center justify-between space-x-5">
        <Button styles="bg-primary-gradient flex items-center justify-center space-x-3 w-[76px] lg:w-[90px] h-[35px] lg:h-[43px] rounded-[80px]">
          <Image
            src={assets.ethNav}
            alt="eth-icon"
            width={23}
            className="w-[18px] lg:w-[23px]"
          />
          <Image
            src={assets.swapIcon}
            alt="swap-icon"
            width={18}
            className="w-[15px  ] lg:w-[18px]"
          />
        </Button>
        <Button styles="bg-primary-gradient lg:flex hidden items-center justify-center  font-inter text-[14px] font-semibold text-white w-[160px] h-[43px] rounded-[80px]">
          Connect Wallet
        </Button>
        <Image
            src={assets.handburgerIcon}
            onClick = {toggle}
            alt="nav-menu"
            width={25}
            className="w-[30px] flex lg:hidden"
          />
      </div>
    </div>
   {
    open &&  <div className='lg:hidden py-6 flex min-h-[90vh] flex-col'>
    <div className='border-b border-[#FFFFFF4D] pb-3 px-4'>
      <span className='font-montserrat text-light-50 tpx]'>Menu</span>
    </div>    {
      navLinks.map((link, index) => (
        <div key={index} className='border border-b py-6 px-4 border-light-50'>
          <Link className='text-[16px] font-montserrat text-white' href={link.link}>{link.name} </Link>
        </div>
    ))
    }
</div>

   }
     </div>
  );
};

export default NavBar;
