import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinksAdmin = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/dashboard">
                Home
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/taxCategory">
                Tax categories
            </HashLink>
         
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/taxPlans">
               Tax Plans
            </HashLink>
           
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/admin">
                Logout
            </HashLink>
           
        </>
    )
}

export default NavLinksAdmin;
