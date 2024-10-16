import React from 'react'
import "./Footer.css"
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='wholeFooter text-[#c4c9cf] text-sm pb-[80px] px-[100px] flex pt-[100px] border-t  border-[#283141]'>


      <div className='logoBox  w-[25%]'>
        {/* //? Logo */}
        <div className='logoText1   mb-[30px]'>URBANiSE</div>
        <ul className='downOfLogo   flex flex-col gap-[10px] text-sm'>
          <li className='insideDown flex items-center gap-[10px]'>
            <FaFacebookSquare className='iconInsideLogoBox' fontSize={23} />
            <div className='insideDown textInsideLogoBox'>Facebook</div>
          </li>
          <li className='flex items-center gap-[10px]'>
            <FaTwitter className='iconInsideLogoBox' fontSize={23} />
            <div className='insideDown textInsideLogoBox'>Twitter</div>
          </li>
          <li className='flex items-center gap-[10px]'>
            <FaYoutube className='iconInsideLogoBox' fontSize={23} />
            <div className='insideDown textInsideLogoBox'>Youtube</div>
          </li>
          <li className='flex items-center gap-[10px]'>
            <FaInstagram className='iconInsideLogoBox' fontSize={23} />
            <div className='insideDown textInsideLogoBox'>Instagram</div>
          </li>

        </ul>
      </div>

      <div className='secondPartInFooter  flex items-center justify-between w-[70%]'>
        <div className='dBox flex flex-col gap-[12px]'>
          <h2 className='font-bold text-[#dddfe4]'>Getting Started</h2>
          <p>Installation</p>
          <p>Release Notes</p>
          <p>Upgrade Guide</p>
          <p>Browser Support</p>
          <p>Editor Support</p>
        </div>
        <div className='dBox flex flex-col gap-[12px]'>
          <h2 className='font-bold text-[#dddfe4]'>Explore</h2>
          <p>Design features</p>
          <p>Prototyping</p>
          <p>Design systems</p>
          <p>Pricing</p>
          <p>Security</p>
        </div>
        <div className='dBox flex flex-col gap-[12px]'>
          <h2 className='font-bold text-[#dddfe4]'>Resources</h2>
          <p>Best practices</p>
          <p>Support</p>
          <p>Developers</p>
          <p>Learn design</p>
          <p>Releases</p>
        </div>
        <div className='dBox flex flex-col gap-[12px]'>
          <h2 className='font-bold text-[#dddfe4]'>Community</h2>
          <p>Discussion Forums</p>
          <p>Code of Conduct</p>
          <p>Community Resources</p>
          <p>Contributing</p>
          <p>Concurrent Mode</p>
        </div>
      </div>


    </div>
  )
}

export default Footer
