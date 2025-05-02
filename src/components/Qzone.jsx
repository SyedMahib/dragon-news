import React from 'react';
import swimmingImage from "../assets/swimming.png"
import playGround from "../assets/playground.png"
import ClassImage from "../assets/class.png"

const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold mb-5'>Q-Zone</h2>
            <div className='space-y-5'>
                <img className='mx-auto w-[350px]' src={swimmingImage} alt=""/>
                <img className='mx-auto w-[350px]' src={playGround} alt=""/>
                <img className='mx-auto w-[350px]' src={ClassImage} alt=""/>
            </div>
        </div>
    );
};

export default Qzone;