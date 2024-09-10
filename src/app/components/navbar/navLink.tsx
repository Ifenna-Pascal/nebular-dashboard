import React, { FC } from 'react'
import { ILink } from './type'
import Link from 'next/link'


const NavLink:FC<ILink> = ({href, name, isActive}) => {
  return (
    <li className={`h-[75px] focus:outline-none focus:border-none flex items-center justify-center mr-2 ${isActive && 'border-b border-blue-100'}`}>
        <Link href={href} className='text-white font-montserrat font-semibold'>{name}</Link>
    </li>
  )
}

export default NavLink