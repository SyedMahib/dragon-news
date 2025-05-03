import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import avatar from "../assets/user.png"
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {

    const {user, logOut} = use(AuthContext);

    const handleLogOut = (e) => {
        e.preventDefault();
        // console.log("user trying to lgout");
        logOut()
        .then(() => {
            alert("Log out succesfull");
          }).catch((error) => {
            // An error happened.
            alert(`an ${error.meassage} occured`)
          });
    }

    return (
        <div className='flex justify-between items-center'>
            <div className='w-[1%]'>{user && user.email}</div>
            <div className='text-accent flex justify-center items-center gap-5 text-lg ml-[190px]'>
                <NavLink to="/" className={({isActive})=> isActive ? "text-secondary font-bold" : "text-primary"}>Home</NavLink>
                <NavLink to="/about" className={({isActive})=> isActive ? "text-secondary font-bold" : "text-primary"}>About</NavLink>
                <NavLink to="/carrear" className={({isActive})=> isActive ? "text-secondary font-bold" : "text-primary"}>Carrear</NavLink>
            </div>
            <div className='flex gap-3'>
                <img className='rounded-full ring w-[40px]' src={`${user ? user.photoURL : avatar}`} alt=""/>
                {
                    user ? <Link onClick={handleLogOut} className='btn btn-primary text-base-100 text-xl font-semibold px-10'>LogOut</Link> : <Link to="/auth/login" className='btn btn-primary text-base-100 text-xl font-semibold px-10'>Login</Link>
                }
                
            </div>
        </div>
    );
}; 

export default Navbar;