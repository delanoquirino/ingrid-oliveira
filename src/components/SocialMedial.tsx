import Link from 'next/link';
import React from 'react'
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

type Props = {}

export const SocialMedial = (props: Props) => {
  return (
    <ul className='flex gap-2'>
        <li className='text-xs text-[#8E5A93] hover:text-black cursor-pointer'><FaFacebookF/></li>
        <li className='text-xs text-[#8E5A93] hover:text-black cursor-pointer'><Link href="https://www.instagram.com/_studioingridoliveira/" target='_blank'><FaInstagram/></Link></li>
        <li className='text-xs text-[#8E5A93] hover:text-black cursor-pointer'><FaTiktok/></li>
    </ul>
  )
}