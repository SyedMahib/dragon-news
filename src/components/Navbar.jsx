import React from 'react';
import { NavLink } from 'react-router';
import avatar from "../assets/user.png"

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div></div>
            <div className='text-accent flex justify-center items-center gap-5 text-lg ml-[150px]'>
                <NavLink to="/home" className={({isActive})=> isActive ? "text-secondary" : "text-primary"}>Home</NavLink>
                <NavLink to="/about" className={({isActive})=> isActive ? "text-secondary" : "text-primary"}>About</NavLink>
                <NavLink to="/carrear" className={({isActive})=> isActive ? "text-secondary" : "text-primary"}>Carrear</NavLink>
            </div>
            <div className='flex gap-3'>
                <img src={avatar} alt=""/>
                <button className='btn bg-primary text-base-100 text-xl font-semibold'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;