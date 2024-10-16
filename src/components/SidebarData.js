import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { MdRealEstateAgent } from "react-icons/md";
import { MdCarRental } from "react-icons/md";
import { IoIosInformationCircle } from "react-icons/io";

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiFillHome />,
        cName: 'nav-text',
    },
    {
        title: "Real Estate",
        path: "/realestate",
        icon: <MdRealEstateAgent />,
        cName: 'nav-text',
    },
    {
        title: "Cars",
        path: "/cars",
        icon: <MdCarRental />,
        cName: 'nav-text',
    },
    {
        title: "About Us",
        path: "/aboutus",
        icon: <IoIosInformationCircle />,
        cName: 'nav-text',
    },
]