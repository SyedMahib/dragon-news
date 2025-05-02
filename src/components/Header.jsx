import React from 'react';
import logo from "../assets/logo.png"
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center mt-8 space-y-5'>
            <img src={logo} alt=""/>
            <p className='text-accent text-lg'>Jounalism Without Fear or Favour</p>
            <p className='text-accent text-lg'>Prothom Alo-DailyStar CHUDI</p>
            <p className='font-semibold text-accent text-xl'>{format(new Date(), "EEEE ,  MMMM d ,  y")}</p>
        </div>
    );
};

export default Header;